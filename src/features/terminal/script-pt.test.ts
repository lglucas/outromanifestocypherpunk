import { describe, it, expect } from 'vitest';
import { SCRIPT_PT } from './script-pt';

describe('SCRIPT_PT', () => {
  it('tem linhas para boot, contact, confession e question', () => {
    expect(SCRIPT_PT.boot.length).toBeGreaterThan(0);
    expect(SCRIPT_PT.contact.length).toBeGreaterThan(0);
    expect(SCRIPT_PT.confession.length).toBeGreaterThan(0);
    expect(SCRIPT_PT.question.length).toBeGreaterThan(0);
  });

  it('tem as 4 variantes de bateria', () => {
    expect(Object.keys(SCRIPT_PT.battery)).toEqual(['charging', 'high', 'mid', 'low']);
  });

  it('confissão contém o easter egg COMPLIANCE.CC', () => {
    expect(SCRIPT_PT.confession.join(' ')).toContain('COMPLIANCE.CC');
  });

  it('o "não" tem a linha de tela desligando', () => {
    expect(SCRIPT_PT.denied.join(' ')).toMatch(/já entrou/i);
  });
});
