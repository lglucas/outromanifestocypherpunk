// Decisão pura do middleware de idioma (detecção + escolha manual). Sprint D3.
import { findRoute, pathFor, type Lang } from '../../i18n/routes';
import { isLang, preferredLang } from './detect-locale';

export interface LangRequest {
  method: string;
  path: string;
  /** query string sem o "?" (pode ser vazia) */
  search: string;
  cookieLang: string | undefined;
  acceptLanguage: string | null;
  isCrawler: boolean;
}

export type LangDecision =
  | { type: 'none' }
  | { type: 'redirect'; location: string; setCookie?: Lang };

function withQuery(path: string, params: URLSearchParams): string {
  const q = params.toString();
  return q ? `${path}?${q}` : path;
}

export function decideLang(req: LangRequest): LangDecision {
  if (req.method !== 'GET' && req.method !== 'HEAD') return { type: 'none' };
  const route = findRoute(req.path);
  if (!route) return { type: 'none' };
  const params = new URLSearchParams(req.search);

  // 1. Escolha manual (?lang=pt|en): grava o cookie e vai para a URL limpa no idioma escolhido.
  const chosen = params.get('lang');
  if (chosen !== null) {
    params.delete('lang');
    if (!isLang(chosen)) return { type: 'redirect', location: withQuery(req.path, params) };
    return { type: 'redirect', location: withQuery(pathFor(route.key, chosen), params), setCookie: chosen };
  }

  // 2. Detecção: só em páginas PT. Páginas /en/* nunca redirecionam.
  if (route.lang !== 'pt' || req.isCrawler) return { type: 'none' };
  const wanted: Lang = isLang(req.cookieLang) ? req.cookieLang : preferredLang(req.acceptLanguage);
  if (wanted === 'en') return { type: 'redirect', location: withQuery(pathFor(route.key, 'en'), params) };
  return { type: 'none' };
}
