# Validation Plan — V2

## Objectif
Valider avant un développement lourd que MIRROR apporte une valeur réelle à des personnes qui envisagent effectivement l'achat d'un vêtement en ligne.

Le test doit porter sur un vêtement réel et une décision réelle, pas seulement sur l'opinion « l'idée est intéressante ».

## Hypothèses
### H1 — Valeur
Lorsqu'un utilisateur hésite devant un vêtement en ligne, une visualisation personnalisée peut réduire son incertitude sur son apparence avec ce vêtement.

### H2 — Utilité
Cette réduction d'incertitude est suffisamment utile pour que l'utilisateur souhaite réutiliser MIRROR.

### H3 — Confiance
L'utilisateur comprend que le résultat est une visualisation estimative et non une garantie de taille, coupe ou tombé réel.

### H4 — Économie
Le coût et le délai de production d'un résultat utile sont compatibles avec un produit viable.

### H5 — Friction
La demande d'une photo personnelle n'entraîne pas un abandon incompatible avec l'expérience.

## Population
Population principale : acheteurs de mode en ligne ayant acheté récemment et/ou envisageant actuellement un achat.

Sous-groupes :
- A : achat récent ;
- B : achat actuellement envisagé ;
- C : utilisateur peu intéressé, utilisé comme contrôle qualitatif.

Le groupe B est prioritaire pour les tests de décision.

## Trois niveaux
### V0 — Concierge
Photo + vêtement réel + traitement assisté. Objectif : valeur utilisateur.

### V1 — Prototype
Flux automatisé minimal. Objectif : friction et faisabilité.

### V2 — MVP
Compte, historique minimal, sauvegarde, feedback, suppression et analytics. Objectif : répétition.

## Protocole
1. Demander un vêtement réellement envisagé.
2. Capturer l'intention avant MIRROR.
3. Fournir les entrées.
4. Produire le try-on.
5. Mesurer utilité, confiance et changement de décision.
6. Mesurer l'intention de réutilisation et, lorsqu'un suivi est possible, la réutilisation observée à 14 jours.
7. Documenter les abandons et leurs causes.

## Questions
- Résultat utile ? 1–5.
- Aide à la décision ? Oui/Non.
- Plus sûr de la décision ? 1–5.
- Fidélité perçue ? 1–5.
- Compréhension du caractère estimatif ? Oui/Non.
- Réutiliseriez-vous MIRROR ? Oui/Non.
- Demande de photo gênante ? 1–5.

## Métriques et seuils canoniques

Les définitions, formules, populations et fenêtres temporelles sont définies exclusivement dans `metrics.md`. Les seuils G1 sont définis exclusivement dans `decision-gates.md` et repris dans `g0-g3/g1-validation-experiment.md` pour l'exécution du test.

Ce plan ne redéfinit donc pas l'activation, l'utilité, la décision assistée, la friction photo, l'intention de réutilisation ou la réutilisation observée. Les seuils sont internes de pilotage, non des benchmarks scientifiques universels.
