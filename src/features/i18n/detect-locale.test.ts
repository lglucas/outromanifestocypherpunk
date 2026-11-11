import { describe, it, expect } from 'vitest';
import { preferredLang, localizedPath, isLang } from './detect-locale';
import { findRoute, normalizePath } from '../../i18n/routes';

describe('preferredLang', () => {
  it('sem header fica em PT', () => {
    expect(preferredLang(null)).toBe('pt');
    expect(preferredLang('')).toBe('pt');
    expect(preferredLang('*')).toBe('pt');
  });
  it('qualquer pt-* fica em PT', () => {
    expect(preferredLang('pt-BR,pt;q=0.9,en-US;q=0.8')).toBe('pt');
    expect(preferredLang('pt-PT')).toBe('pt');
    expect(preferredLang('pt')).toBe('pt');
  });
  it('idioma não-PT vai para EN', () => {
    expect(preferredLang('en-US,en;q=0.9')).toBe('en');
    expect(preferredLang('de-DE,de;q=0.9,pt-BR;q=0.5')).toBe('en');
    expect(preferredLang('es')).toBe('en');
  });
  it('usa o maior q, não a ordem', () => {
    expect(preferredLang('en;q=0.5,pt-BR;q=0.9')).toBe('pt');
    expect(preferredLang('pt-BR;q=0.1,fr;q=0.8')).toBe('en');
  });
  it('não confunde prefixo (ex.: "ptx")', () => {
    expect(preferredLang('ptx')).toBe('en');
  });
});

describe('localizedPath', () => {
  it('mapeia PT → EN e EN → PT', () => {
    expect(localizedPath('/', 'en')).toBe('/en');
    expect(localizedPath('/livro', 'en')).toBe('/en/book');
    expect(localizedPath('/privacidade', 'en')).toBe('/en/privacy');
    expect(localizedPath('/en/author', 'pt')).toBe('/autor');
    expect(localizedPath('/en', 'pt')).toBe('/');
  });
  it('tolera barra final', () => {
    expect(localizedPath('/livro/', 'en')).toBe('/en/book');
    expect(localizedPath('/en/', 'pt')).toBe('/');
  });
  it('null fora das páginas do dossiê', () => {
    expect(localizedPath('/api/enter', 'en')).toBeNull();
    expect(localizedPath('/sitemap.xml', 'en')).toBeNull();
  });
});

describe('routes', () => {
  it('findRoute devolve chave e idioma', () => {
    expect(findRoute('/download')).toEqual({ key: 'download', lang: 'pt' });
    expect(findRoute('/en/download')).toEqual({ key: 'download', lang: 'en' });
  });
  it('normalizePath', () => {
    expect(normalizePath('/')).toBe('/');
    expect(normalizePath('/en/')).toBe('/en');
  });
  it('isLang', () => {
    expect(isLang('pt')).toBe(true);
    expect(isLang('de')).toBe(false);
  });
});
