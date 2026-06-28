// Umami self-hosted (compartilhado no VPS). Valores PÚBLICOS (aparecem no HTML do cliente).
// Override opcional via env PUBLIC_UMAMI_* (não-secretos).
export const UMAMI_SRC =
  import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://stats.outromanifesto.space/script.js';
export const UMAMI_WEBSITE_ID =
  import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '61021ac1-efaf-4af6-9f5f-bb6d824fc53f';
