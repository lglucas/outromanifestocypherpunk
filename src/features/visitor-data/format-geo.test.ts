import { describe, it, expect } from 'vitest';
import { formatGeo } from './format-geo';

describe('formatGeo', () => {
  it('monta GeoData a partir de City + ASN', () => {
    const city = {
      country: { names: { pt: 'Brasil', en: 'Brazil' } },
      subdivisions: [{ names: { pt: 'Rio Grande do Sul', en: 'Rio Grande do Sul' } }],
      city: { names: { pt: 'Porto Alegre', en: 'Porto Alegre' } },
      location: { accuracy_radius: 25 },
    };
    const asn = { autonomous_system_organization: 'Vivo S.A.' };
    expect(formatGeo(city as any, asn as any)).toEqual({
      country: 'BRASIL',
      region: 'RIO GRANDE DO SUL',
      city: 'PORTO ALEGRE',
      isp: 'VIVO S.A.',
      accuracyKm: 25,
    });
  });

  it('degrada para nulls quando faltam campos', () => {
    expect(formatGeo(null, null)).toEqual({
      country: null, region: null, city: null, isp: null, accuracyKm: null,
    });
  });

  it('prefere nome em pt, cai para en', () => {
    const city = { country: { names: { en: 'Germany' } } };
    expect(formatGeo(city as any, null).country).toBe('GERMANY');
  });
});
