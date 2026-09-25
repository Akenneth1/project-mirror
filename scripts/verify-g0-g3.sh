#!/bin/zsh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

required=(
"README.md" "AI_HANDOFF.md" "docs/vision.md" "docs/problem.md"
"docs/users.md" "docs/mvp.md" "docs/product-requirements.md"
"docs/feature-library.md" "docs/architecture.md" "docs/metrics.md"
"docs/decision-gates.md" "docs/privacy-operational.md" "docs/data-map.md"
"docs/input-contract.md" "docs/ai-evaluation-protocol.md" "docs/ai-benchmark.md"
"docs/g0-g3/g0-audit.md" "docs/g0-g3/g1-validation-experiment.md"
"docs/g0-g3/g2-ai-benchmark.md" "docs/g0-g3/g3-product-blueprint.md"
"docs/g0-g3/g3-ux-flow.md" "docs/g0-g3/g3-acceptance-matrix.md"
"docs/g0-g3/codex-handoff.md"
)

fail=0
for f in "${required[@]}"; do
  if [[ -f "$f" ]]; then echo "PASS  $f"; else echo "FAIL  $f"; fail=1; fi
done

echo
find docs -type f -name "*.md" | sort

if [[ "$fail" -eq 0 ]]; then
  echo
  echo "G0-G3 FILE CHECK: PASS"
else
  echo
  echo "G0-G3 FILE CHECK: FAIL"
  exit 1
fi
