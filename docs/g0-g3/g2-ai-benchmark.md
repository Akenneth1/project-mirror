# G2 — Benchmark IA / fournisseur VTO

## Objectif

Comparer des solutions VTO sur la qualité réelle, le coût, la fiabilité, la licence et les contraintes de données — pas sur une démo isolée. Le benchmark ne désigne aucun fournisseur gagnant avant ses résultats.

## Catégories MVP canoniques

Tester d'abord uniquement :

- t-shirts ;
- chemises ;
- hauts simples.

Ces catégories ne deviennent supportées dans le produit qu'après un résultat G2 compatible avec `docs/decision-gates.md`.

Les sweats simples et les vestes légères peuvent être inclus dans une section exploratoire séparée du benchmark, sans effet sur le périmètre MVP et sans être présentés comme supportés. Robes complexes, transparence, superpositions complexes, accessoires, chaussures, poses extrêmes et photos fortement occluses sont exclus du benchmark MVP.

## Jeu de test

Jeu consenti et documenté :

- ≥30 personnes ;
- diversité de morphologies, teints et âges adultes ;
- poses et luminosités variées ;
- ≥40 vêtements ;
- plusieurs niveaux de difficulté.

Chaque cas reçoit un identifiant anonyme.

## Qualité 1–5

1. identité ;
2. silhouette ;
3. forme du vêtement ;
4. couleur ;
5. motifs ;
6. texture/matière visible ;
7. occlusions ;
8. bras/mains ;
9. cohérence du visage ;
10. réalisme global.

Ajouter : résultat exploitable oui/non, artefact critique oui/non, vêtement mal interprété oui/non.

Les seuils de sélection sont définis dans `docs/decision-gates.md` ; les définitions de mesure dans `docs/metrics.md`.

## Mesures système

- taux de succès/échec ;
- p50 et p95 de latence ;
- coût/génération ;
- coût/résultat utile ;
- tailles/formats ;
- catégories ;
- limites ;
- conservation ;
- entraînement sur données client ;
- région de traitement ;
- suppression ;
- DPA/sous-traitants ;
- licence ;
- SLA si disponible.

## Blocages

Écarter provisoirement une solution si :

- licence incompatible ;
- politique de données incompatible ;
- suppression insuffisante ;
- sécurité insuffisante ;
- catégorie MVP non supportée.

## Diversité

Rapporter les résultats par sous-groupes. Une moyenne globale peut masquer une dégradation sur certains cas.

## Architecture

Le produit dépend de :

`TryOnProvider.generate(person, garment, options)`

Implémentations possibles :

- `CommercialProvider` ;
- `SelfHostedProvider` ;
- `MockProvider`.

Le frontend ne connaît jamais le fournisseur. Chaque résultat G2 doit pouvoir être relié à la version du modèle, aux paramètres comparables et aux métadonnées de traçabilité définies dans `docs/architecture.md`.

## Fournisseurs et concurrence de référence

Perfect Corp expose des Fashion APIs documentées ; cette information motive une évaluation éventuelle, elle ne constitue pas une sélection. [SRC-G0G3-PERFECT-FASHION] [SRC-G0G3-PERFECT-OUTER]

Les solutions généralistes image/multimodales ne peuvent être testées qu'après vérification de leurs conditions commerciales et de traitement des données. Les modèles open source déjà étudiés restent des candidats de recherche/self-hosting ; leur licence doit être vérifiée pour le cas commercial exact.

Google, Doji et DREZI servent de références de marché, non de preuves qu'une fonction doit être construite. [SRC-G0G3-GOOGLE-VTO] [SRC-G0G3-DOJI-APP] [SRC-G0G3-DREZI-APP]

## Décision G2

Aucun fournisseur ne doit être déclaré « gagnant » avant le benchmark réel. Les sorties autorisées sont `candidate`, `fallback` ou `rejected` selon les critères G2.

## Livrable

`docs/g0-g3/g2-results.md` : dataset, versions, configuration, résultats bruts, scores, coûts, latences, erreurs, licences, données et décision.
