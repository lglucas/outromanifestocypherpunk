import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = ({ site }) => {
  const base = site?.href ?? 'https://outromanifesto.space/';
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', base).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
