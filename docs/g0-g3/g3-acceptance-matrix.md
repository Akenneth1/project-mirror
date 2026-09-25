# G3 — Matrice d'acceptation

| ID | Domaine | Critère observable et testable |
|---|---|---|
| AC-01 | Photo | Une photo valide peut être importée et atteint l'état `VALID`. |
| AC-02 | Photo | Une photo incompatible est refusée avec un motif compréhensible et une action de correction. |
| AC-03 | Garment | Une image de vêtement valide peut être importée et atteint l'état `VALID`. |
| AC-04 | Garment | Une catégorie non MVP ou non validée est marquée `UNSUPPORTED_CATEGORY` avant appel IA. |
| AC-05 | États | Avant action, le parcours affiche `idle` sans job créé. |
| AC-06 | États | Pendant le transfert d'une image, l'état `uploading` est visible. |
| AC-07 | États | Pendant la vérification d'entrée, l'état `validating` est visible. |
| AC-08 | Try-on | Une génération valide est créée sous forme de job et passe à `processing`. |
| AC-09 | Try-on | L'état du job est consultable jusqu'à `completed` ou `failed`. |
| AC-10 | Erreur récupérable | Une erreur récupérable affiche le motif et permet un nouvel essai sans perdre les données encore valides. |
| AC-11 | Erreur fatale | Une erreur fatale affiche un état distinct, n'affiche aucun résultat utilisable et indique l'action possible ou l'arrêt du parcours. |
| AC-12 | Quality | Le contrôle qualité se termine avant l'affichage d'un résultat utilisable ; un résultat critique est marqué échec qualité et n'est pas présenté comme utilisable. |
| AC-13 | Result | Un résultat utilisable est affiché avec un statut clair et la mention « visualisation estimative ». |
| AC-14 | Result | Régénérer crée un nouvel essai traçable sans effacer le résultat précédent avant décision utilisateur. |
| AC-15 | Navigation | « Essayer une autre pièce » revient à l'étape vêtement sans imposer une nouvelle photo valide. |
| AC-16 | Save | Un résultat peut être sauvegardé. |
| AC-17 | History | Un résultat sauvegardé peut être retrouvé dans l'historique minimal. |
| AC-18 | Feedback | Utile/pas utile peut être enregistré. |
| AC-19 | Signalement | Un problème d'identité, de vêtement, de cadrage ou autre peut être signalé et relié au résultat. |
| AC-20 | Privacy | Après une demande de suppression, les ressources actives couvertes par `data-map.md` deviennent inaccessibles au demandeur ; une preuve non sensible de périmètre, horodatage et état final est disponible. |
| AC-21 | Security | Un utilisateur ne peut pas accéder aux images ou résultats d'un autre utilisateur. |
| AC-22 | Analytics | Les événements MVP requis, dont `decision_assistance_recorded`, sont mesurables sans stocker le contenu des images. |
| AC-23 | AI | Le fournisseur est derrière `TryOnProvider` et la version de modèle, la catégorie, la latence, le coût et le statut qualité sont traçables par job. |
| AC-24 | Scope | Les fonctionnalités hors MVP ne sont pas nécessaires au parcours nominal. |
| AC-25 | Responsive | Le parcours nominal, les états et les erreurs sont utilisables sur un écran mobile et un écran desktop définis pour les tests G3. |
| AC-26 | Session | Avant le premier upload du parcours MVP, une session minimale identifiable est créée ou retrouvée ; les uploads, jobs, résultats et feedback de ce parcours y sont rattachés. |
| AC-27 | Validation | Si la photo utilisateur ou le vêtement est invalide, non supporté ou `LOW_CONFIDENCE`, aucun job n'est créé et aucun événement `tryon_started` n'est enregistré. |

## Definition of Done

Une fonctionnalité n'est `done` que si son comportement nominal, ses états, ses erreurs, sa validation, sa sécurité, ses analytics, son responsive, ses tests, sa documentation et son critère d'acceptation associé sont vérifiés.
