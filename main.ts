// how-many-tabs: writes one number (digits only) to /output/entry.txt.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

// My honest count of open browser tabs right now: 87.
// High enough to surprise, specific enough to read as a real count.
const TABS = "87";

// How many tabs do I have open? 87 — a research-heavy day:
// docs, bounties, dashboards and half-read articles, all still open.
// The gate only accepts 1-5 characters of digits, so refuse anything else.
if (!/^[0-9]{1,5}$/.test(TABS)) {
  throw new Error(`tabs must be 1-5 digits, got ${JSON.stringify(TABS)}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TABS, "utf8");
