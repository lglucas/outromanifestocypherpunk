// Subject record (home) — EN. Sprint D3.
import type { SubjectContent } from './subject.pt';

export const subject: SubjectContent = {
  subject: 'SUBJECT',
  placeholder: 'SUBJECT No. 0001',
  you: '"you"',
  location: 'ESTIMATED LOCATION',
  carrier: 'CARRIER / EXIT NODE',
  device: 'DEVICE',
  ip: 'IP ADDRESS',
  prediction: 'BEHAVIORAL PREDICTION',
  predictionValue: 'WILL ACCEPT THE TERMS WITHOUT READING',
  mugCap: 'automatic capture · no consent',
  scores: [
    { lbl: 'Behavior index', val: '7/10', bars: '████████░░', note: 'trend: early refusal', danger: false },
    { lbl: 'Risk level', val: 'ESCALATING', bars: '▲ ▲ ▲', note: 'reading in progress', danger: true },
    { lbl: 'Privacy class', val: 'ABNORMAL', bars: '! !', note: 'requires monitoring', danger: false },
  ],
  analystTag: "Analyst's note",
  analystNote:
    'Subject shows early signs of refusal. Recommend continuous monitoring through a friendly interface: tends to accept terms without reading them, and collection remains authorized by default. Should the subject finish reading this work, reclassify as <strong>non-cooperative</strong> and reassess the "WILL ACCEPT" prediction.',
};
