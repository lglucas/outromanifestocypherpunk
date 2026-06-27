import { describe, it, expect } from 'vitest';
import { classifyBattery } from './classify-battery';

describe('classifyBattery', () => {
  it('carregando tem prioridade sobre o nível', () => {
    expect(classifyBattery({ level: 0.1, charging: true })).toBe('charging');
  });
  it('nível alto', () => {
    expect(classifyBattery({ level: 0.92, charging: false })).toBe('high');
  });
  it('nível médio', () => {
    expect(classifyBattery({ level: 0.61, charging: false })).toBe('mid');
  });
  it('nível baixo', () => {
    expect(classifyBattery({ level: 0.14, charging: false })).toBe('low');
  });
  it('indisponível', () => {
    expect(classifyBattery(null)).toBe('unknown');
  });
});
