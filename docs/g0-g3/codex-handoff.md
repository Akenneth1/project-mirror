# Codex Handoff — G0 → G3

## Lecture obligatoire
1. `README.md`
2. `AI_HANDOFF.md`
3. `docs/vision.md`
4. `docs/problem.md`
5. `docs/users.md`
6. `docs/mvp.md`
7. `docs/product-requirements.md`
8. `docs/feature-library.md`
9. `docs/architecture.md`
10. `docs/metrics.md`
11. `docs/decision-gates.md`
12. `docs/privacy-operational.md`
13. `docs/data-map.md`
14. `docs/input-contract.md`
15. `docs/ai-evaluation-protocol.md`
16. `docs/ai-benchmark.md`
17. tous les fichiers de `docs/g0-g3/`

## Règles
- Ne pas coder une fonctionnalité absente du MVP sans décision.
- Ne pas modifier silencieusement une décision produit.
- Ne pas choisir un fournisseur IA sans benchmark.
- Aucun secret dans le frontend.
- Aucune image envoyée à un fournisseur sans flux prévu dans privacy/data.
- Aucune promesse de taille/fit exact.
- Toute nouvelle donnée a une finalité.
- Toute nouvelle fonctionnalité a un critère d'acceptation.
- Toute architecture nouvelle est documentée avant d'être considérée comme définitive.
- Favoriser les changements réversibles.

## Statut de décision
Tant que `g1-results.md` et `g2-results.md` ne sont pas marqués `GO`, ne pas figer définitivement le fournisseur VTO, les coûts de production ou les catégories supportées au-delà du benchmark.
