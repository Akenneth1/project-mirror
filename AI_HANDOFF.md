# PROJECT MIRROR — AI HANDOFF

## Statut du projet

**Phase 1 — recherche produit.**

La recherche initiale est documentée. Le projet n’est pas encore en phase de développement complet : la prochaine étape est la validation des hypothèses auprès d’utilisateurs.

## Nom du projet

PROJECT MIRROR est un nom de travail.

## Vision

PROJECT MIRROR est une couche personnelle d’aide à la décision vestimentaire. Le produit vise à relier :

- ce que l’utilisateur trouve ;
- ce qu’il est et ce qu’il apprécie ;
- ce qu’il possède déjà ;
- ce qu’il souhaite porter.

L’ambition à long terme associe virtual try-on, garde-robe numérique, styling, découverte et aide au shopping. Le premier produit doit toutefois rester beaucoup plus étroit.

## Hypothèse produit actuelle

> Une personne trouve un vêtement en ligne, l’importe dans MIRROR, le visualise sur elle et obtient suffisamment d’informations pour décider de poursuivre, sauvegarder ou abandonner son intérêt.

Le virtual try-on est une capacité nécessaire, mais n’est pas à lui seul la différenciation. La valeur durable potentielle vient du contexte personnel et, plus tard, de la garde-robe.

## MVP à valider

Entrées :

- photo de référence de l’utilisateur ;
- image du vêtement.

Sorties et actions :

- visualisation estimative ;
- régénération ;
- sauvegarde ;
- essai d’une autre pièce ;
- feedback ;
- suppression des données.

Hors périmètre MVP : réseau social, marketplace, B2B, avatar 3D, vidéo, abonnement, extension navigateur, garde-robe complète et recommandations complexes.

Ne jamais présenter le résultat comme une promesse de taille ou de fit exact.

## Recherche effectuée

Les documents disponibles couvrent :

- vision, problème, utilisateurs et segmentation ;
- marché français ;
- concurrents : Doji, Google Shopping / Google Photos / Doppl, Whering et Style DNA ;
- VTO, modèles open source et contraintes de licence ;
- RGPD, privacy by design et AI Act ;
- modèle économique ;
- fonctionnalités, exigences produit, architecture, risques, décisions et roadmap.

Les sources et questions restantes sont centralisées dans `docs/research/source-register.md` et `docs/research/research-backlog.md`.

## Décisions déjà prises

1. La recherche précède le développement complet.
2. Le VTO seul n’est pas une proposition de valeur suffisante.
3. La cohérence de l’identité est une priorité qualité.
4. L’onboarding doit être progressif.
5. La confidentialité doit être conçue dès le départ.
6. L’architecture doit être indépendante du fournisseur ou modèle IA.
7. Les fonctions sociales ne font pas partie du MVP.
8. MIRROR ne promet pas un fit exact.

La source de vérité est `docs/decisions.md`.

## Contraintes techniques et données

- Les générations doivent être asynchrones et observables via des jobs.
- Le backend doit passer par une abstraction de fournisseur IA.
- Les images originales, résultats générés, métadonnées et logs doivent être séparés.
- Les images sont des données personnelles lorsqu’elles permettent d’identifier une personne.
- Les modèles étudiés peuvent présenter des limites de licence, notamment non commerciale ; aucun modèle ne doit être intégré sans audit adapté.
- Les données nécessaires doivent être minimisées, sécurisées et supprimables par l’utilisateur.

## Prochaine étape autorisée

Préparer et mener la validation utilisateur : guide d’entretien, questionnaire, prototype, test VTO et analyse. Les résultats doivent déterminer si le MVP mérite une implémentation complète.

## Règle de collaboration

Le fondateur prend les décisions finales. Les systèmes IA peuvent rechercher, analyser, critiquer, proposer et implémenter les décisions validées ; ils ne doivent pas modifier silencieusement les orientations majeures du produit.
