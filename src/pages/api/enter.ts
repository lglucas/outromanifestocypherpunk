import type { APIRoute } from 'astro';
import { subscribeLead, buildConsentNote } from '../../features/lead-capture';
import { GATE_COOKIE } from '../../features/terminal/gate';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  let body: { name?: string; email?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false }), { status: 400 });
  }
  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
    return new Response(JSON.stringify({ ok: false, error: 'invalid' }), { status: 422 });
  }

  // Grava o lead (falha graciosa: não bloqueia a entrada se o Listmonk cair).
  // Vars não-PUBLIC vêm de process.env no runtime do adapter Node (env_file no compose).
  await subscribeLead(
    { name, email },
    {
      apiUrl: process.env.LISTMONK_API_URL ?? '',
      user: process.env.LISTMONK_API_USER ?? '',
      token: process.env.LISTMONK_API_TOKEN ?? '',
      listId: Number(process.env.LISTMONK_LIST_ID ?? 0),
    },
  );
  // Nota de consentimento (futuro: gravar como atributo custom no Listmonk).
  void buildConsentNote(new Date().toISOString());

  cookies.set(GATE_COOKIE, '1', {
    path: '/', maxAge: 60 * 60 * 24 * 365, httpOnly: false, sameSite: 'lax',
  });

  return new Response(JSON.stringify({ ok: true, visitor: locals.visitor }), {
    status: 200, headers: { 'Content-Type': 'application/json' },
  });
};
