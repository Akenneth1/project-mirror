import { appendFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { benchmarkCases, validateCases } from "./cases.js";
import { runFashnCase } from "./providers/fashn.js";

const ROOT = resolve(import.meta.dirname, "..");
const resultsPath = resolve(ROOT, "results", "benchmark-results.jsonl");
const models = ["tryon-v1.6", "tryon-max"] as const;

function printConfiguration(): void {
  console.log("Cases:", benchmarkCases.length);
  console.log("Models:", models.join(", "));
  console.log("v1.6: mode=balanced, num_samples=1, seed=42, return_base64=true");
  console.log("max: resolution=1k, generation_mode=balanced, num_images=1, seed=42, return_base64=true");
}

async function main(): Promise<void> {
  const dryRun = process.argv.includes("--dry-run");
  validateCases(benchmarkCases);
  printConfiguration();

  if (dryRun) {
    console.log("DRY RUN: validation passed; FASHN was not contacted.");
    return;
  }

  const apiKey = process.env.FASHN_API_KEY;
  if (!apiKey) {
    throw new Error("FASHN_API_KEY is required for a real benchmark. It was not logged.");
  }

  await mkdir(resolve(ROOT, "results"), { recursive: true });
  await writeFile(resultsPath, "", "utf8");

  for (const benchmarkCase of benchmarkCases) {
    for (const modelName of models) {
      const result = await runFashnCase(benchmarkCase, modelName, apiKey);
      await appendFile(resultsPath, `${JSON.stringify(result)}\n`, "utf8");
      console.log(`${benchmarkCase.id} ${modelName}: ${result.status}`);
    }
  }

  console.log(`Results written to ${resultsPath}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});