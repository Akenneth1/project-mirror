# G0 — Audit de cohérence documentaire V2

## But

Vérifier que la documentation de PROJECT MIRROR constitue un système cohérent avant la conception UX/UI et le développement.

## Chaînes obligatoires

- Produit : `vision → problem → users → validation-plan → MVP`
- Fonctionnalités : `feature-library → MVP → PRD → critères d'acceptation → architecture`
- Mesure : `validation-plan → metrics → decision-gates → roadmap`
- IA : `input-contract → ai-evaluation-protocol → ai-benchmark → architecture`
- Données : `PRD → data-map → privacy-operational → risk-register`
- Stratégie : `competitors → research → strategy-v2 → roadmap`

## Points déjà verrouillés

- MIRROR est une couche personnelle d'aide à la décision vestimentaire, pas seulement un générateur d'images.
- Le VTO est une capacité centrale du MVP, pas la totalité de la proposition de valeur.
- L'onboarding est progressif.
- Le résultat est une visualisation estimative et ne garantit ni taille ni coupe exactes.
- Le backend dépend d'une abstraction `TryOnProvider`, pas d'un fournisseur unique.
- Les données photo doivent être traitées selon une logique de minimisation et de suppression.

## Bloquants

Un point est `BLOCKED` si :

- une exigence MVP n'a pas de critère d'acceptation ;
- une donnée n'a pas de finalité, de règle de suppression ou de preuve prévue ;
- une image est envoyée à un prestataire avant que son flux privacy/data soit déterminé ;
- la licence du modèle retenu n'est pas compatible avec l'usage envisagé ;
- un KPI n'a pas de définition opérationnelle ;
- un gate n'a pas de seuil ou de décision associée ;
- une catégorie de vêtement non testée est présentée comme supportée.

## Décision G0

**ITERATE jusqu'à nouvel audit satisfaisant.**

Cette décision ne constitue pas un GO conditionnel. Un nouvel audit peut déclarer G0 `GO` seulement après vérification de la cohérence des documents, de la matrice d'acceptation, des métriques/gates et des préconditions privacy du pilote. La valeur utilisateur et la faisabilité IA restent à démontrer dans G1 et G2 avant tout développement figé.

## Limitation

La vérification finale de l'état exact du dépôt local doit être exécutée dans le dépôt avec `scripts/verify-g0-g3.sh`. Les fichiers protégés ne doivent pas être restaurés automatiquement.
