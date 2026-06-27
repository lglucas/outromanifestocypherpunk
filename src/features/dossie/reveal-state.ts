export interface RevealState {
  revealed: boolean;
  label: 'REVELAR' | 'RE-TARJAR';
}

export function nextReveal(isRevealed: boolean): RevealState {
  return isRevealed
    ? { revealed: false, label: 'REVELAR' }
    : { revealed: true, label: 'RE-TARJAR' };
}
