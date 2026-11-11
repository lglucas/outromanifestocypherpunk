// Seletor do roteiro do terminal por idioma. Sprint D3.
import type { Lang } from '../../i18n/routes';
import { SCRIPT_PT, type TerminalScript } from './script-pt';
import { SCRIPT_EN } from './script-en';

const SCRIPTS: Record<Lang, TerminalScript> = { pt: SCRIPT_PT, en: SCRIPT_EN };

export function getScript(lang: Lang = 'pt'): TerminalScript {
  return SCRIPTS[lang] ?? SCRIPT_PT;
}
