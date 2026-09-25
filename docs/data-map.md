# Data Map — V2

## Règle pilote

Le porteur de PROJECT MIRROR est responsable du traitement pour le pilote, sous réserve de formaliser l'entité et la notice pilote avant collecte. Aucun transfert à un prestataire ni lancement de pilote avec images réelles n'est autorisé tant que les champs marqués **À déterminer avant pilote** ne sont pas complétés et approuvés dans ce document et dans le plan privacy.

| Donnée | Finalité | Responsable | Stockage | Prestataire / région | Durée pilote | Suppression | Preuve / méthode de vérification |
|---|---|---|---|---|---|---|---|
| Photo utilisateur | produire le try-on demandé | Porteur PROJECT MIRROR | À déterminer avant pilote | À déterminer avant pilote ; aucun transfert autorisé avant documentation | À déterminer avant pilote | sources, copies temporaires et caches inclus | journal de suppression sans image + contrôle d'inaccessibilité |
| Image vêtement | produire et analyser le try-on demandé | Porteur PROJECT MIRROR | À déterminer avant pilote | À déterminer avant pilote ; aucun transfert autorisé avant documentation | À déterminer avant pilote | sources, copies temporaires et caches inclus | journal de suppression + contrôle d'inaccessibilité |
| Résultat généré | affichage et sauvegarde explicitement demandée | Porteur PROJECT MIRROR | À déterminer avant pilote | À déterminer avant pilote ; aucun transfert autorisé avant documentation | À déterminer avant pilote | résultat, copies dérivées et cache inclus | journal de suppression + contrôle d'inaccessibilité |
| Métadonnées job | exécuter, diagnostiquer et mesurer le job | Porteur PROJECT MIRROR | À déterminer avant pilote | aucun externe prévu ; à confirmer avant pilote | À déterminer avant pilote | job, références de résultat et files inclus | enregistrement de purge contrôlable |
| Feedback et décision/confiance | mesurer valeur et qualité produit | Porteur PROJECT MIRROR | À déterminer avant pilote | aucun externe prévu ; à confirmer avant pilote | À déterminer avant pilote | données associées au participant incluses | enregistrement de purge contrôlable |
| Analytics minimisés | mesurer le funnel et les métriques canoniques | Porteur PROJECT MIRROR | À déterminer avant pilote | À déterminer avant pilote | À déterminer avant pilote | événements associés au participant inclus | vérification d'absence d'image dans les événements + purge contrôlable |

## Flux autorisé sous condition

`Utilisateur → frontend → backend → stockage temporaire documenté → AI Gateway → prestataire documenté → contrôle qualité → stockage documenté → utilisateur`

Le flux est **bloqué avant le prestataire** tant que son identité, sa région, ses conditions de conservation, son entraînement éventuel sur données client, ses sous-traitants et son mécanisme de suppression ne sont pas documentés.

Aucune image personnelle ne doit être copiée dans les logs applicatifs.
