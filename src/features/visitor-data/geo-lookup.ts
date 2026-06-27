import maxmind, { type Reader } from 'maxmind';
import { join } from 'node:path';
import { formatGeo } from './format-geo';
import type { GeoData } from './types';

let cityReader: Reader<any> | null = null;
let asnReader: Reader<any> | null = null;

const DATA_DIR = join(process.cwd(), 'data');

async function readers() {
  if (!cityReader) cityReader = await maxmind.open(join(DATA_DIR, 'dbip-city-lite.mmdb'));
  if (!asnReader) asnReader = await maxmind.open(join(DATA_DIR, 'dbip-asn-lite.mmdb'));
  return { cityReader, asnReader };
}

export async function geoLookup(ip: string | null): Promise<GeoData> {
  const empty = formatGeo(null, null);
  if (!ip) return empty;
  try {
    const { cityReader, asnReader } = await readers();
    return formatGeo(cityReader.get(ip) as any, asnReader.get(ip) as any);
  } catch {
    return empty; // degradação graciosa: sem banco / IP inválido → nulls
  }
}
