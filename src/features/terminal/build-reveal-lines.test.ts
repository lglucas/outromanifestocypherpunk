import { describe, it, expect } from 'vitest';
import { buildRevealLines } from './build-reveal-lines';

const server = {
  ip: '189.45.10.20',
  geo: { country: 'BRASIL', region: 'RIO GRANDE DO SUL', city: 'PORTO ALEGRE', isp: 'VIVO S.A.', accuracyKm: 25 },
};
const fp = {
  os: 'Windows', browser: 'Chrome', mobile: false, languages: ['pt-BR', 'en-US'],
  resolution: '1920x1080', timezone: 'America/Sao_Paulo', cores: 8, memoryGb: 16,
  gpu: 'NVIDIA GeForce RTX 3060', connection: '4g', doNotTrack: true, battery: 'low' as const,
};

describe('buildRevealLines', () => {
  it('inclui IP, operadora, geo e máquina', () => {
    const lines = buildRevealLines('Lucas', server as any, fp as any).join('\n');
    expect(lines).toContain('189.45.10.20');
    expect(lines).toContain('VIVO S.A.');
    expect(lines).toContain('PORTO ALEGRE [±25km]');
    expect(lines).toContain('Chrome');
    expect(lines).toContain('RTX 3060');
  });

  it('inclui a variante de bateria certa', () => {
    const lines = buildRevealLines('L', server as any, fp as any).join('\n');
    expect(lines).toMatch(/carrega isso antes que acabe/);
  });

  it('inclui o remate Do Not Track quando ativo', () => {
    const lines = buildRevealLines('L', server as any, fp as any).join('\n');
    expect(lines).toMatch(/não me rastreie/i);
  });

  it('omite linhas de dados ausentes (degradação graciosa)', () => {
    const bare = { ip: null, geo: { country: null, region: null, city: null, isp: null, accuracyKm: null } };
    const fpBare = { ...fp, gpu: null, doNotTrack: false, battery: 'unknown' as const };
    const lines = buildRevealLines('L', bare as any, fpBare as any).join('\n');
    expect(lines).not.toContain('ENDEREÇO IP');
    expect(lines).not.toContain('PLACA DE VÍDEO');
    expect(lines).not.toMatch(/não me rastreie/i);
  });
});
