// Middleware: visitor (geo) + idioma (detecção/escolha manual, D3) + portão do terminal.
import { defineMiddleware } from 'astro:middleware';
import { geoLookup } from './features/visitor-data/geo-lookup';
import { shouldShowTerminal, isCrawlerUA, GATE_COOKIE } from './features/terminal/gate';
import { decideLang } from './features/i18n/lang-redirect';
import { LANG_COOKIE } from './features/i18n/detect-locale';
import { findRoute } from './i18n/routes';

const VARY = 'Accept-Language, Cookie';

export const onRequest = defineMiddleware(async (context, next) => {
  const h = context.request.headers;
  const isCrawler = isCrawlerUA(h.get('user-agent'));
  const path = context.url.pathname;

  const decision = decideLang({
    method: context.request.method,
    path,
    search: context.url.search.replace(/^\?/, ''),
    cookieLang: context.cookies.get(LANG_COOKIE)?.value,
    acceptLanguage: h.get('accept-language'),
    isCrawler,
  });
  if (decision.type === 'redirect') {
    const headers = new Headers({ Location: decision.location, Vary: VARY, 'Cache-Control': 'private, no-store' });
    if (decision.setCookie) {
      headers.append(
        'Set-Cookie',
        `${LANG_COOKIE}=${decision.setCookie}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`,
      );
    }
    return new Response(null, { status: 302, headers });
  }

  const ip = h.get('cf-connecting-ip') ?? h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null;
  context.locals.visitor = { ip, geo: await geoLookup(ip) };
  context.locals.showTerminal = shouldShowTerminal({
    path,
    hasPassed: context.cookies.get(GATE_COOKIE)?.value === '1',
    isCrawler,
  });

  const res = await next();
  // Páginas do dossiê variam por idioma/cookie: avisa os caches.
  if (findRoute(path)) {
    try { res.headers.set('Vary', VARY); } catch { /* headers imutáveis: ignora */ }
  }
  return res;
});
