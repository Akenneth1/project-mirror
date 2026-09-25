# G0.5-B — VTO Benchmark Harness

Harness serveur TypeScript isolé pour comparer `tryon-v1.6` et `tryon-max` sur exactement les mêmes cas.

## Installation

```bash
npm install
```

Copier `.env.example` vers `.env` et renseigner `FASHN_API_KEY` uniquement côté serveur. Ne jamais utiliser `NEXT_PUBLIC_` ni afficher cette valeur dans les logs.

## Commandes

```bash
npm run typecheck
npm run benchmark:dry
npm run benchmark
```

`benchmark:dry` charge et valide les cas ainsi que la configuration sans contacter FASHN et sans exiger de clé. `benchmark` exige explicitement `FASHN_API_KEY`, exécute chaque cas contre les deux modèles et continue après un échec individuel.

## Cas et configuration

Les cas sont définis dans `src/cases.ts` sous la forme `id`, `personImage`, `garmentImage`, `category`. Les catégories MVP acceptées sont `tops`, `shirt` et `simple-top`; v1.6 les adapte toutes vers la catégorie API `tops`. Try-On Max reçoit `product_image` et `model_image`.

Configuration initiale : v1.6 utilise `num_samples=1` et `mode=balanced`; Max utilise `num_images=1`, `resolution=1k` et `generation_mode=balanced`. Le `seed=42` est fixé car il est documenté par FASHN. Les deux requêtes utilisent les mêmes images et `return_base64=true`.

Le coût enregistré est un nombre de crédits théorique issu de la configuration FASHN, sans conversion monétaire : 1 crédit par sortie pour v1.6 et 2 crédits pour Max en `balanced`/`1k`.

## Résultats et confidentialité

Les résultats JSONL sont écrits dans `results/benchmark-results.jsonl`. Ce répertoire est ignoré par git, y compris les images et données sensibles. Les logs ne contiennent ni clé API, ni données personnelles, ni contenu base64.

Chaque ligne conserve les identifiants, modèle, catégorie, statut, timestamps, latence monotone, coût théorique, nombre de sorties, configuration exacte et erreur éventuelle. Les erreurs API-level et runtime sont distinguées; un échec d’un modèle ne bloque pas les autres cas.

Cette phase ne calcule aucun score qualité et ne définit aucun seuil. Le score humain 1–5 sera défini ultérieurement.

**Avertissement : n’utilisez jamais de vraie photo personnelle dans cette phase.** Remplacez les exemples publics par un jeu consenti et anonymisé avant tout benchmark réel.