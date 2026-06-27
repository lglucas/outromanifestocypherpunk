import type { VisitorSession } from './visitor-session';

export interface SubjectFields {
  nome: string;
  localizacao: string;
  operadora: string;
  maquina: string;
}

const DASH = '—';

export function formatSubject(s: VisitorSession | null): SubjectFields {
  if (!s) {
    return { nome: 'SUJEITO Nº 0001', localizacao: DASH, operadora: DASH, maquina: DASH };
  }
  const g = s.server.geo;
  const loc = [g.city, g.region, g.country].filter(Boolean).join(' · ') || DASH;
  const maq = [s.fp.os, s.fp.browser].filter(Boolean).join(' · ') || DASH;
  return {
    nome: s.name ? s.name.toUpperCase() : 'SUJEITO Nº 0001',
    localizacao: loc,
    operadora: g.isp || DASH,
    maquina: maq,
  };
}
