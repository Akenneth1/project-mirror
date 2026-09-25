export interface BenchmarkResult {
  benchmark_case_id: string;
  provider: "fashn";
  model_name: "tryon-v1.6" | "tryon-max";
  model_version: string;
  category: string;
  request_id: string | null;
  status: string;
  started_at: string;
  completed_at: string;
  latency_ms: number;
  estimated_cost_credits: number;
  output_count: number;
  error_type: "API-level error" | "Runtime error" | null;
  error_message: string | null;
  configuration: Record<string, unknown>;
}

export function createResult(
  partial: Omit<BenchmarkResult, "provider">,
): BenchmarkResult {
  return { provider: "fashn", ...partial };
}