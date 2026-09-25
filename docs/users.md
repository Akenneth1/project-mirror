# Users — V2

## Objectif

Définir les utilisateurs prioritaires de MIRROR à partir de comportements et de situations d'usage observables, sans enfermer le produit dans une simple tranche d'âge.

## 1. Utilisateur prioritaire

### Acheteur de mode en ligne en situation d'hésitation

Personne qui :
- consulte un vêtement en ligne ;
- envisage réellement son achat ;
- hésite sur son apparence sur elle ;
- dispose d'une photo personnelle exploitable ;
- peut fournir une image du vêtement.

### Problème principal

> « Je vois le vêtement sur le site, mais je ne sais pas suffisamment bien ce qu'il donnera sur moi pour décider. »

## 2. Segments de travail

### U1 — Acheteur hésitant
Priorité maximale pour la validation.

Besoin : réduire l'incertitude avant l'achat.

### U2 — Acheteur fréquent de mode en ligne
Besoin : accélérer et sécuriser les décisions répétées.

### U3 — Utilisateur cherchant son style
Besoin : comprendre si une pièce correspond à son apparence et à ses préférences.

### U4 — Propriétaire d'une garde-robe importante
Besoin futur : relier une nouvelle pièce à ce qu'il possède déjà.

### U5 — Acheteur seconde main
Besoin futur : visualiser une pièce dont les photos catalogue sont parfois limitées.

### U6 — Marchand / e-commerce
Utilisateur B2B futur.

Besoin : permettre au client de visualiser un produit et potentiellement réduire l'incertitude d'achat.

## 3. Persona comportemental principal

### « Je veux savoir avant d'acheter »

Situation :
1. L'utilisateur découvre une pièce.
2. Il apprécie le produit.
3. Il hésite.
4. Il cherche une représentation plus personnelle.
5. MIRROR produit une visualisation.
6. L'utilisateur compare sa perception avant/après.
7. Il décide de poursuivre, comparer, sauvegarder ou abandonner.

## 4. Ce que nous ne supposons pas

Nous ne supposons pas que :
- tous les jeunes utilisateurs veulent un avatar ;
- une belle image entraîne automatiquement un achat ;
- l'utilisateur accepte de fournir une photo ;
- le try-on garantit la taille ou la coupe ;
- une personne qui dit aimer l'idée utilisera réellement le produit.

Ces points doivent être testés.

## 5. Onboarding progressif

### Premier niveau
Demander uniquement :
- photo ;
- vêtement.

### Deuxième niveau
Ajouter si nécessaire :
- préférences ;
- informations utiles au contexte.

### Troisième niveau
Ajouter :
- wardrobe ;
- historique ;
- personnalisation avancée.

Principe : ne jamais demander une donnée uniquement parce qu'elle pourrait être utile un jour.

## 6. Recrutement de validation

Priorité :
- personnes ayant un vêtement réellement envisagé ;
- acheteurs de mode en ligne ;
- diversité de morphologies, teints, âges adultes et styles.

Le recrutement ne doit pas chercher à représenter statistiquement toute la population lors du premier pilote. Il doit surtout permettre de détecter les problèmes de valeur, de friction, de confiance et de qualité.

## 7. Questions de validation

Pour chaque participant :
- Que regardez-vous actuellement ?
- Qu'est-ce qui vous fait hésiter ?
- Qu'essayez-vous de savoir avant d'acheter ?
- Utilisez-vous déjà une méthode pour réduire cette incertitude ?
- Que pensez-vous du résultat MIRROR ?
- Est-ce que le résultat change votre décision ?
- Qu'est-ce qui vous ferait recommencer ?
- Qu'est-ce qui vous ferait abandonner ?
- La demande de photo vous pose-t-elle problème ?

## 8. Hypothèses utilisateurs

| ID | Hypothèse | Méthode |
|---|---|---|
| U-H01 | L'hésitation sur l'apparence personnelle existe réellement avant certains achats | entretiens + observation |
| U-H02 | Le try-on réduit une partie de cette incertitude | test réel |
| U-H03 | La demande de photo crée une friction mesurable | funnel |
| U-H04 | Le résultat peut être jugé suffisamment utile sans promettre un fit exact | test utilisateur |
| U-H05 | Une partie des utilisateurs veut réutiliser le service | test de réutilisation |
| U-H06 | Les utilisateurs préfèrent une expérience progressive à un profil long à remplir | test UX |

## 9. Critère de validation

La cible initiale n'est pas « tout le marché de la mode ».

Le premier objectif est de démontrer :

> **qu'une personne ayant une décision vestimentaire réelle peut utiliser MIRROR pour réduire une incertitude suffisamment importante pour modifier ou renforcer sa décision.**

Les résultats sont ensuite comparés aux métriques définies dans `metrics.md` et aux gates de `decision-gates.md`.
