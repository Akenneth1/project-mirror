# Input Contract — V2

## Objectif

Séparer les erreurs d'entrée des limites du modèle IA et empêcher l'envoi inutile d'images au moteur IA.

## Catégories MVP canoniques

Les seules catégories MVP à benchmarker puis à supporter, après validation G2, sont :

- t-shirts ;
- chemises ;
- hauts simples.

Les **sweats simples** et les **vestes légères** ne sont pas supportés dans le MVP actuel. Ils peuvent être étudiés dans un benchmark exploratoire ultérieur, mais restent `UNSUPPORTED_CATEGORY` jusqu'à une décision documentée après benchmark.

Pantalons, chaussures, robes complexes, transparence, vêtements très amples, superpositions complexes, accessoires et cas exigeant une modélisation 3D précise sont hors périmètre initial.

## Photo utilisateur

Acceptée si : une personne, corps suffisamment visible pour le cas cible, résolution et luminosité suffisantes, pose compatible, obstruction limitée.

Refus/correction si : plusieurs personnes ambiguës, cadrage incompatible, résolution insuffisante, personne trop partiellement visible, obstruction majeure ou contenu interdit.

## Vêtement

Accepté si : catégorie MVP canonique, vêtement suffisamment visible, image exploitable, orientation compatible et résolution suffisante.

## États

`VALID`
`INVALID_PERSON_IMAGE`
`INVALID_GARMENT_IMAGE`
`UNSUPPORTED_CATEGORY`
`LOW_CONFIDENCE`
`CONTENT_RESTRICTED`

Une entrée invalide ou une catégorie non encore validée ne doit pas être envoyée inutilement au moteur IA.
