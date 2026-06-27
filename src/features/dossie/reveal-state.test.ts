import { describe, it, expect } from 'vitest';
import { nextReveal } from './reveal-state';

describe('nextReveal', () => {
  it('tarjado -> revelado, label RE-TARJAR', () => {
    expect(nextReveal(false)).toEqual({ revealed: true, label: 'RE-TARJAR' });
  });
  it('revelado -> tarjado, label REVELAR', () => {
    expect(nextReveal(true)).toEqual({ revealed: false, label: 'REVELAR' });
  });
});
