import { describe, it, expect } from 'vitest';
import { buildConsentNote } from './consent';

describe('buildConsentNote', () => {
  it('inclui a troca declarada e o timestamp ISO', () => {
    const note = buildConsentNote('2026-06-27T12:00:00.000Z');
    expect(note).toContain('e-mail pelo dossiê');
    expect(note).toContain('2026-06-27T12:00:00.000Z');
  });
  it('finalidade: lançamento + liberação em 22/05/2028', () => {
    expect(buildConsentNote('t')).toContain('22/05/2028');
  });
  it('EN: frase em inglês', () => {
    const note = buildConsentNote('2026-11-11T00:00:00.000Z', 'en');
    expect(note).toContain('email for the dossier');
    expect(note).toContain('22 May 2028');
  });
});
