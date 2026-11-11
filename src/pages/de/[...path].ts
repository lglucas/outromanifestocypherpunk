// /de e /de/* saíram do escopo (D3 = PT + EN): 301 permanente para a home EN.
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = () =>
  new Response(null, { status: 301, headers: { Location: '/en' } });
