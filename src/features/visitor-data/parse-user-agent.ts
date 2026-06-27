export interface UserAgentInfo {
  browser: string | null;
  os: string | null;
  mobile: boolean;
}

export function parseUserAgent(ua: string): UserAgentInfo {
  const mobile = /Mobile|Android|iPhone|iPad/i.test(ua);

  let os: string | null = null;
  if (/iPhone|iPad|iOS/i.test(ua)) os = 'iOS';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/Windows/i.test(ua)) os = 'Windows';
  else if (/Mac OS X|Macintosh/i.test(ua)) os = 'macOS';
  else if (/Linux/i.test(ua)) os = 'Linux';

  let browser: string | null = null;
  if (/Firefox\//i.test(ua)) browser = 'Firefox';
  else if (/Edg\//i.test(ua)) browser = 'Edge';
  else if (/Chrome\//i.test(ua)) browser = 'Chrome';
  else if (/Safari\//i.test(ua) && /Version\//i.test(ua)) browser = 'Safari';

  return { browser, os, mobile };
}
