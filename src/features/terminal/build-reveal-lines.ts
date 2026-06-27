import type { ServerVisitorData } from '../visitor-data/types';
import type { ClientFingerprint } from '../visitor-data/client-fingerprint';
import { SCRIPT_PT } from './script-pt';

export function buildRevealLines(
  name: string,
  server: ServerVisitorData,
  fp: ClientFingerprint,
): string[] {
  const out: string[] = [
    `> ${name}. anotado.`,
    '> deixa eu te mostrar o que você me deu sem perceber, só por estar aqui:',
  ];
  const push = (label: string, value: string | null) => {
    if (value) out.push(`> ${label} ${value}`);
  };

  push('ENDEREÇO IP ....', server.ip);
  push('OPERADORA ......', server.geo.isp);
  push('CONEXÃO ........', fp.connection ? fp.connection.toUpperCase() : null);
  if (server.geo.country) {
    out.push('> TRIANGULANDO ORIGEM...');
    push('  PAÍS .........', server.geo.country);
    push('  REGIÃO .......', server.geo.region);
    if (server.geo.city) {
      const radius = server.geo.accuracyKm ? ` [±${server.geo.accuracyKm}km]` : '';
      out.push(`> NÓ DE SAÍDA .. ${server.geo.city}${radius}`);
    }
  }
  const machine = [fp.os, fp.browser, fp.languages.join('/'), fp.resolution].filter(Boolean).join(' · ');
  if (machine) out.push(`> MÁQUINA ........ ${machine}`);
  if (fp.cores || fp.memoryGb) {
    out.push(`> PROCESSADOR .... ${fp.cores ?? '?'} núcleos · ~${fp.memoryGb ?? '?'}GB`);
  }
  push('PLACA DE VÍDEO .', fp.gpu);
  if (fp.battery !== 'unknown') out.push(`> ${SCRIPT_PT.battery[fp.battery]}`);
  if (fp.doNotTrack) out.push(...SCRIPT_PT.doNotTrack);

  out.push('> eu não te pedi nada disso. você só chegou. tá começando a entender?');
  return out;
}
