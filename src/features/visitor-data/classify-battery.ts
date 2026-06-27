export type BatteryState = 'charging' | 'high' | 'mid' | 'low' | 'unknown';

export interface BatteryReading {
  level: number;     // 0..1
  charging: boolean;
}

export function classifyBattery(b: BatteryReading | null): BatteryState {
  if (!b) return 'unknown';
  if (b.charging) return 'charging';
  if (b.level >= 0.8) return 'high';
  if (b.level >= 0.2) return 'mid';
  return 'low';
}
