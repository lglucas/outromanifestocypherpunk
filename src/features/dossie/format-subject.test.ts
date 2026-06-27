import { describe, it, expect } from 'vitest';
import { formatSubject } from './format-subject';

describe('formatSubject', () => {
  it('monta os campos da ficha a partir da sessão', () => {
    const s = {
      name: 'Lucas',
      server: { ip: '1.2.3.4', geo: { country: 'BRASIL', region: 'RS', city: 'PORTO ALEGRE', isp: 'VIVO S.A.', accuracyKm: 25 } },
      fp: { os: 'Windows', browser: 'Chrome', gpu: 'RTX 3060', connection: '4g' },
    };
    const f = formatSubject(s as any);
    expect(f.nome).toBe('LUCAS');
    expect(f.localizacao).toBe('PORTO ALEGRE · RS · BRASIL');
    expect(f.operadora).toBe('VIVO S.A.');
    expect(f.maquina).toBe('Windows · Chrome');
  });

  it('usa placeholder "SUJEITO Nº 0001" quando não há sessão', () => {
    const f = formatSubject(null);
    expect(f.nome).toBe('SUJEITO Nº 0001');
    expect(f.localizacao).toBe('—');
  });
});
