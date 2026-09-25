PROJECT MIRROR — Définition du problème

1. Objectif du document

Ce document définit les problèmes que PROJECT MIRROR cherche à comprendre et, à terme, à résoudre.

Il distingue volontairement :

* les problèmes documentés par la recherche ;
* les observations issues du marché ;
* les hypothèses produit ;
* les questions qui doivent encore être validées auprès d’utilisateurs réels.

L’objectif est d’éviter de construire PROJECT MIRROR autour de fonctionnalités simplement parce qu’elles sont technologiquement impressionnantes.

⸻

2. Le problème central

L’achat de vêtements en ligne prive le consommateur d’une partie des informations disponibles lors d’un achat physique.

En magasin, l’utilisateur peut notamment :

* observer directement le vêtement ;
* voir sa matière et sa construction ;
* l’essayer ;
* observer son rendu sur son propre corps ;
* comparer plusieurs articles ;
* évaluer différentes tailles ;
* imaginer des associations avec ses vêtements ;
* demander un avis avant l’achat.

En ligne, une grande partie de cette évaluation repose sur :

* des photographies ;
* des vidéos ;
* des descriptions ;
* des guides de tailles ;
* des photos portées par des mannequins ;
* des avis clients ;
* des recommandations.

La sélection d’une taille et l’évaluation du fit restent particulièrement difficiles en ligne, car l’utilisateur ne peut pas physiquement essayer le vêtement avant l’achat. Des travaux récents décrivent le fit comme un problème multidimensionnel dépendant à la fois des mesures du corps et des caractéristiques du vêtement. (MDPI)

Problème central actuel

Lorsqu’une personne découvre un vêtement en ligne, elle dispose d’informations limitées pour déterminer comment ce vêtement pourrait lui correspondre visuellement, stylistiquement et physiquement, et pour déterminer s’il constitue réellement un achat pertinent pour elle.

PROJECT MIRROR cherche à étudier si l’IA peut réduire une partie de cette incertitude.

⸻

3. Problème n°1 — Se projeter dans le vêtement

Question utilisateur

« À quoi est-ce que ce vêtement pourrait ressembler sur moi ? »

Une fiche produit présente généralement le vêtement sur un mannequin, un modèle ou sous forme de photographie produit.

L’utilisateur doit donc mentalement transposer le résultat à son propre corps.

Le virtual try-on cherche précisément à réduire cette distance en permettant de visualiser un produit sur une représentation du consommateur.

La littérature sur le virtual try-on montre que cette technologie peut jouer sur la perception de l’utilité, l’expérience d’achat, la réduction du risque perçu et l’intention d’achat. (ScienceDirect)

Hypothèse PROJECT MIRROR

Une représentation personnalisée du vêtement peut apporter davantage d’informations pertinentes à l’utilisateur qu’une simple photographie du produit sur un mannequin.

Questions à vérifier

Nous devons encore déterminer :

* quels vêtements génèrent le plus d’incertitude ;
* si les utilisateurs préfèrent une visualisation rapide ou très réaliste ;
* quel niveau de réalisme est jugé acceptable ;
* à quelle fréquence cette fonction serait réellement utilisée ;
* si la visualisation modifie effectivement une décision d’achat.

⸻

4. Problème n°2 — Incertitude concernant le rendu et le fit

Questions utilisateur

« Est-ce que cette coupe pourrait m’aller ? »

« Est-ce que ce vêtement va tomber comme ça sur moi ? »

« Est-ce que la longueur va convenir ? »

L’absence d’essayage physique constitue une difficulté particulière pour le commerce de vêtements en ligne.

Des recherches récentes soulignent que le choix de taille reste difficile en ligne et que le fit dépend de plusieurs dimensions du corps et du vêtement. (MDPI)

D’autres travaux identifient également le fit et la taille parmi les problèmes importants du commerce de vêtements en ligne. (MDPI)

Distinction essentielle

PROJECT MIRROR devra distinguer :

Visualisation

« Voici une estimation de ce à quoi le vêtement pourrait ressembler sur vous. »

Prédiction physique du fit

« Voici comment le vêtement va réellement tomber et vous aller. »

Ces deux problèmes ne sont pas identiques.

Une image générée par IA ne constitue pas à elle seule une garantie de taille ou de fit réel.

Des travaux sur les systèmes de virtual try-on soulignent d’ailleurs que les représentations visuelles peuvent aider à évaluer l’apparence tout en restant limitées lorsqu’il s’agit de déterminer précisément le bon fit ou la bonne taille. (MDPI)

