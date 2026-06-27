import { describe, it, expect, vi, beforeEach } from 'vitest';
import { subscribeLead } from './listmonk-client';

const cfg = {
  apiUrl: 'http://listmonk:9000',
  user: 'api',
  token: 'tok',
  listId: 3,
};

describe('subscribeLead', () => {
  beforeEach(() => vi.restoreAllMocks());

  it('faz POST com nome, email, lista e double opt-in', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200, json: async () => ({}) });
    vi.stubGlobal('fetch', fetchMock);

    const res = await subscribeLead({ name: 'Lucas', email: 'l@x.com' }, cfg);

    expect(res.ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('http://listmonk:9000/api/subscribers');
    const body = JSON.parse(init.body);
    expect(body.email).toBe('l@x.com');
    expect(body.name).toBe('Lucas');
    expect(body.lists).toEqual([3]);
    expect(body.preconfirm_subscriptions).toBe(false);
    expect(init.headers.Authorization).toContain('token');
  });

  it('retorna ok:false quando a API falha', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 500, json: async () => ({}) }));
    const res = await subscribeLead({ name: 'X', email: 'x@x.com' }, cfg);
    expect(res.ok).toBe(false);
  });

  it('não lança se o fetch rejeitar (degradação graciosa)', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network')));
    const res = await subscribeLead({ name: 'X', email: 'x@x.com' }, cfg);
    expect(res.ok).toBe(false);
  });
});
