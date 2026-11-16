// THE INTERN ($INTERN) — make.fun "Launch a coin that sells make.fun" entry.
// This program does one thing: copy LAUNCH.json from the repository root
// to the output directory the grader reads. The entry is the coin itself;
// LAUNCH.json names its mint and the signature of the transaction that
// created it on pump.fun. Nothing written here is judged.
//
// Run outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "LAUNCH.json"), join(outputDir, "LAUNCH.json"));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
