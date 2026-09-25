# PROJECT MIRROR

> Plateforme personnelle d’aide à la décision vestimentaire, propulsée par l’IA.

## Vue d’ensemble

PROJECT MIRROR explore comment réduire l’incertitude liée à l’achat de vêtements en ligne et à l’utilisation de sa garde-robe.

La vision à long terme combine :

- visualisation personnalisée de vêtements ;
- virtual try-on ;
- garde-robe numérique ;
- styling et recommandations ;
- découverte et aide au shopping.

Le produit ne cherche pas à concurrencer les grands catalogues ou moteurs de recherche. Son ambition est d’offrir une couche personnelle et neutre entre les marchands : une personne trouve une pièce, MIRROR l’aide à la visualiser, la contextualiser et décider quoi en faire.

> **See it on you. Understand it. Style it. Decide.**

## Problème étudié

L’achat de vêtements en ligne laisse plusieurs questions sans réponse :

- À quoi cette pièce pourrait-elle ressembler sur moi ?
- Puis-je me projeter dans sa coupe, sa couleur et son style ?
- Comment l’associer avec ce que je possède déjà ?
- Cet achat a-t-il réellement du sens pour moi ?

MIRROR étudie si l’IA peut réduire une partie de cette incertitude. Une visualisation reste une estimation : elle ne doit jamais être présentée comme une garantie de taille ou de fit réel.

## Stratégie produit actuelle

Le virtual try-on est une capacité fondamentale, mais pas une différenciation suffisante à lui seul. La valeur potentielle de MIRROR réside dans la connexion entre :

```text
Ce que je trouve + ce que je suis + ce que je possède + ce que je veux porter
→ une décision plus contextualisée
```

Le produit doit avancer progressivement : démontrer d’abord l’utilité du try-on, puis enrichir l’expérience avec la garde-robe, le styling et le shopping.

## MVP envisagé

Le premier MVP répond à une question unique :

> **« Cette expérience est-elle suffisamment utile pour qu’une personne veuille l’utiliser à nouveau ? »**

Parcours envisagé :

1. Ajouter une photo de référence.
2. Importer une image de vêtement.
3. Générer une visualisation estimative.
4. Régénérer, sauvegarder, essayer une autre pièce ou donner un feedback.
5. Supprimer ses données à tout moment.

Le MVP exclut volontairement le réseau social, la marketplace, le B2B, l’avatar 3D, la vidéo et les recommandations complexes.

## État du projet

Le projet est en **phase 1 — recherche produit**. La recherche initiale couvre :

- problèmes et segments utilisateurs ;
- marché français de la mode en ligne ;
- concurrents : Doji, Google / Doppl / Google Photos, Whering et Style DNA ;
- virtual try-on et modèles IA ;
- confidentialité, RGPD et AI Act ;
- modèle économique ;
- MVP, architecture cible, risques et roadmap.

La prochaine phase est la validation auprès d’utilisateurs : entretiens, prototype, test de virtual try-on et analyse des résultats. Aucun développement complet ne doit précéder cette validation.

## Principes de décision

- La recherche et les tests utilisateurs précèdent le développement complet.
- L’onboarding et la collecte de données sont progressifs.
- La confidentialité est conçue dès le départ.
- L’architecture doit pouvoir changer de fournisseur IA.
- Les résultats doivent être décrits comme des visualisations estimatives.
- Une phase n’est validée que par une mesure produit, pas simplement parce que le code fonctionne.

## Documentation

- [Vision](docs/vision.md)
- [Problème](docs/problem.md)
- [Utilisateurs et segmentation](docs/users.md)
- [MVP](docs/mvp.md)
- [Exigences produit](docs/product-requirements.md)
- [Bibliothèque de fonctionnalités](docs/feature-library.md)
- [Architecture cible](docs/architecture.md)
- [Décisions](docs/decisions.md)
- [Registre des risques](docs/risk-register.md)
- [Roadmap](docs/roadmap.md)
- [Recherche](docs/research/)
- [Analyses concurrentielles](docs/competitors/)

## Structure

```text
PROJECT-MIRROR/
├── README.md
├── AI_HANDOFF.md
└── docs/
    ├── vision.md
    ├── problem.md
    ├── users.md
    ├── mvp.md
    ├── product-requirements.md
    ├── feature-library.md
    ├── architecture.md
    ├── decisions.md
    ├── risk-register.md
    ├── roadmap.md
    ├── competitors/
    │   ├── doji.md
    │   ├── google.md
    │   ├── style-dna.md
    │   └── whering.md
    └── research/
```
