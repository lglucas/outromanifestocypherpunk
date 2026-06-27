// Frase de consentimento exibida no Ato 2 (mantida em sincronia com o roteiro do terminal).
export const CONSENT_STATEMENT =
  'Ao logar, aceito receber o dossiê (PDF) e o aviso de lançamento por e-mail. Troca declarada: e-mail pelo dossiê.';

export function buildConsentNote(timestampIso: string): string {
  return `${CONSENT_STATEMENT} [consentido em ${timestampIso}]`;
}
