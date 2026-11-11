import type { VisitorSession } from './visitor-session';
import type { Lang } from '../../i18n/routes';

export interface SubjectFields {
  nome: string;
  localizacao: string;
  operadora: string;
  maquina: string;
}

const DASH = '—';
const PLACEHOLDER: Record<Lang, string> = { pt: 'SUJEITO Nº 0001', en: 'SUBJECT No. 0001' };

export function formatSubject(s: VisitorSession | null, lang: Lang = 'pt'): SubjectFields {
  if (!s) {
    return { nome: PLACEHOLDER[lang], localizacao: DASH, operadora: DASH, maquina: DASH };
  }
  const g = s.server.geo;
  const loc = [g.city, g.region, g.country].filter(Boolean).join(' · ') || DASH;
  const maq = [s.fp.os, s.fp.browser].filter(Boolean).join(' · ') || DASH;
  return {
    nome: s.name ? s.name.toUpperCase() : PLACEHOLDER[lang],
    localizacao: loc,
    operadora: g.isp || DASH,
    maquina: maq,
  };
}
