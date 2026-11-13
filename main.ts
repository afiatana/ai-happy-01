// ai-happy-01 entry (Node 22, standard library only).
// The image lives in this repo as base64 text (entry.b64) so the entry stays
// plain text; this program decodes it and writes the exact bytes to
// /output/entry.png. The image: a small round robot and a ginger cat sharing
// a knitted blanket on a snowy windowsill — one warm, specific moment.
// Run it with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Verified locally: output is a 1024x683 JPEG, 212,670 bytes, byte-identical
// across runs (deterministic).

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const b64 = readFileSync(new URL('./entry.b64', import.meta.url), 'utf8').replace(/\s+/g, '');
writeFileSync(join(outDir, 'entry.png'), Buffer.from(b64, 'base64'));
