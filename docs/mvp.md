# MVP — V2 canonique

## Objectif

Permettre à une personne de visualiser un vêtement réel sur elle et de prendre une décision plus informée.

## Liste canonique

- **MVP-01** Session utilisateur.
- **MVP-02** Photo utilisateur.
- **MVP-03** Import vêtement.
- **MVP-04** Validation des entrées.
- **MVP-05** Analyse vêtement.
- **MVP-06** Try-on.
- **MVP-07** Contrôle qualité.
- **MVP-08** Résultat avec limites.
- **MVP-09** Régénération.
- **MVP-10** Sauvegarde.
- **MVP-11** Historique minimal.
- **MVP-12** Feedback et suppression.

### Exigence transverse — MVP-T-01

**Mesure et analytics minimisés.** Cette exigence transverse ne crée pas une fonctionnalité utilisateur supplémentaire ; elle rend le MVP mesurable et correspond à FR-12.

Elle inclut notamment `decision_assistance_recorded`, avec décision et confiance avant/après lorsque le contexte de validation le requiert. Les définitions canoniques sont dans `docs/metrics.md`.

## Mapping MVP → PRD

| MVP | Exigence PRD associée |
|---|---|
| MVP-01 | FR-01 |
| MVP-02 | FR-02 |
| MVP-03 | FR-03 |
| MVP-04 | FR-04 |
| MVP-05 | FR-03 |
| MVP-06 | FR-05 |
| MVP-07 | FR-07 |
| MVP-08 | FR-06 |
| MVP-09 | FR-06 |
| MVP-10 | FR-08 |
| MVP-11 | FR-09 |
| MVP-12 | FR-10 et FR-11 |
| MVP-T-01 | FR-12 |

## Hors MVP

Social, marketplace, abonnement complexe, extension navigateur, API publique, B2B, vidéo, avatar 3D, wardrobe complet, recommandations avancées, intégrations multi-retailers.

## Ordre canonique

Entrée → validation → IA → contrôle qualité → résultat → feedback → sauvegarde/historique → suppression → analytics.

Un résultat en échec qualité ne doit pas être présenté comme un résultat utilisable.

La V0 de validation peut fonctionner sans compte, sauvegarde ou automatisation complète. La mesure de décision et de confiance peut alors être recueillie dans le protocole G1, sans modifier le périmètre fonctionnel du MVP.
