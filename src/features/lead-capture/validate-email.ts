export type EmailValidation = { ok: true } | { ok: false; reason: 'format' | 'placeholder' };

// Domínios de fachada / "migué" — qualquer label (fora o TLD) que bata exato é rejeitado.
const PLACEHOLDER = new Set([
  'example', 'exemplo', 'test', 'teste', 'fake', 'invalid',
  'none', 'nao', 'localhost', 'asdf', 'sdf', 'aaa', 'xxx', 'mailinator',
]);

// local@dominio.tld — TLD com 2+ chars, sem espaços.
const EMAIL_RE = /^[^\s@]+@([^\s@]+\.[^\s@]{2,})$/;

export function validateEmail(input: string): EmailValidation {
  const email = input.trim().toLowerCase();
  const m = EMAIL_RE.exec(email);
  if (!m) return { ok: false, reason: 'format' };

  const labels = m[1].split('.');
  const nonTld = labels.slice(0, -1); // tudo menos o TLD
  if (nonTld.some((l) => PLACEHOLDER.has(l))) return { ok: false, reason: 'placeholder' };

  return { ok: true };
}
