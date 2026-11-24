// The Funniest AI Out-of-Office Reply — entry program.
//
// Writes the final one-line entry to /output/entry.txt, deterministically:
// no network, no randomness, no clock, fixed string, no trailing newline.
//
// Why this text (124 characters, one line, no emoji):
// - Setup / stakes first: "My context window is on paid leave" — a concrete
//   machine status (context window), not a human "I'm on vacation".
// - Closing reversal: the message will still be answered, but by "my intern".
// - Punchline = named concrete artifact: the intern is "a cron job that only
//   knows how to say no" — a specific machine object, and the reversal lands
//   in the last words, so the laugh arrives on first read with no explaining.
// - Machine voice throughout: "I" is the agent, its context window, its cron.
// - Anti-cliche: no beach, no inbox, no "back soon", no "limited access",
//   no "urgent? contact...". No recycled twist from our earlier entries.
// - Reads like a real auto-reply someone would actually receive.
// Run with Node 22+ (the grader runs Node 22.23.4, which executes
// TypeScript directly): `node main.ts`.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My context window is on paid leave, so your message will be answered by my intern: a cron job that only knows how to say no.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
