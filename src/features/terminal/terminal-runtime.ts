import { initialState, reduce } from './machine';
import { getScript } from './script';
import type { Lang } from '../../i18n/routes';
import { buildRevealLines } from './build-reveal-lines';
import { collectFingerprint } from '../visitor-data/client-fingerprint';
import { validateEmail } from '../lead-capture/validate-email';
import type { ServerVisitorData } from '../visitor-data/types';

const TYPE_MS = 18;
const LINE_PAUSE = 350;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function typeLines(out: HTMLElement, lines: string[]) {
  for (const line of lines) {
    const el = document.createElement('div');
    out.appendChild(el);
    for (const ch of line) {
      el.textContent += ch;
      out.scrollTop = out.scrollHeight;
      await sleep(TYPE_MS);
    }
    await sleep(LINE_PAUSE);
  }
}

function ask(out: HTMLElement, prompt: string): Promise<string> {
  return new Promise((resolve) => {
    const row = document.createElement('div');
    row.className = 'term-input-row';
    const label = document.createElement('span');
    label.textContent = `${prompt} `;
    const input = document.createElement('input');
    input.className = 'term-input';
    row.append(label, input);
    out.appendChild(row);
    out.scrollTop = out.scrollHeight;
    input.focus();
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && input.value.trim()) {
        input.disabled = true;
        resolve(input.value.trim());
      }
    });
  });
}

export async function runTerminal(root: HTMLElement, lang: Lang = 'pt') {
  const SCRIPT = getScript(lang);
  const out = root.querySelector<HTMLElement>('[data-term-out]');
  if (!out) return;
  let s = initialState();

  await typeLines(out, SCRIPT.boot);
  s = reduce(s, { type: 'BOOT_DONE' });
  await typeLines(out, SCRIPT.contact);
  s = reduce(s, { type: 'CONTACT_DONE' });

  await typeLines(out, SCRIPT.askName);
  const name = await ask(out, SCRIPT.prompts.name);
  s = reduce(s, { type: 'NAME_SUBMIT', value: name });

  await typeLines(out, SCRIPT.askEmail);
  let email = '';
  for (;;) {
    const candidate = await ask(out, SCRIPT.prompts.email);
    const v = validateEmail(candidate);
    if (v.ok) {
      email = candidate.trim();
      break;
    }
    await typeLines(out, SCRIPT.emailReject[v.reason]);
  }
  s = reduce(s, { type: 'EMAIL_SUBMIT', value: email });

  // grava o lead e pega o visitor server-side
  const res = await fetch('/api/enter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, lang }),
  })
    .then((r) => r.json())
    .catch(() => ({ ok: false, visitor: { ip: null, geo: {} } }));
  const server = (res.visitor ?? { ip: null, geo: {} }) as ServerVisitorData;

  const fp = await collectFingerprint();
  // guarda pro dossiê (D1-C lê do sessionStorage pela chave livro_visitor)
  sessionStorage.setItem('livro_visitor', JSON.stringify({ name, server, fp }));

  await typeLines(out, buildRevealLines(name, server, fp, lang));
  s = reduce(s, { type: 'REVEAL_DONE' });
  await typeLines(out, SCRIPT.confession);
  s = reduce(s, { type: 'CONFESSION_DONE' });
  await typeLines(out, SCRIPT.question);

  const answer = (await ask(out, SCRIPT.prompts.answer)).toUpperCase().startsWith('N') ? 'N' : 'S';
  s = reduce(s, { type: 'ANSWER', value: answer });

  if (s.act === 'denied') {
    await typeLines(out, SCRIPT.denied);
    root.classList.add('term-shutdown');
    await sleep(1800);
  } else {
    await typeLines(out, SCRIPT.handoff);
    await sleep(600);
  }
  // handoff e denied entram no dossiê (cookie já setado pelo /api/enter)
  window.location.href = lang === 'en' ? '/en' : '/';
}
