import { describe, it, expect } from 'vitest';
import { validateEmail } from './validate-email';

// narrowing helper: extrai o motivo (ou null se válido)
const reasonOf = (input: string) => {
  const r = validateEmail(input);
  return r.ok ? null : r.reason;
};

describe('validateEmail', () => {
  it('aceita e-mails plausíveis', () => {
    expect(validateEmail('lucas@gmail.com')).toEqual({ ok: true });
    expect(validateEmail('  nome.sobrenome@empresa.com.br  ')).toEqual({ ok: true });
    expect(validateEmail('a@b.co')).toEqual({ ok: true });
  });

  it('rejeita formato que nem parece e-mail', () => {
    expect(reasonOf('')).toBe('format');
    expect(reasonOf('asdf')).toBe('format');
    expect(reasonOf('a@b')).toBe('format');        // sem TLD
    expect(reasonOf('a@b.c')).toBe('format');      // TLD de 1 char
    expect(reasonOf('x@example')).toBe('format');  // sem ponto
    expect(reasonOf('a b@c.com')).toBe('format');  // espaço
  });

  it('rejeita domínios de fachada (migué)', () => {
    expect(reasonOf('eu@example.com')).toBe('placeholder');
    expect(reasonOf('eu@example.org')).toBe('placeholder');
    expect(reasonOf('eu@test.com')).toBe('placeholder');
    expect(reasonOf('eu@teste.com.br')).toBe('placeholder');
    expect(reasonOf('eu@fake.io')).toBe('placeholder');
  });

  it('não confunde domínio real com fachada', () => {
    expect(validateEmail('eu@email.com').ok).toBe(true);
    expect(validateEmail('teste@gmail.com').ok).toBe(true); // "teste" no local part é ok
  });
});
