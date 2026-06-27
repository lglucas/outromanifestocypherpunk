import { defineMiddleware } from 'astro:middleware';
import { geoLookup } from './features/visitor-data/geo-lookup';
import { shouldShowTerminal, isCrawlerUA, GATE_COOKIE } from './features/terminal/gate';

export const onRequest = defineMiddleware(async (context, next) => {
  const h = context.request.headers;
  const ip = h.get('cf-connecting-ip') ?? h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null;
  context.locals.visitor = { ip, geo: await geoLookup(ip) };

  context.locals.showTerminal = shouldShowTerminal({
    path: context.url.pathname,
    hasPassed: context.cookies.get(GATE_COOKIE)?.value === '1',
    isCrawler: isCrawlerUA(h.get('user-agent')),
  });

  return next();
});
