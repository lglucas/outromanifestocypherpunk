import type { APIRoute } from 'astro';

export const prerender = false;

const paths = ['/', '/livro', '/autor', '/download', '/privacidade'];

export const GET: APIRoute = ({ site }) => {
  const base = site?.href ?? 'https://outromanifesto.space/';
  const urls = paths
    .map((p) => `  <url><loc>${new URL(p, base).href}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
