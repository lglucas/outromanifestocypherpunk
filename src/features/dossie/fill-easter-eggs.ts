import { readVisitorSession } from './visitor-session';
import { formatSubject } from './format-subject';

export function fillEasterEggs(doc: Document = document): void {
  const s = readVisitorSession();
  const f = formatSubject(s);
  const map: Record<string, string> = {
    nome: f.nome,
    localizacao: f.localizacao,
    operadora: f.operadora,
    maquina: f.maquina,
    gpu: s?.fp.gpu ?? '—',
    ip: s?.server.ip ?? '—',
    cidade: s?.server.geo.city ?? '—',
    navegador: s?.fp.browser ?? '—',
  };
  for (const el of doc.querySelectorAll<HTMLElement>('[data-egg]')) {
    const key = el.dataset.egg;
    if (key && key in map) el.textContent = map[key];
  }
}
