import { defineMiddleware } from 'astro:middleware';
import { geoLookup } from './features/visitor-data/geo-lookup';

export const onRequest = defineMiddleware(async (context, next) => {
  const h = context.request.headers;
  const ip = h.get('cf-connecting-ip') ?? h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null;

  const geo = await geoLookup(ip);

  context.locals.visitor = { ip, geo };

  return next();
});
