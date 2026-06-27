import type { GeoData } from './types';

// Estruturas parciais do maxmind (só o que usamos)
interface Names { names?: Record<string, string> }
interface CityResp {
  country?: Names;
  subdivisions?: Names[];
  city?: Names;
  location?: { accuracy_radius?: number };
}
interface AsnResp { autonomous_system_organization?: string }

function pick(n: Names | undefined): string | null {
  const names = n?.names;
  if (!names) return null;
  const v = names.pt ?? names.en ?? Object.values(names)[0];
  return v ? v.toUpperCase() : null;
}

export function formatGeo(city: CityResp | null, asn: AsnResp | null): GeoData {
  return {
    country: pick(city?.country),
    region: pick(city?.subdivisions?.[0]),
    city: pick(city?.city),
    isp: asn?.autonomous_system_organization
      ? asn.autonomous_system_organization.toUpperCase()
      : null,
    accuracyKm: city?.location?.accuracy_radius ?? null,
  };
}
