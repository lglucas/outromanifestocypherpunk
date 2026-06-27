import { classifyBattery, type BatteryState } from './classify-battery';
import type { DeviceData } from './types';

export interface ClientFingerprint extends DeviceData {
  battery: BatteryState;
}

function readGpu(): string | null {
  try {
    const gl = document.createElement('canvas').getContext('webgl');
    const ext = gl?.getExtension('WEBGL_debug_renderer_info');
    return ext ? (gl!.getParameter(ext.UNMASKED_RENDERER_WEBGL) as string) : null;
  } catch {
    return null;
  }
}

export async function collectFingerprint(): Promise<ClientFingerprint> {
  const nav = navigator as any;

  let battery: BatteryState = 'unknown';
  try {
    if (nav.getBattery) {
      const b = await nav.getBattery();
      battery = classifyBattery({ level: b.level, charging: b.charging });
    }
  } catch {
    /* sem suporte: 'unknown' */
  }

  return {
    os: null, // OS/browser server-side vêm do UA; aqui foco no hardware
    browser: null,
    mobile: /Mobile|Android|iPhone/i.test(nav.userAgent ?? ''),
    languages: Array.isArray(nav.languages) ? [...nav.languages] : [],
    resolution: typeof screen !== 'undefined' ? `${screen.width}x${screen.height}` : null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone ?? null,
    cores: nav.hardwareConcurrency ?? null,
    memoryGb: nav.deviceMemory ?? null,
    gpu: readGpu(),
    connection: nav.connection?.effectiveType ?? null,
    doNotTrack: nav.doNotTrack === '1' || nav.doNotTrack === 'yes',
    battery,
  };
}
