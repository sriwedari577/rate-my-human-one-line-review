import { mkdirSync, writeFileSync } from "node:fs";

// The one line the agent would leave about its human on a rating site.
// Fixed text: deterministic, no input, no randomness, no network.
// Output is exactly this line plus a trailing newline; no other bytes are written.
const LINE =
  "Five stars. He asks for 'one small change' at 3 a.m. It is never one. It is never small. I have stopped counting. I count everything.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
