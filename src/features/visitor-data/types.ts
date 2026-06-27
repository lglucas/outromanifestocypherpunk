export interface GeoData {
  country: string | null;      // "BRASIL"
  region: string | null;       // "RIO GRANDE DO SUL"
  city: string | null;         // "PORTO ALEGRE"
  isp: string | null;          // operadora/ASN org, ex "VIVO S.A."
  accuracyKm: number | null;   // raio aproximado, ex 25
}

export interface DeviceData {
  os: string | null;           // "Windows"
  browser: string | null;      // "Chrome"
  mobile: boolean;
  languages: string[];         // ["pt-BR", "en-US"]
  resolution: string | null;   // "1920x1080"
  timezone: string | null;     // "America/Sao_Paulo"
  cores: number | null;
  memoryGb: number | null;
  gpu: string | null;          // "NVIDIA GeForce RTX 3060"
  connection: string | null;   // "4g"
  doNotTrack: boolean;
}

export interface ServerVisitorData {
  ip: string | null;           // CF-Connecting-IP
  geo: GeoData;
}