Principe produit

PROJECT MIRROR ne devra donc jamais présenter une génération comme une garantie de fit réel.

Le système devra utiliser une formulation adaptée :

« Visualisation estimative »

plutôt que :

« Ce vêtement vous ira parfaitement. »

⸻

5. Problème n°3 — Incertitude stylistique

Un utilisateur peut apprécier visuellement un vêtement sans savoir s’il correspond réellement à son style.

Exemple :

« J’aime cette veste, mais est-ce que je vais réellement la porter ? »

Le problème devient alors :

« Est-ce que ce vêtement correspond à la manière dont je souhaite m’habiller ? »

Les systèmes de recommandation vestimentaire cherchent justement à prendre en compte les préférences de l’utilisateur et les relations entre différents vêtements plutôt que de considérer chaque article indépendamment.

Hypothèse PROJECT MIRROR

Une recommandation personnalisée pourrait devenir plus pertinente si le système connaît :

* les préférences de l’utilisateur ;
* les vêtements qu’il possède ;
* les vêtements qu’il apprécie ;
* son style recherché ;
* le contexte d’utilisation ;
* les caractéristiques du vêtement.

À vérifier

Nous ne savons pas encore :

* si les utilisateurs souhaitent réellement qu’une IA analyse leur style ;
* quel niveau de personnalisation ils considèrent utile ;
* s’ils préfèrent des recommandations explicables ou simplement visuelles ;
* si le concept de « style personnel » est suffisamment stable pour être modélisé automatiquement.

⸻

6. Problème n°4 — Absence de contexte lié à la garde-robe

Un vêtement n’est généralement pas utilisé seul.

L’utilisateur peut se demander :

« Avec quoi puis-je porter cette pièce ? »

Cette question introduit la garde-robe personnelle comme une source importante de contexte.

Les travaux sur les garde-robes virtuelles décrivent celles-ci comme des systèmes permettant de représenter et gérer numériquement les vêtements possédés et, potentiellement, de générer des recommandations à partir de cette garde-robe. (MDPI)

Hypothèse PROJECT MIRROR

Une recommandation basée sur les vêtements que l’utilisateur possède pourrait être plus pertinente qu’une recommandation générique.

Mais attention

Une étude publiée sur l’adoption des garde-robes virtuelles a étudié 265 étudiants américains. Elle montre des facteurs associés à l’intention d’adoption, mais son échantillon ne permet pas de généraliser le comportement de tous les consommateurs. (MDPI)

Nous devons donc encore vérifier :

Les utilisateurs sont-ils réellement prêts à consacrer du temps à numériser leur garde-robe ?

C’est une question centrale pour PROJECT MIRROR.

⸻

7. Problème n°5 — Difficulté à exploiter sa garde-robe

Une personne peut posséder de nombreux vêtements tout en ayant du mal à identifier rapidement les combinaisons possibles.

Une garde-robe numérique pourrait créer la boucle suivante :

Vêtements possédés
        ↓
Garde-robe numérique
        ↓
Compréhension des pièces
        ↓
Suggestions de combinaisons
        ↓
Création de tenues
        ↓
Meilleure exploitation de la garde-robe

Cette fonctionnalité est prometteuse, mais nous ne devons pas encore affirmer que la sous-utilisation de la garde-robe constitue un problème majeur pour tous les utilisateurs.

Cela devra être vérifié auprès d’utilisateurs réels.

⸻

8. Problème n°6 — Incertitude avant l’achat

L’utilisateur peut finalement chercher une réponse beaucoup plus simple :

« Est-ce que cet achat a du sens pour moi ? »

Cette question peut dépendre de plusieurs informations :

* rendu visuel ;
* compatibilité avec son style ;
* compatibilité avec sa garde-robe ;
* polyvalence ;
* existence d’articles similaires ;
* contexte dans lequel le vêtement sera porté.

Cela nous conduit vers une hypothèse importante :

PROJECT MIRROR pourrait devenir un outil d’aide à la décision plutôt qu’un simple générateur d’images.

Cette formulation reste une hypothèse produit.

Nous devrons démontrer qu’elle crée davantage de valeur qu’un simple virtual try-on.

⸻

9. Problème n°7 — Trop de choix

Les plateformes de mode permettent aux consommateurs d’accéder à un nombre très important de produits.

Les systèmes de recommandation peuvent aider à filtrer cette quantité d’informations en fonction des préférences et du contexte de l’utilisateur.

