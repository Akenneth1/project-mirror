# Product Requirements Document — V2

## Exigences fonctionnelles

- **FR-01** Session identifiable minimale.
- **FR-02** Import et validation d'une photo compatible.
- **FR-03** Import et catégorisation d'un vêtement compatible.
- **FR-04** Validation avant appel IA.
- **FR-05** Try-on sous forme de job asynchrone.
- **FR-06** Résultat avec statut, régénération et avertissement sur les limites.
- **FR-07** Contrôle qualité du résultat avant sa présentation comme utilisable.
- **FR-08** Sauvegarde d'un résultat.
- **FR-09** Historique des derniers essais.
- **FR-10** Feedback utilisateur et signalement d'un problème.
- **FR-11** Suppression des données concernées.
- **FR-12** Analytics minimisés, incluant `decision_assistance_recorded`.

## Mapping PRD → MVP

| Exigence | MVP associé |
|---|---|
| FR-01 | MVP-01 |
| FR-02 | MVP-02 |
| FR-03 | MVP-03 et MVP-05 |
| FR-04 | MVP-04 |
| FR-05 | MVP-06 |
| FR-06 | MVP-08 et MVP-09 |
| FR-07 | MVP-07 |
| FR-08 | MVP-10 |
| FR-09 | MVP-11 |
| FR-10 | MVP-12 |
| FR-11 | MVP-12 |
| FR-12 | MVP-T-01 |

`docs/mvp.md` et ce tableau forment le mapping canonique. MVP-T-01 est une exigence transverse et ne modifie pas la liste fonctionnelle MVP-01 à MVP-12.

## États de job

`queued → processing → completed`
ou `queued → processing → failed`.

Un job `completed` avec résultat critique au contrôle qualité doit être traité comme non utilisable dans le parcours et marqué comme échec qualité dans les métriques.

## Exigences non fonctionnelles

- confidentialité et minimisation ;
- accès contrôlé ;
- URLs signées ;
- secrets hors code ;
- gestion des erreurs ;
- mesure p50/p95 ;
- abstraction `TryOnProvider` ;
- traçabilité du provider/modèle ;
- absence d'images personnelles dans les logs.

Une fonctionnalité n'est complète que si comportement, erreurs, données et mesures pertinentes sont définis.
