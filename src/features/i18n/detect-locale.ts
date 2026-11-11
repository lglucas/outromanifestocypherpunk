// Detecção de idioma (Accept-Language) + caminho equivalente por idioma. Sprint D3.
import { findRoute, pathFor, type Lang } from '../../i18n/routes';

export const LANG_COOKIE = 'lang';

export function isLang(v: unknown): v is Lang {
  return v === 'pt' || v === 'en';
}

/**
 * Idioma preferido do navegador: o primeiro item de maior `q` do Accept-Language.
 * `pt-*` (BR ou PT) → 'pt'; qualquer outro idioma → 'en'; sem header (ou só `*`) → 'pt'.
 */
export function preferredLang(acceptLanguage: string | null | undefined): Lang {
  if (!acceptLanguage) return 'pt';
  const items = acceptLanguage
    .split(',')
    .map((part, i) => {
      const [tag, ...params] = part.trim().split(';');
      const qParam = params.map((s) => s.trim()).find((s) => s.startsWith('q='));
      const q = qParam ? Number(qParam.slice(2)) : 1;
      return { tag: tag.trim().toLowerCase(), q: Number.isFinite(q) ? q : 0, i };
    })
    .filter((x) => x.tag && x.tag !== '*' && x.q > 0)
    .sort((a, b) => b.q - a.q || a.i - b.i);
  if (items.length === 0) return 'pt';
  return items[0].tag === 'pt' || items[0].tag.startsWith('pt-') ? 'pt' : 'en';
}

/** Caminho equivalente de uma página do dossiê no idioma pedido; null se não for página. */
export function localizedPath(path: string, lang: Lang): string | null {
  const r = findRoute(path);
  return r ? pathFor(r.key, lang) : null;
}
