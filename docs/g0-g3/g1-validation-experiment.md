# G1 — Validation du problème et de la valeur

## Hypothèse centrale

> Lorsqu'une personne envisage réellement un vêtement en ligne et hésite sur ce qu'il donnera sur elle, une visualisation personnalisée peut réduire suffisamment son incertitude pour influencer ou renforcer sa décision.

Le test porte sur la **valeur décisionnelle**, pas sur l'appréciation esthétique du VTO.

## Population

Adultes ayant acheté de la mode en ligne récemment ou ayant actuellement une pièce qu'ils envisagent réellement d'acheter. Les 18–34 ans peuvent être sur-échantillonnés pour l'acquisition initiale, mais ne définissent pas le marché.

Exclure du premier pilote : mineurs et participants sans décision vestimentaire réelle.

## Trois niveaux

### A — Entretiens

Questions : dernier vêtement envisagé, source d'hésitation, stratégie actuelle, expérience VTO, confiance, gêne liée à la photo, tolérance à un résultat imparfait.

Ne pas vendre MIRROR pendant l'entretien.

### B — Prototype cliquable

Mesurer compréhension, friction photo, friction vêtement, compréhension du résultat et confiance.

### C — Concierge VTO

Le résultat peut être produit manuellement ou avec un fournisseur temporaire documenté. L'objectif est de valider la valeur avant l'automatisation, sans déclarer ce fournisseur retenu.

## Cas réel

Chaque participant choisit une pièce qu'il envisage réellement. Capturer : catégorie, prix approximatif, raison de l'hésitation, décision avant, décision après, confiance avant/après, utilité, intention de réutilisation et, si le suivi est possible, réutilisation observée à 14 jours.

## Métriques canoniques

Les définitions, formules, populations et fenêtres temporelles sont celles de `docs/metrics.md`. G1 ne les redéfinit pas.

### Friction photo

La friction photo est le pourcentage de sessions ayant atteint l'étape photo qui n'atteignent pas une photo `VALID` pour l'une des raisons suivantes : refus explicite de fournir une photo, abandon à l'étape photo, ou refus de la photo sans correction aboutie. Les causes doivent être distinguées dans les résultats ; un refus d'entrée ne doit pas être assimilé à un abandon volontaire.

## Traçabilité des hypothèses utilisateurs

| Hypothèse | Méthode | KPI canonique | Seuil de décision | Décision |
|---|---|---|---|---|
| U-H01 — l'hésitation existe | entretiens A + cas réel C | problème observé | ≥60 % des participants éligibles décrivent spontanément une hésitation liée à un achat réel | GO ; sinon ITERATE/STOP |
| U-H02 — le VTO réduit l'incertitude | concierge C, décision/confiance avant-après | utilité, décision assistée, variation de confiance | utilité ≥60 % et décision assistée ≥50 % | GO ; sinon ITERATE |
| U-H03 — la photo crée une friction mesurable | prototype B + funnel C | friction photo | ≤25 % des sessions ayant atteint l'étape photo | GO ; sinon ITERATE |
| U-H04 — utilité sans promesse de fit | prototype B + concierge C | compréhension des limites, utilité | ≥80 % comprennent le caractère estimatif et utilité ≥60 % | GO ; sinon ITERATE |
| U-H05 — intention puis réutilisation | question post-résultat + suivi | intention_de_reutilisation, reutilisation_observee_14j | intention ≥40 % en G1 ; la réutilisation observée est évaluée en G5 | GO G1 si intention atteinte ; sinon ITERATE |
| U-H06 — onboarding progressif préférable | prototype B, comparaison photo/vêtement seuls vs informations additionnelles | complétion de l'étape, friction photo/vêtement, feedback qualitatif | aucune information additionnelle ne doit réduire la complétion ; si elle la réduit, rester au niveau photo + vêtement | GO/ITERATE selon résultat |

Les seuils sont internes et provisoires. Un STOP/PIVOT est requis si U-H01 n'est pas observée ou si U-H02 reste sous les seuils après une itération documentée.

## Seuils de décision G1

- activation ≥70 % ;
- succès technique ≥70 % ;
- utilité ≥60 % ;
- décision assistée ≥50 % ;
- intention_de_reutilisation ≥40 % ;
- friction photo ≤25 % ;
- compréhension du caractère estimatif ≥80 %.

Les résultats qualitatifs complètent ces seuils, mais ne remplacent pas les métriques disponibles.

## Biais à éviter

Ne pas recruter uniquement des proches, ne pas montrer seulement les bons résultats, ne pas confondre intention et comportement, ne pas tester uniquement des vêtements faciles, et ne pas utiliser la qualité d'image comme unique preuve de valeur.

## Livrable

`docs/g0-g3/g1-results.md` : participants, cas, résultats, erreurs, métriques, citations anonymisées, décisions et changements demandés.

## Sources de cadrage

La revue systématique de 69 travaux sur le VTO identifie notamment utilité, valeur émotionnelle/utilitaire, attributs utilisateurs et préoccupations de confidentialité comme facteurs importants. [SRC-G0G3-MDPI-VTO-REVIEW]

Les études empiriques retenues relient utilité, facilité d'utilisation, risque de confidentialité, confiance et intentions associées au VTO ; leurs contextes nationaux ne doivent pas être généralisés directement à la France. [SRC-G0G3-SCI-ATTITUDES] [SRC-G0G3-SCI-PRIVACY-RETURNS]
