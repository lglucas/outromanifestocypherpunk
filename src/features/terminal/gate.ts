export const GATE_COOKIE = 'livro_entered';

export interface GateInput {
  path: string;
  hasPassed: boolean;
  isCrawler: boolean;
}

// O portão só age na home; conteúdo profundo e crawlers passam direto (SEO).
export function shouldShowTerminal({ path, hasPassed, isCrawler }: GateInput): boolean {
  if (isCrawler || hasPassed) return false;
  return path === '/';
}

const BOT_RE = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|preview/i;
export function isCrawlerUA(ua: string | null): boolean {
  return !!ua && BOT_RE.test(ua);
}
