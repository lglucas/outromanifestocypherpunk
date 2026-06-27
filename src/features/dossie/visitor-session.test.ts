import { describe, it, expect } from 'vitest';
import { readVisitorSession, writeVisitorSession } from './visitor-session';

function fakeStorage(): Storage {
  const m = new Map<string, string>();
  return {
    getItem: (k) => m.get(k) ?? null,
    setItem: (k, v) => void m.set(k, v),
    removeItem: (k) => void m.delete(k),
    clear: () => m.clear(),
    key: () => null,
    length: 0,
  } as Storage;
}

describe('visitor-session', () => {
  it('escreve e lê o visitor', () => {
    const s = fakeStorage();
    const data = { name: 'Lucas', server: { ip: '1.2.3.4', geo: { city: 'POA' } }, fp: { gpu: 'RTX' } };
    writeVisitorSession(data as any, s);
    expect(readVisitorSession(s)).toEqual(data);
  });

  it('retorna null quando vazio', () => {
    expect(readVisitorSession(fakeStorage())).toBeNull();
  });

  it('retorna null em JSON inválido', () => {
    const s = fakeStorage();
    s.setItem('livro_visitor', '{quebrado');
    expect(readVisitorSession(s)).toBeNull();
  });
});
