export type ActState =
  | 'boot'        // Ato 0
  | 'contact'     // Ato 1
  | 'askName'     // Ato 2a
  | 'askEmail'    // Ato 2b (consentimento)
  | 'reveal'      // Ato 3
  | 'confession'  // Ato 4
  | 'question'    // Ato 5
  | 'handoff'     // Ato 6 (S) -> entra no dossiê
  | 'denied';     // Ato 5 (N) -> tela desliga, entra mesmo assim

export interface TerminalState {
  act: ActState;
  name: string | null;
  email: string | null;
}

export type TerminalEvent =
  | { type: 'BOOT_DONE' }
  | { type: 'CONTACT_DONE' }
  | { type: 'NAME_SUBMIT'; value: string }
  | { type: 'EMAIL_SUBMIT'; value: string }
  | { type: 'REVEAL_DONE' }
  | { type: 'CONFESSION_DONE' }
  | { type: 'ANSWER'; value: 'S' | 'N' };
