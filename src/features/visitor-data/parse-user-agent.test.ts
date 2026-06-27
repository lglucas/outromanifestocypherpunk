import { describe, it, expect } from 'vitest';
import { parseUserAgent } from './parse-user-agent';

describe('parseUserAgent', () => {
  it('detecta Chrome no Windows desktop', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
    expect(parseUserAgent(ua)).toEqual({ browser: 'Chrome', os: 'Windows', mobile: false });
  });

  it('detecta Safari no iPhone (mobile)', () => {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
    expect(parseUserAgent(ua)).toEqual({ browser: 'Safari', os: 'iOS', mobile: true });
  });

  it('detecta Firefox no Android', () => {
    const ua = 'Mozilla/5.0 (Android 13; Mobile; rv:120.0) Gecko/120.0 Firefox/120.0';
    expect(parseUserAgent(ua)).toEqual({ browser: 'Firefox', os: 'Android', mobile: true });
  });

  it('degrada para nulls em UA desconhecida', () => {
    expect(parseUserAgent('')).toEqual({ browser: null, os: null, mobile: false });
  });
});
