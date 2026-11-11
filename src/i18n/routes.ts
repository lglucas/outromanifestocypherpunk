// Tabela única de equivalência PT↔EN das páginas do dossiê. Sprint D3 (i18n EN).
export type Lang = 'pt' | 'en';
export const LANGS: readonly Lang[] = ['pt', 'en'];

export type RouteKey = 'home' | 'book' | 'author' | 'download' | 'privacy';

export const ROUTES: Record<RouteKey, Record<Lang, string>> = {
  home: { pt: '/', en: '/en' },
  book: { pt: '/livro', en: '/en/book' },
  author: { pt: '/autor', en: '/en/author' },
  download: { pt: '/download', en: '/en/download' },
  privacy: { pt: '/privacidade', en: '/en/privacy' },
};

/** Tira a barra final (exceto na raiz). */
export function normalizePath(path: string): string {
  return path.length > 1 && path.endsWith('/') ? path.replace(/\/+$/, '') || '/' : path;
}

/** Acha a página (e o idioma) de um caminho; null se não for página do dossiê. */
export function findRoute(path: string): { key: RouteKey; lang: Lang } | null {
  const p = normalizePath(path);
  for (const key of Object.keys(ROUTES) as RouteKey[]) {
    for (const lang of LANGS) {
      if (ROUTES[key][lang] === p) return { key, lang };
    }
  }
  return null;
}

export function pathFor(key: RouteKey, lang: Lang): string {
  return ROUTES[key][lang];
}
