// Ato 3: linhas da revelação (dados reais + rótulos/remates do roteiro do idioma). D3: i18n.
import type { ServerVisitorData } from '../visitor-data/types';
import type { ClientFingerprint } from '../visitor-data/client-fingerprint';
import type { Lang } from '../../i18n/routes';
import { getScript } from './script';

export function buildRevealLines(
  name: string,
  server: ServerVisitorData,
  fp: ClientFingerprint,
  lang: Lang = 'pt',
): string[] {
  const S = getScript(lang);
  const R = S.reveal;
  const out: string[] = [R.noted(name), R.intro];
  const push = (label: string, value: string | null) => {
    if (value) out.push(`> ${label} ${value}`);
  };

  push(R.ip, server.ip);
  push(R.isp, server.geo.isp);
  push(R.connection, fp.connection ? fp.connection.toUpperCase() : null);
  if (server.geo.country) {
    out.push(R.triangulating);
    push(R.country, server.geo.country);
    push(R.region, server.geo.region);
    if (server.geo.city) {
      const radius = server.geo.accuracyKm ? ` [±${server.geo.accuracyKm}km]` : '';
      out.push(`${R.exitNode} ${server.geo.city}${radius}`);
    }
  }
  const machine = [fp.os, fp.browser, fp.languages.join('/'), fp.resolution].filter(Boolean).join(' · ');
  if (machine) out.push(`${R.machine} ${machine}`);
  if (fp.cores || fp.memoryGb) {
    out.push(`${R.cpu} ${fp.cores ?? '?'} ${R.cores} · ~${fp.memoryGb ?? '?'}GB`);
  }
  push(R.gpu, fp.gpu);
  if (fp.battery !== 'unknown') out.push(`> ${S.battery[fp.battery]}`);
  if (fp.doNotTrack) out.push(...S.doNotTrack);

  out.push(R.outro);
  return out;
}
