import { describe, it, expect } from 'vitest';
import { shouldShowTerminal, GATE_COOKIE } from './gate';

describe('shouldShowTerminal', () => {
  it('mostra o terminal na home sem cookie, humano', () => {
    expect(shouldShowTerminal({ path: '/', hasPassed: false, isCrawler: false })).toBe(true);
  });
  it('não mostra se já passou (cookie)', () => {
    expect(shouldShowTerminal({ path: '/', hasPassed: true, isCrawler: false })).toBe(false);
  });
  it('não mostra para crawler (SEO)', () => {
    expect(shouldShowTerminal({ path: '/', hasPassed: false, isCrawler: true })).toBe(false);
  });
  it('não mostra em links diretos de conteúdo', () => {
    expect(shouldShowTerminal({ path: '/livro', hasPassed: false, isCrawler: false })).toBe(false);
  });
  it('expõe o nome do cookie', () => {
    expect(GATE_COOKIE).toBe('livro_entered');
  });
});
