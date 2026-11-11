// sitemap.xml com as versões PT e EN de cada página + alternates hreflang (xhtml:link). D3.
import type { APIRoute } from 'astro';
import { ROUTES, LANGS, type RouteKey } from '../i18n/routes';

export const prerender = false;

const HREFLANG = { pt: 'pt-BR', en: 'en' } as const;

export const GET: APIRoute = ({ site }) => {
  const base = site?.href ?? 'https://outromanifesto.space/';
  const abs = (p: string) => new URL(p, base).href;
  const urls = (Object.keys(ROUTES) as RouteKey[]).flatMap((key) => {
    const alternates = [
      ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${abs(ROUTES[key][l])}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(ROUTES[key].pt)}"/>`,
    ].join('\n');
    return LANGS.map((l) => `  <url>\n    <loc>${abs(ROUTES[key][l])}</loc>\n${alternates}\n  </url>`);
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
