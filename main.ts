// Frost Cat — a one-line cat joke for the make.fun bounty.
// The program writes exactly one joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My cat knocked my glass off the table, stared me dead in the eye while it shattered — and I apologized to him.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
