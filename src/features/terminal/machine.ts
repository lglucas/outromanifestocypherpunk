import type { TerminalState, TerminalEvent } from './types';

export function initialState(): TerminalState {
  return { act: 'boot', name: null, email: null };
}

export function reduce(s: TerminalState, e: TerminalEvent): TerminalState {
  switch (s.act) {
    case 'boot':
      return e.type === 'BOOT_DONE' ? { ...s, act: 'contact' } : s;
    case 'contact':
      return e.type === 'CONTACT_DONE' ? { ...s, act: 'askName' } : s;
    case 'askName':
      return e.type === 'NAME_SUBMIT' ? { ...s, act: 'askEmail', name: e.value } : s;
    case 'askEmail':
      return e.type === 'EMAIL_SUBMIT' ? { ...s, act: 'reveal', email: e.value } : s;
    case 'reveal':
      return e.type === 'REVEAL_DONE' ? { ...s, act: 'confession' } : s;
    case 'confession':
      return e.type === 'CONFESSION_DONE' ? { ...s, act: 'question' } : s;
    case 'question':
      if (e.type === 'ANSWER') return { ...s, act: e.value === 'S' ? 'handoff' : 'denied' };
      return s;
    default:
      return s;
  }
}
