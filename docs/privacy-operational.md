# Privacy Operational Plan — V2

## Objectif

Transformer « privacy by design » en contrôles vérifiables.

Principes : minimisation, finalités explicites, accès restreint, conservation limitée, sécurité, suppression, transparence, contrôle des sous-traitants.

La CNIL recommande d'intégrer la protection des données dès la conception et d'appliquer la minimisation aux données nécessaires au système. [SRC-CNIL-01]

## Condition avant pilote avec images réelles

Le pilote est `BLOCKED` tant que chaque ligne de `docs/data-map.md` n'indique pas, sans valeur implicite : donnée, finalité, responsable, stockage, prestataire éventuel, région, durée, suppression et preuve de vérification.

Lorsque le benchmark n'a pas encore déterminé un prestataire ou une région, la valeur correcte est **À déterminer avant pilote**. Cette valeur interdit le transfert correspondant ; elle ne vaut pas approbation implicite.

Avant tout test réel :

1. formaliser le responsable du traitement et la notice pilote ;
2. compléter et approuver la cartographie des traitements ;
3. déterminer la base légale de chaque traitement ;
4. définir les durées et règles de suppression ;
5. identifier les transferts, prestataires et sous-traitants ;
6. vérifier contrats, conditions, région, conservation, entraînement et suppression du fournisseur IA ;
7. préparer les droits des personnes et le contact de demande de suppression ;
8. effectuer le screening AIPD ;
9. réaliser une AIPD complète si nécessaire ou justifiée par l'analyse de risque ;
10. tester une suppression de bout en bout et conserver uniquement sa preuve non sensible.

La CNIL indique qu'une AIPD est obligatoire lorsque le traitement est susceptible d'engendrer un risque élevé. [SRC-CNIL-02]

## Suppression vérifiable

Une demande de suppression doit couvrir sources, résultats, métadonnées, jobs, caches et cycles de sauvegarde, ainsi que les copies chez les sous-traitants lorsque leurs mécanismes contractuels/API le permettent.

La preuve minimale est : une référence de demande, l'horodatage, le périmètre traité, l'état final, la confirmation fournisseur si applicable et un contrôle d'inaccessibilité des ressources supprimées. Elle ne contient aucune image personnelle.

## Fournisseurs

Avant pilote, documenter pour chaque fournisseur retenu pour un essai : données envoyées, région, conservation, entraînement éventuel, sous-traitants, suppression, DPA/conditions, licence et statut de validation G2. Aucun fournisseur n'est présumé retenu par ce document.

## Abus

Définir avant pilote les règles pour mineurs, images d'autrui, usurpation, contenu abusif et demandes interdites.

La promesse « l'utilisateur garde le contrôle de sa représentation » ne doit être publiée que lorsque les contrôles correspondants sont réellement implémentés et testés.
