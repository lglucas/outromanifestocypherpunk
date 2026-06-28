export interface ListmonkConfig {
  apiUrl: string;
  user: string;
  token: string;
  listId: number;
}

export interface Lead {
  name: string;
  email: string;
}

export interface SubscribeResult {
  ok: boolean;
  status: number;
}

export async function subscribeLead(
  lead: Lead,
  cfg: ListmonkConfig,
  attribs?: Record<string, unknown>,
): Promise<SubscribeResult> {
  try {
    const res = await fetch(`${cfg.apiUrl}/api/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${cfg.user}:${cfg.token}`,
      },
      body: JSON.stringify({
        email: lead.email,
        name: lead.name,
        status: 'enabled',
        lists: [cfg.listId],
        preconfirm_subscriptions: false, // dispara double opt-in
        ...(attribs ? { attribs } : {}),
      }),
    });
    return { ok: res.ok, status: res.status };
  } catch {
    return { ok: false, status: 0 };
  }
}