Le problème potentiel devient alors :

« Je ne manque pas de vêtements à découvrir. Je manque de certitude concernant ceux qui sont réellement pertinents pour moi. »

Hypothèse PROJECT MIRROR

Un système combinant :

* préférences ;
* garde-robe ;
* style ;
* historique d’interactions ;
* contexte ;

pourrait permettre de réduire une partie de cette complexité.

Cette hypothèse devra être testée.

⸻

10. Problème n°8 — Confiance dans le résultat de l’IA

Le virtual try-on introduit un problème supplémentaire :

« Est-ce que ce que l’IA me montre est suffisamment fidèle pour que je puisse m’y fier ? »

Un résultat visuellement impressionnant peut malgré tout contenir des erreurs.

Exemples possibles :

* proportions modifiées ;
* visage modifié ;
* silhouette différente ;
* mauvaise interprétation du vêtement ;
* couleur incorrecte ;
* longueur incorrecte ;
* mauvaise superposition ;
* texture incorrecte ;
* détails du vêtement supprimés ;
* incohérences entre deux générations.

La recherche sur les expériences AR/VTO montre que la qualité de l’expérience et la confiance dans le système sont importantes, tandis que les préoccupations liées à la confidentialité peuvent réduire certains effets positifs de ces technologies. (ScienceDirect)

Hypothèse produit

La qualité du système ne devra donc pas être évaluée uniquement par :

« Est-ce que l’image est belle ? »

mais aussi par :

« Est-ce que l’utilisateur la considère suffisamment fidèle pour l’aider dans sa décision ? »

⸻

11. Problème n°9 — Confidentialité

PROJECT MIRROR pourrait traiter des données particulièrement personnelles :

* photographies ;
* informations corporelles ;
* mesures éventuelles ;
* préférences vestimentaires ;
* historique de vêtements ;
* habitudes de shopping ;
* données liées à la garde-robe.

Les recherches récentes sur le VTO identifient explicitement les préoccupations liées à la collecte de données personnelles et à la confidentialité comme un frein potentiel à l’utilisation. (ScienceDirect)

Cela signifie que la confidentialité doit être considérée comme un problème produit, et pas uniquement comme un sujet juridique ou technique.

Questions à résoudre

* Quelles données sont réellement nécessaires ?
* Les mesures corporelles doivent-elles être obligatoires ?
* Les photos doivent-elles être conservées ?
* Combien de temps ?
* Peut-on traiter certaines données temporairement ?
* Quelles données doivent être envoyées à des fournisseurs d’IA externes ?
* Comment permettre une suppression complète ?
* Comment expliquer clairement l’utilisation des données ?

⸻

12. Les problèmes sont liés

Les problèmes identifiés ne sont pas indépendants.

             JE VOIS UN VÊTEMENT
                     │
                     ▼
          « À quoi ça ressemble
                  sur moi ? »
                     │
                     ▼
              PROJECTION
                     │
                     ▼
          « Est-ce que ça me
                correspond ? »
                     │
                     ▼
                STYLE
                     │
                     ▼
          « Avec quoi puis-je
               le porter ? »
                     │
                     ▼
               CONTEXTE
                     │
                     ▼
        « Est-ce que j'en ai déjà
              un similaire ? »
                     │
                     ▼
               GARDE-ROBE
                     │
                     ▼
        « Est-ce que ça vaut
               le coup ? »
                     │
                     ▼
              DÉCISION

C’est cette chaîne complète qui pourrait constituer l’opportunité de PROJECT MIRROR.

⸻

13. Ce que la recherche permet actuellement d’affirmer

Niveau de confiance élevé

Le choix de taille et l’évaluation du fit constituent des difficultés importantes du shopping de vêtements en ligne. (MDPI)

Niveau de confiance élevé

Le virtual try-on peut apporter une valeur fonctionnelle et expérientielle et influencer les attitudes et intentions d’achat dans certaines études. (ScienceDirect)

Niveau de confiance modéré

Le VTO peut contribuer à réduire certaines incertitudes concernant la taille et le fit, mais une visualisation ne garantit pas le fit physique réel. (ScienceDirect)

Niveau de confiance modéré

Les garde-robes virtuelles peuvent permettre de représenter numériquement les vêtements possédés et soutenir des recommandations, mais l’adoption par le grand public et l’effort nécessaire à la création d’une garde-robe doivent encore être étudiés. (MDPI)

Niveau de confiance élevé

