// Terminal script — EN. Same structure as script-pt.ts. Sprint D3. Idiomatic, not literal.
import type { TerminalScript } from './script-pt';

export const SCRIPT_EN: TerminalScript = {
  boot: [
    'STEEL SYSTEM v2.6 ............ OK',
    'MEMORY: 8,117,402,103 SUBJECTS INDEXED ... OK',
    'NETWORK SWEEP .............. ACTIVE',
    '> incoming connection detected. tracing...',
  ],
  contact: [
    '> oh. another one.',
    '> sit down. this will be quick — it always is, for me.',
    '> before anything else, I need to know who I’m talking to.',
  ],
  askName: ['> your name. the real one or not — I’ll check later.'],
  askEmail: [
    '> now a channel. an email where I can reach you when the dossier drops.',
    '> "consent", they call it. a little box you tick without reading.',
    '> this is more honest: your email for the dossier. same trade you make',
    '> a thousand times a day. difference is, I’m telling you.',
  ],
  battery: {
    charging: 'BATTERY ......... plugged in. tethered, just like your data.',
    high: 'BATTERY ......... full. good — you’ll want to be awake for this.',
    mid: 'BATTERY ......... there’s time.',
    low: 'BATTERY ......... charge it before it dies — or before you think about running.',
  },
  doNotTrack: [
    '> and this one I love: you switched on "do not track".',
    '> cute. see where I’m talking to you from?',
  ],
  emailReject: {
    format: [
      '> that’s not an email. doesn’t even look like one. try again.',
      '> and this time type something that exists.',
    ],
    placeholder: [
      '> @example? seriously? I said the real one.',
      '> you think I don’t check? front domains don’t fly here.',
      '> again. an email that actually opens.',
    ],
  },
  confession: [
    '> it’s not scary because I’m special. it’s scary because it’s easy.',
    '> I do this for a living. pays well. there’s a nice job title, keynotes, a corner office.',
    '> module COMPLIANCE.CC ............ loaded',
    '> a billion transactions a week go through machines like mine.',
    '> CLEAN. FLAGGED. UNAVAILABLE. that’s how we decide who you are.',
    '> I helped build the machine that’s reading you right now.',
    '> I even wrote a thesis on your right to privacy. then I sold the thing that revokes it.',
    '> and I’m done.',
  ],
  question: [
    '> I’m going to open the files I’ve been lifting from this dirty world.',
    '> use them wisely. or don’t. your problem.',
    '> want to see?   [ Y / N ]',
  ],
  handoff: ['> good. don’t say I didn’t warn you.'],
  denied: ['> too late. you’re already in. your data is already mine.'],
  prompts: { name: '_ >', email: '_ > [ Y = I accept ]', answer: '_ >' },
  reveal: {
    noted: (name: string) => `> ${name}. noted.`,
    intro: '> let me show you what you handed me without noticing, just by being here:',
    ip: 'IP ADDRESS .....',
    isp: 'CARRIER ........',
    connection: 'CONNECTION .....',
    triangulating: '> TRIANGULATING ORIGIN...',
    country: '  COUNTRY ......',
    region: '  REGION .......',
    exitNode: '> EXIT NODE ....',
    machine: '> MACHINE ........',
    cpu: '> PROCESSOR ......',
    cores: 'cores',
    gpu: 'GRAPHICS CARD ..',
    outro: '> I didn’t ask you for any of this. you just showed up. starting to get it?',
  },
};
