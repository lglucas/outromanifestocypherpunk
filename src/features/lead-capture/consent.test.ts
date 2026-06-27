import { describe, it, expect } from 'vitest';
import { buildConsentNote } from './consent';

describe('buildConsentNote', () => {
  it('inclui a troca declarada e o timestamp ISO', () => {
    const note = buildConsentNote('2026-06-27T12:00:00.000Z');
    expect(note).toContain('e-mail pelo dossiê');
    expect(note).toContain('2026-06-27T12:00:00.000Z');
  });
});
