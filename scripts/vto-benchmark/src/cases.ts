export type BenchmarkCategory = "tops" | "shirt" | "simple-top";

export interface BenchmarkCase {
  id: string;
  personImage: string;
  garmentImage: string;
  category: BenchmarkCategory;
}

// Public documentation examples only. Replace these with consented benchmark inputs before a real run.
export const benchmarkCases: BenchmarkCase[] = [
  {
    id: "public-example-top-001",
    personImage:
      "https://cm7xvlqw96.ufs.sh/f/wXFHUNfTHmLj9QTMwFWT5IXsA4Lhru0e7dJiKFwpQ6Glm28S",
    garmentImage:
      "https://utfs.io/f/wXFHUNfTHmLjtkhepmqOUnkr8XxZbNIFmRWldShDLu320TeC",
    category: "simple-top",
  },
];

export function validateCases(cases: BenchmarkCase[]): void {
  const ids = new Set<string>();

  if (cases.length === 0) {
    throw new Error("At least one benchmark case is required.");
  }

  for (const benchmarkCase of cases) {
    if (!benchmarkCase.id.trim() || ids.has(benchmarkCase.id)) {
      throw new Error(`Case IDs must be non-empty and unique: ${benchmarkCase.id}`);
    }
    ids.add(benchmarkCase.id);

    for (const [field, value] of Object.entries({
      personImage: benchmarkCase.personImage,
      garmentImage: benchmarkCase.garmentImage,
    })) {
      if (!value.trim() || (!value.startsWith("http://") && !value.startsWith("https://") && !value.startsWith("data:image/"))) {
        throw new Error(`${benchmarkCase.id}.${field} must be an HTTP(S) URL or image data URI.`);
      }
    }

    if (!["tops", "shirt", "simple-top"].includes(benchmarkCase.category)) {
      throw new Error(`${benchmarkCase.id}.category is not an MVP category.`);
    }
  }
}