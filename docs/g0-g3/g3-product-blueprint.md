# G3 — Product Blueprint MIRROR

## Proposition

MIRROR aide une personne à prendre une décision vestimentaire en transformant une pièce trouvée en ligne en visualisation personnelle exploitable.

**Trouver → Voir sur soi → Comprendre → Décider.**

Le MVP ne promet ni taille exacte, ni tombé physique exact, ni matière parfaitement simulée, ni garantie d'achat.

## Job-to-be-done

> Quand j'hésite devant un vêtement en ligne, je veux voir une représentation crédible de cette pièce sur moi afin de réduire mon incertitude avant de décider.

## MVP

### Entrées

- photo personnelle ;
- image du vêtement.

### Traitement

1. validation photo ;
2. validation vêtement ;
3. classification ;
4. préparation ;
5. génération ;
6. contrôle qualité ;
7. présentation d'un résultat utilisable uniquement.

### Sortie

- visualisation ;
- statut qualité ;
- régénération ;
- sauvegarde ;
- essayer une autre pièce ;
- feedback et signalement ;
- suppression.

## Catégories MVP canoniques

Les seules catégories MVP sont les t-shirts, chemises et hauts simples, après validation G2. Les sweats simples et vestes légères ne sont pas supportés dans ce MVP ; ils ne peuvent être étudiés qu'en exploratoire, après une décision documentée. Les autres catégories restent hors périmètre.

## Contrat d'entrée

### Photo acceptée

- personne adulte ;
- une personne principalement visible ;
- corps suffisamment visible ;
- lumière suffisante ;
- résolution suffisante ;
- pose compatible.

### Refus

- plusieurs personnes ;
- sujet trop petit ;
- occlusion forte ;
- corps coupé ;
- flou important ;
- catégorie incompatible ;
- contenu interdit/abusif.

Le message ne doit jamais culpabiliser l'utilisateur ni son corps.

### Vêtement accepté

- image nette ;
- vêtement identifiable ;
- catégorie MVP canonique validée ;
- partie principale visible.

## Parcours

`Accueil → Photo → Vêtement → Validation → Génération → Contrôle qualité → Résultat`

## Résultat

Obligatoire :

- image ;
- mention « visualisation estimative » ;
- régénérer ;
- sauvegarder ;
- essayer une autre pièce ;
- feedback ;
- signalement.

## États

Chaque étape : `idle`, `uploading`, `validating`, `processing`, `success`, `recoverable error`, `fatal error`, `retry`.

## Transparence

Présenter explicitement la génération IA. Préférer « aperçu », « visualisation », « estimation visuelle ». Ne jamais promettre « vous aurez exactement cette coupe » ou « cette taille sera parfaite ».

## Hors MVP

- réseau social ;
- marketplace ;
- extension navigateur ;
- API publique ;
- B2B ;
- vidéo ;
- avatar 3D ;
- recommandations complexes ;
- toutes catégories vestimentaires ;
- agent shopping autonome.

## Critère produit principal

> MIRROR aide-t-il suffisamment une personne à décider pour qu'elle souhaite le réutiliser ?

La qualité visuelle est nécessaire mais insuffisante.

## Marché

La FEVAD rapporte une progression de 2,6 % des ventes d'habillement/textile en ligne sur les sept premiers mois de 2026 et 27,5 % des achats d'habillement en volume réalisés en ligne sur cette période. [SRC-G0G3-FEVAD-2026-MARKET]

La FEVAD indique aussi que 59,5 % des cyberacheteurs avaient acheté au moins un produit de mode en ligne sur les douze mois précédant son étude 2025. [SRC-G0G3-FEVAD-2025-RANKING]

Ces chiffres établissent le contexte de marché, pas la demande spécifique pour MIRROR : celle-ci reste l'objet de G1.
