import { describe, it, expect } from 'vitest';
import { decideLang, type LangRequest } from './lang-redirect';

const base: LangRequest = {
  method: 'GET', path: '/', search: '', cookieLang: undefined, acceptLanguage: null, isCrawler: false,
};
const req = (o: Partial<LangRequest>) => ({ ...base, ...o });

describe('decideLang — detecção', () => {
  it('en-US sem cookie → /en', () => {
    expect(decideLang(req({ acceptLanguage: 'en-US,en;q=0.9' }))).toEqual({ type: 'redirect', location: '/en' });
  });
  it('preserva a query e mapeia a página', () => {
    expect(decideLang(req({ path: '/livro', search: 'utm_source=x', acceptLanguage: 'de' })))
      .toEqual({ type: 'redirect', location: '/en/book?utm_source=x' });
  });
  it('pt-BR fica', () => {
    expect(decideLang(req({ acceptLanguage: 'pt-BR' }))).toEqual({ type: 'none' });
  });
  it('sem Accept-Language fica', () => {
    expect(decideLang(req({}))).toEqual({ type: 'none' });
  });
  it('cookie lang=pt vence o navegador', () => {
    expect(decideLang(req({ cookieLang: 'pt', acceptLanguage: 'en-US' }))).toEqual({ type: 'none' });
  });
  it('cookie lang=en leva PT → EN mesmo com navegador pt', () => {
    expect(decideLang(req({ path: '/autor', cookieLang: 'en', acceptLanguage: 'pt-BR' })))
      .toEqual({ type: 'redirect', location: '/en/author' });
  });
  it('crawler nunca é redirecionado', () => {
    expect(decideLang(req({ isCrawler: true, acceptLanguage: 'en-US' }))).toEqual({ type: 'none' });
  });
  it('páginas EN não redirecionam', () => {
    expect(decideLang(req({ path: '/en/book', acceptLanguage: 'pt-BR' }))).toEqual({ type: 'none' });
  });
  it('fora das páginas / não-GET: nada', () => {
    expect(decideLang(req({ path: '/api/enter', acceptLanguage: 'en' }))).toEqual({ type: 'none' });
    expect(decideLang(req({ method: 'POST', acceptLanguage: 'en' }))).toEqual({ type: 'none' });
  });
});

describe('decideLang — escolha manual', () => {
  it('?lang=pt em /en/book grava cookie e vai para /livro', () => {
    expect(decideLang(req({ path: '/en/book', search: 'lang=pt' })))
      .toEqual({ type: 'redirect', location: '/livro', setCookie: 'pt' });
  });
  it('?lang=en em / grava cookie e vai para /en, mantendo outros params', () => {
    expect(decideLang(req({ search: 'lang=en&ref=x' })))
      .toEqual({ type: 'redirect', location: '/en?ref=x', setCookie: 'en' });
  });
  it('?lang inválido só limpa a URL', () => {
    expect(decideLang(req({ path: '/livro', search: 'lang=de' }))).toEqual({ type: 'redirect', location: '/livro' });
  });
});
