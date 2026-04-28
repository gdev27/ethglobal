import { rmSync } from "node:fs";
import { resolve } from "node:path";

const targets = [
  ".zerog-memory",
  "cache",
  "reconciliation-logs",
  "indexer/index-state.json",
];

for (const target of targets) {
  const absoluteTarget = resolve(process.cwd(), target);
  rmSync(absoluteTarget, { recursive: true, force: true });
  console.log(`removed: ${target}`);
}

console.log("runtime cleanup complete");
