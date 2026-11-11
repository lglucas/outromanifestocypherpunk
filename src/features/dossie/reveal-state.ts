import type { Lang } from '../../i18n/routes';

export interface RevealState {
  revealed: boolean;
  label: string;
}

const LABELS: Record<Lang, { reveal: string; redact: string }> = {
  pt: { reveal: 'REVELAR', redact: 'RE-TARJAR' },
  en: { reveal: 'REVEAL', redact: 'REDACT AGAIN' },
};

export function nextReveal(isRevealed: boolean, lang: Lang = 'pt'): RevealState {
  const l = LABELS[lang];
  return isRevealed ? { revealed: false, label: l.reveal } : { revealed: true, label: l.redact };
}

/** Idioma da página no cliente, pelo <html lang>. */
export function docLang(doc: Document = document): Lang {
  return doc.documentElement.lang.toLowerCase().startsWith('en') ? 'en' : 'pt';
}
