# Decision Gates — V2

`docs/metrics.md` est la source canonique des métriques. Les seuils ci-dessous sont internes et provisoires ; ils ne choisissent ni fournisseur ni technologie.

## Décisions

- **GO** : poursuivre vers le gate suivant.
- **ITERATE** : corriger l'hypothèse ou le document puis retester.
- **STOP/PIVOT** : abandonner l'hypothèse ou changer de direction.

Un gate ne peut être déclaré GO si une métrique, une preuve, une décision ou un prérequis privacy critique manque.

## G0 — Cohérence documentaire

GO si toutes les chaînes documentaires sont cohérentes, chaque exigence MVP a un critère d'acceptation, chaque donnée a une finalité et un chemin de suppression, et chaque gate a un seuil ou une décision explicite.

Sinon : ITERATE.

## G1 — Problème et valeur

GO si, selon les définitions de `metrics.md` :

- activation ≥70 % ;
- succès technique ≥70 % ;
- utilité ≥60 % ;
- décision assistée ≥50 % ;
- intention de réutilisation ≥40 % ;
- friction photo ≤25 % ;
- compréhension des limites ≥80 %.

STOP/PIVOT si le problème réel n'est pas observé chez ≥60 % des participants éligibles ou si utilité et décision assistée restent sous les seuils après une itération documentée.

## G2 — IA / fournisseur

Un candidat peut être déclaré `candidate` seulement si, sur le jeu de test G2 :

- aucune incompatibilité de licence, sécurité, politique de données ou suppression ;
- les catégories MVP canoniques sont supportées dans le benchmark ;
- succès technique ≥80 % ;
- score moyen identité ≥3,5/5 et fidélité vêtement ≥3,5/5 ;
- aucun sous-groupe documenté n'a un score moyen identité ou fidélité vêtement <3/5 ;
- artefact critique <10 % des générations ;
- p95 de latence ≤90 secondes ;
- coût/génération et coût/résultat utile sont mesurés pour 100 % des générations facturables.

Sinon : ITERATE ou `rejected` selon le motif bloquant.

## G3 — Produit reproductible

GO si, sur au moins 10 parcours éligibles consécutifs avec le candidat G2 :

- 100 % sont exécutés sans intervention humaine manuelle ;
- ≥90 % atteignent un résultat affichable ;
- tous les critères applicables de la matrice G3 sont vérifiés ;
- aucune image personnelle ne se trouve dans les logs ;
- aucun accès inter-utilisateur n'est observé.

Sinon : ITERATE.

## G4 — Économie

GO si le coût par résultat utile est ≤30 % du revenu brut attribuable à une utilisation validée dans l'hypothèse économique documentée, et si le calcul repose sur les coûts mesurés G2/G3, sans subvention non documentée.

Sinon : ITERATE sur coût, pricing ou périmètre ; STOP/PIVOT si aucun scénario documenté ne respecte ce ratio.

## G5 — Rétention

GO si la réutilisation observée à 14 jours est ≥25 % parmi les utilisateurs activés suivis sur 14 jours complets, et si aucune cohorte critique ne se dégrade sans explication documentée.

Sinon : ITERATE ; STOP/PIVOT après deux itérations documentées sans signal de réutilisation.
