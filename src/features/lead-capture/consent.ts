// Frase de consentimento exibida no Ato 2 (mantida em sincronia com o roteiro do terminal).
// D3: por idioma + finalidade alinhada à licença (aviso de lançamento e liberação em 22/05/2028).
import type { Lang } from '../../i18n/routes';

export const CONSENT_STATEMENTS: Record<Lang, string> = {
  pt: 'Ao logar, aceito receber por e-mail o aviso de lançamento do livro e da liberação gratuita (PDF/EPUB) em 22/05/2028. Troca declarada: e-mail pelo dossiê.',
  en: 'By logging in, I agree to receive emails about the book launch and its free release (PDF/EPUB) on 22 May 2028. Declared trade: email for the dossier.',
};

/** Mantido por compatibilidade (PT). */
export const CONSENT_STATEMENT = CONSENT_STATEMENTS.pt;

export function buildConsentNote(timestampIso: string, lang: Lang = 'pt'): string {
  return `${CONSENT_STATEMENTS[lang]} [consentido em ${timestampIso}]`;
}
