import Fashn from "fashn";
import type { BenchmarkCase } from "../cases.js";
import { createResult, type BenchmarkResult } from "../scoring.js";

type ModelName = "tryon-v1.6" | "tryon-max";

const V1_CONFIGURATION = {
  mode: "balanced",
  num_samples: 1,
  seed: 42,
  return_base64: true,
  output_format: "png",
};

const MAX_CONFIGURATION = {
  resolution: "1k",
  generation_mode: "balanced",
  num_images: 1,
  seed: 42,
  return_base64: true,
  output_format: "png",
};

function categoryForV1(category: BenchmarkCase["category"]): "tops" {
  return "tops";
}

function configurationFor(modelName: ModelName, benchmarkCase: BenchmarkCase): Record<string, unknown> {
  if (modelName === "tryon-v1.6") {
    return { ...V1_CONFIGURATION, category: categoryForV1(benchmarkCase.category) };
  }
  return MAX_CONFIGURATION;
}

function errorDetails(error: unknown): {
  type: "API-level error" | "Runtime error";
  message: string;
} {
  if (error instanceof Fashn.APIError) {
    return { type: "API-level error", message: error.message };
  }
  return {
    type: "Runtime error",
    message: error instanceof Error ? error.message : String(error),
  };
}

export async function runFashnCase(
  benchmarkCase: BenchmarkCase,
  modelName: ModelName,
  apiKey: string,
): Promise<BenchmarkResult> {
  const startedAt = new Date();
  const startedMonotonic = performance.now();
  const configuration = configurationFor(modelName, benchmarkCase);
  const client = new Fashn({ apiKey });
  let requestId: string | null = null;

  try {
    const response =
      modelName === "tryon-v1.6"
        ? await client.predictions.subscribe({
            model_name: "tryon-v1.6",
            inputs: {
              model_image: benchmarkCase.personImage,
              garment_image: benchmarkCase.garmentImage,
              ...configuration,
            },
          })
        : await client.predictions.subscribe({
            model_name: "tryon-max",
            inputs: {
              product_image: benchmarkCase.garmentImage,
              model_image: benchmarkCase.personImage,
              ...configuration,
            },
          });
    requestId = response.id ?? null;
    const completedAt = new Date();
    const outputCount = Array.isArray(response.output) ? response.output.length : 0;
    const runtimeFailed = response.status !== "completed";

    return createResult({
      benchmark_case_id: benchmarkCase.id,
      model_name: modelName,
      model_version: modelName,
      category: benchmarkCase.category,
      request_id: requestId,
      status: response.status,
      started_at: startedAt.toISOString(),
      completed_at: completedAt.toISOString(),
      latency_ms: Math.round(performance.now() - startedMonotonic),
      estimated_cost_credits: modelName === "tryon-v1.6" ? 1 : 2,
      output_count: outputCount,
      error_type: runtimeFailed ? "Runtime error" : null,
      error_message: runtimeFailed ? response.error?.message ?? "Prediction did not complete." : null,
      configuration,
    });
  } catch (error) {
    const completedAt = new Date();
    const details = errorDetails(error);
    return createResult({
      benchmark_case_id: benchmarkCase.id,
      model_name: modelName,
      model_version: modelName,
      category: benchmarkCase.category,
      request_id: requestId,
      status: "failed",
      started_at: startedAt.toISOString(),
      completed_at: completedAt.toISOString(),
      latency_ms: Math.round(performance.now() - startedMonotonic),
      estimated_cost_credits: 0,
      output_count: 0,
      error_type: details.type,
      error_message: details.message,
      configuration,
    });
  }
}