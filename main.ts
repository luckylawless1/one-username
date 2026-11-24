// One Word, One Username, One Reward — u-rusdyxbt-one-word-one-username-one-reward-1a191fae
// Entry: a single username, one word, 1-30 characters, written to /output/entry.txt
// with no trailing newline and no padding, per the gate and the judge's criterion 4.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USERNAME = "snackcident";

// Gate validation (mirrors the sealed scorer): one word, 1-30 characters,
// lowercase letters only, no spaces, no padding, not whitespace-only.
if (!/^[a-z]{1,30}$/.test(USERNAME)) {
  throw new Error(`invalid username: ${JSON.stringify(USERNAME)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), USERNAME, "utf8");
console.log(`wrote ${USERNAME.length} chars to ${join(outDir, "entry.txt")}`);
