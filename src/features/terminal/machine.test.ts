import { describe, it, expect } from 'vitest';
import { initialState, reduce } from './machine';

describe('terminal machine', () => {
  it('começa no boot', () => {
    expect(initialState().act).toBe('boot');
  });

  it('boot -> contact -> askName', () => {
    let s = initialState();
    s = reduce(s, { type: 'BOOT_DONE' });
    expect(s.act).toBe('contact');
    s = reduce(s, { type: 'CONTACT_DONE' });
    expect(s.act).toBe('askName');
  });

  it('guarda nome e avança para email', () => {
    const s = reduce({ act: 'askName', name: null, email: null }, { type: 'NAME_SUBMIT', value: 'Lucas' });
    expect(s).toEqual({ act: 'askEmail', name: 'Lucas', email: null });
  });

  it('email submit avança para reveal e guarda email', () => {
    const s = reduce({ act: 'askEmail', name: 'Lucas', email: null }, { type: 'EMAIL_SUBMIT', value: 'l@x.com' });
    expect(s).toEqual({ act: 'reveal', name: 'Lucas', email: 'l@x.com' });
  });

  it('reveal -> confession -> question', () => {
    let s: any = { act: 'reveal', name: 'L', email: 'e' };
    s = reduce(s, { type: 'REVEAL_DONE' });
    expect(s.act).toBe('confession');
    s = reduce(s, { type: 'CONFESSION_DONE' });
    expect(s.act).toBe('question');
  });

  it('resposta S -> handoff; N -> denied', () => {
    const base = { act: 'question', name: 'L', email: 'e' } as const;
    expect(reduce(base, { type: 'ANSWER', value: 'S' }).act).toBe('handoff');
    expect(reduce(base, { type: 'ANSWER', value: 'N' }).act).toBe('denied');
  });

  it('ignora evento fora de ordem (mantém estado)', () => {
    const s = { act: 'boot', name: null, email: null } as const;
    expect(reduce(s, { type: 'ANSWER', value: 'S' })).toEqual(s);
  });
});