La confiance et la confidentialité constituent des facteurs importants dans l’adoption de services de mode utilisant l’IA ou le VTO. (ScienceDirect)

⸻

14. Ce que nous ne savons PAS encore

Nous ne devons pas encore considérer comme acquis que :

* tout le monde souhaite un avatar IA ;
* tout le monde souhaite une garde-robe numérique ;
* les utilisateurs accepteront de fournir des photos corporelles ;
* les utilisateurs accepteront de fournir leurs mesures ;
* les utilisateurs feront confiance aux résultats ;
* le VTO réduit systématiquement les retours ;
* les utilisateurs souhaitent qu’une IA décide de leur style ;
* les utilisateurs utiliseront régulièrement une garde-robe numérique ;
* la combinaison de toutes ces fonctionnalités est meilleure que des outils séparés ;
* les utilisateurs paieront pour le service ;
* les marques souhaiteront intégrer notre technologie.

Ces éléments sont des hypothèses à tester.

⸻

15. Hypothèse centrale de PROJECT MIRROR

Notre hypothèse centrale actuelle est :

Si une personne peut visualiser un vêtement sur une représentation personnalisée d’elle-même et évaluer ce vêtement dans le contexte de son style et de sa garde-robe, alors elle pourrait prendre des décisions vestimentaires avec davantage de confiance et moins d’incertitude.

Cette hypothèse peut être décomposée.

H1 — Visualisation

Les utilisateurs trouvent utile de voir un vêtement représenté sur eux.

H2 — Personnalisation

Une représentation personnalisée peut être plus utile qu’une représentation générique pour certaines décisions.

H3 — Contexte

Les informations concernant la garde-robe et le style peuvent améliorer la pertinence des recommandations.

H4 — Décision

La combinaison de visualisation et de contexte peut apporter davantage de valeur qu’un simple outil de virtual try-on.

H5 — Confiance

Les utilisateurs doivent considérer les résultats comme suffisamment fiables pour les utiliser.

H6 — Effort

La valeur obtenue doit justifier l’effort demandé à l’utilisateur pour créer son profil et éventuellement sa garde-robe.

⸻

16. Questions de recherche à résoudre

Avant de construire le produit complet, nous devons répondre à des questions concrètes :

1. À quelle fréquence les utilisateurs ressentent-ils une incertitude lors d’un achat de vêtements en ligne ?
2. Quelle incertitude est la plus importante : apparence, taille, fit, style, prix ou autre ?
3. Comment les utilisateurs résolvent-ils actuellement cette incertitude ?
4. Utilisent-ils déjà des outils de virtual try-on ?
5. Qu’est-ce qui leur fait confiance ou méfiance envers ces outils ?
6. Accepteraient-ils d’envoyer une photo personnelle ?
7. Accepteraient-ils de fournir leurs mesures ?
8. Combien de temps accepteraient-ils de consacrer à la création de leur profil ?
9. Seraient-ils prêts à créer une garde-robe numérique ?
10. Quelle quantité de vêtements seraient-ils prêts à importer ?
11. Veulent-ils des recommandations basées sur leurs propres vêtements ?
12. La visualisation modifie-t-elle leur décision d’achat ?
13. Les informations sur leur garde-robe améliorent-elles cette décision ?
14. Quelles fonctionnalités considèrent-ils comme indispensables ?
15. Quelles fonctionnalités considèrent-ils comme inutiles ?
16. Seraient-ils prêts à payer pour le service ?
17. Dans quelles conditions accepteraient-ils de partager leurs données ?
18. Les marques et e-commerçants percevraient-ils suffisamment de valeur pour intégrer la technologie ?

⸻

17. Le véritable problème produit

À ce stade de notre recherche, le problème peut être résumé ainsi :

Comment réduire l’incertitude liée aux décisions vestimentaires en ligne grâce à l’IA, tout en maintenant suffisamment de précision, de confiance, de confidentialité et de simplicité pour que l’utilisateur ait réellement envie d’utiliser le produit ?

Cette question devient notre fil conducteur pour la suite du projet.

⸻

18. Statut

Statut : Définition du problème — version de recherche

Phase actuelle : Recherche produit

Prochain document

docs/users.md

Ce document devra déterminer qui rencontre réellement ces problèmes, dans quelles situations et avec quelle intensité.

Nous ne créerons donc pas les personas à partir de notre imagination : ils devront être construits à partir de données, de comportements observés et d’hypothèses explicitement identifiées.