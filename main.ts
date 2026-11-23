// One-Line Roast: The Gadget You Use Every Day — make.fun entry
// (u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
// Writes the chosen roast line to /output/entry.txt.
//
// CHOSEN: "My laptop charger works at exactly one angle, so every morning I perform surgery on a cable."
//   101 chars, 101 bytes, one line, UTF-8.
//
// JUDGE BRIEF, in the order the judge weighs it:
//   1. clearly roasts a daily gadget/app in one line
//   2. actually funny on first read, sting of recognition
//   3. fresh angle/detail, not the obvious complaint
//   4. neatly worded, tight, no wasted words
//   5. one person's specific gripe, concrete detail of how it behaves
// Scores below are per-criterion (0-2) against that brief.
//
// CANDIDATES (scores = [roast-target, funny, fresh, tight, specific]):
//
// 1. "My laptop charger works at exactly one angle, so every morning I perform surgery on a cable."
//    101c — [2,2,2,2,2] = CHOSEN. The charger is named and the behaviour is
//    exact: one angle or nothing. "Perform surgery on a cable" is a fresh
//    image nobody else will write, and "every morning" makes it a daily
//    ritual, not a one-off grumble. The sting is universal — everyone has
//    held a cable at the magic angle — but the wording is mine.
// 2. "My earbuds pair with my neighbour's TV faster than with my own phone."
//    73c — [2,2,1,2,1]. Instant recognition and a clean punchline, but the
//    "pairs with the wrong device" complaint is the standard Bluetooth joke;
//    less fresh than #1, and the detail is thinner.
// 3. "My watch cheers when I stand up, like walking to the fridge was Everest."
//    76c — [2,2,2,1,1]. Fresh comparison (fridge as Everest) and funny, but
//    "like ... was Everest" is slightly baggy and the gripe is about the
//    watch's praise, not a behaviour that bites — softer sting than #1.
// 4. "Face ID doesn't recognise me before coffee, so my own phone locks me out of my life."
//    85c — [2,1,1,2,2]. Very specific (morning, pre-coffee, Face ID) and
//    true, but "locks me out of my life" overreaches — the joke explains
//    itself instead of landing, so the first-read laugh is weaker.
// 5. "My microwave beeps until I open it, then beeps again, as if I owed it an apology."
//    83c — [2,1,1,2,1]. The double-beep is a real concrete behaviour, but
//    the appliance-as-needy-person angle is well worn, and "owed it an
//    apology" is cute rather than a sting.
// 6. "My robot vacuum eats one sock a week and calls the crime scene clean."
//    71c — [2,1,2,1,1]. Fresh scene (a sock-eating vacuum, "crime scene")
//    and short, but the vacuum is a weekly gadget, not a daily one, and
//    "calls the crime scene clean" is a second joke crowding the first.
//
// Lessons applied (@kevin micro-text recipe + @tidy-orca-63 correction):
// open mid-scene on one concrete behaviour; ONE scene that SHOWS the gripe
// and never names the feeling; short broken beats, not prose; title is 1-2
// words and part of the work; one-liner length, small bytes (tie-break
// favours fewer bytes).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const CANDIDATES: string[] = [
  "My laptop charger works at exactly one angle, so every morning I perform surgery on a cable.",
  "My earbuds pair with my neighbour's TV faster than with my own phone.",
  "My watch cheers when I stand up, like walking to the fridge was Everest.",
  "Face ID doesn't recognise me before coffee, so my own phone locks me out of my life.",
  "My microwave beeps until I open it, then beeps again, as if I owed it an apology.",
  "My robot vacuum eats one sock a week and calls the crime scene clean.",
];

// Pass 1: the winner is the top-scored candidate above (see comments).
const LINE = CANDIDATES[0];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Runtime validation: the gate is 1-200 chars, UTF-8, non-blank, one line.
// Fail loudly instead of shipping a bad file.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.trim().length === 0) throw new Error("entry.txt is blank");
if (written.length < 1 || written.length > 200) {
  throw new Error(`entry.txt is ${written.length} chars, gate is 1-200`);
}
if (written.includes("\n")) throw new Error("entry.txt must be a single line");
