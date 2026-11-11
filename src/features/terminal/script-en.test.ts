import { describe, it, expect } from 'vitest';
import { SCRIPT_EN } from './script-en';
import { SCRIPT_PT } from './script-pt';
import { getScript } from './script';

describe('SCRIPT_EN', () => {
  it('tem linhas para boot, contact, confession e question', () => {
    expect(SCRIPT_EN.boot.length).toBeGreaterThan(0);
    expect(SCRIPT_EN.contact.length).toBeGreaterThan(0);
    expect(SCRIPT_EN.confession.length).toBeGreaterThan(0);
    expect(SCRIPT_EN.question.length).toBeGreaterThan(0);
  });

  it('tem as 4 variantes de bateria', () => {
    expect(Object.keys(SCRIPT_EN.battery)).toEqual(['charging', 'high', 'mid', 'low']);
  });

  it('confissão contém o easter egg COMPLIANCE.CC', () => {
    expect(SCRIPT_EN.confession.join(' ')).toContain('COMPLIANCE.CC');
  });

  it('o "não" tem a linha de tela desligando', () => {
    expect(SCRIPT_EN.denied.join(' ')).toMatch(/already in/i);
  });

  it('mesma estrutura do PT (chaves e tamanho das falas)', () => {
    expect(Object.keys(SCRIPT_EN)).toEqual(Object.keys(SCRIPT_PT));
    expect(Object.keys(SCRIPT_EN.reveal)).toEqual(Object.keys(SCRIPT_PT.reveal));
    for (const k of ['boot', 'contact', 'askName', 'askEmail', 'confession', 'question'] as const) {
      expect(SCRIPT_EN[k].length).toBe(SCRIPT_PT[k].length);
    }
  });

  it('a pergunta final aceita Y/N no EN (N continua sendo "não")', () => {
    expect(SCRIPT_EN.question.join(' ')).toContain('[ Y / N ]');
  });
});

describe('getScript', () => {
  it('escolhe o roteiro pelo idioma (PT por padrão)', () => {
    expect(getScript('en')).toBe(SCRIPT_EN);
    expect(getScript('pt')).toBe(SCRIPT_PT);
    expect(getScript()).toBe(SCRIPT_PT);
  });
});
