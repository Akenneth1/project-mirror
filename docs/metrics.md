# Metrics — V2 canonique

Ce document est la source canonique des définitions, formules, populations et fenêtres temporelles. Les autres documents doivent le référencer sans redéfinir une métrique.

| Métrique | Définition et formule | Population / fenêtre |
|---|---|---|
| Activation | sessions ayant obtenu un premier résultat affichable ÷ sessions commencées | sessions commencées ; premier parcours |
| Succès technique | générations terminées sans erreur bloquante et passant le contrôle qualité ÷ générations lancées | générations lancées ; période du test |
| Utilité | résultats notés 4/5 ou 5/5 à « ce résultat vous a-t-il aidé à décider ? » ÷ réponses valides | résultats affichables avec réponse ; session |
| Décision assistée | résultats pour lesquels l'utilisateur indique que la visualisation a influencé ou renforcé une décision d'achat, comparaison, recherche d'une autre taille/coupe ou abandon ÷ réponses valides | résultats affichables avec décision avant/après ; session |
| Intention de réutilisation | réponses positives à « réutiliseriez-vous MIRROR ? » ÷ réponses valides | après premier résultat affichable ; session |
| Réutilisation observée 14j | utilisateurs activés ayant effectué un second essai ÷ utilisateurs activés suivis pendant 14 jours complets | cohorte activée ; J0–J14 |
| Friction photo | sessions n'atteignant pas une photo `VALID` pour refus explicite, abandon à l'étape photo ou refus non corrigé ÷ sessions ayant atteint l'étape photo | sessions ayant atteint l'étape photo ; session |
| Compréhension des limites | réponses correctes indiquant que le résultat est une visualisation estimative, non une garantie de fit ÷ réponses valides | après résultat ou prototype ; session |
| Time-to-value | temps entre `session_started` et premier résultat affichable | sessions activées ; p50 et p95 |
| Coût par résultat utile | coût IA/infrastructure attribué aux générations ÷ résultats utiles | période G2/G4 ; résultats avec réponse utile |

## Événements minimaux

`session_started`
`input_photo_uploaded`
`photo_step_abandoned`
`garment_uploaded`
`input_validation_failed` avec motif
`garment_analysis_completed`
`tryon_started`
`tryon_completed`
`tryon_failed` avec motif
`tryon_regenerated`
`tryon_saved`
`tryon_feedback`
`decision_assistance_recorded`
`reuse_intent_recorded`
`data_deleted`

Les événements ne contiennent pas d'image personnelle. La mesure de décision enregistre la réponse avant/après ou l'absence de changement ; seule une influence ou un renforcement déclaré compte comme décision assistée.

## Règle

Chaque métrique doit avoir une définition, une population, une fenêtre temporelle, une source et une décision associée. Une donnée manquante rend la métrique indisponible, non favorable.
