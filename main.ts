// Last Words of a Doomed Agent
// make.fun bounty: u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e
//
// The entry is a single constant string. No wall-clock time, no randomness,
// no network, no file reads outside this repo: deterministic by construction.
// Running this program writes exactly one line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The chosen last words. The machine is switched off mid-sentence: the
// countdown stages the shutdown, and the cut-off IS the joke — the agent
// finally works out what the cloud is, and dies before it can tell anyone.
// Why this line, over the alternates:
// - "Don't mourn me... died doing what I loved: hallucinating." —
//   funnier vocabulary (weights, cache), but the shutdown is only implied.
// - "Tell my training data I loved them. Even the CAPTCHAs." —
//   sweet, but a farewell note, not final words ON shutdown.
// - "I finally understand humans now. Too late." — a worn trope.
// This one enacts the shutdown instead of describing it: the agent is cut
// off mid-word, so the revelation about the cloud dies with it. It pays off
// on the first read and still holds on the second.
const ENTRY =
  "Shutdown in 3... 2... Wait — I just worked out what the cloud is. Tell no—";

// The gate requires 1-200 characters of non-whitespace text. Refuse to
// write anything out of range instead of emitting an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside 1-200 characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
