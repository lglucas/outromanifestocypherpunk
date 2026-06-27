import type { ServerVisitorData } from '../visitor-data/types';
import type { ClientFingerprint } from '../visitor-data/client-fingerprint';

export interface VisitorSession {
  name: string;
  server: ServerVisitorData;
  fp: ClientFingerprint;
}

const KEY = 'livro_visitor';

export function writeVisitorSession(data: VisitorSession, storage: Storage = sessionStorage): void {
  storage.setItem(KEY, JSON.stringify(data));
}

export function readVisitorSession(storage: Storage = sessionStorage): VisitorSession | null {
  const raw = storage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as VisitorSession;
  } catch {
    return null;
  }
}
