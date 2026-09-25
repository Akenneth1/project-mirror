# Architecture — V2

```text
Frontend
↓
API Backend
├── Auth / Session
├── User Profile
├── Garments
├── Try-On Jobs
├── Results
├── Feedback
└── Analytics
↓
AI Gateway
├── Input Validation
├── Garment Analysis
├── VTO Provider
├── Quality Checks
└── Future Recommendation Engine
↓
Object Storage / Database
```

## Try-on asynchrone

`POST /tryons` → `job_id`

`GET /tryons/{id}` → `queued` / `processing` / `completed` / `failed`

Le contrôle qualité est exécuté après la génération et avant la présentation du résultat comme utilisable. Un échec qualité est relié au job et n'est pas exposé comme un résultat utilisable.

## AI Gateway

Interface conceptuelle :

`TryOnProvider.generate(person, garment, options)`

Implémentations possibles :

- provider API ;
- self-hosted provider ;
- mock provider.

Le frontend ne connaît jamais le fournisseur. Aucun fournisseur n'est retenu avant G2.

## Traçabilité minimale d'un essai

Chaque job doit pouvoir être relié, sans inclure d'image dans les logs, aux éléments suivants :

| Élément | Finalité documentaire |
|---|---|
| `job_id` et `result_id` | relier demande, résultat, qualité, suppression et feedback |
| fournisseur et version de modèle | comparer, reproduire et auditer G2 |
| catégorie demandée et catégorie reconnue | vérifier le périmètre MVP et les erreurs de classification |
| statut final et code d'échec | distinguer erreur fournisseur, entrée, timeout et échec qualité |
| latence | calculer p50/p95 |
| coût estimé | calculer coût/génération et coût/résultat utile |
| score / décision qualité | empêcher l'affichage d'un résultat critique et suivre la qualité |
| fallback utilisé ou non | rendre visible une bascule, sans la déclencher automatiquement par défaut |
| feedback et `decision_assistance_recorded` associés | relier la qualité et le coût à l'utilité déclarée |
| référence de suppression | démontrer le traitement de la demande de suppression |

La chaîne de traçabilité est : `job → résultat → qualité/coût → feedback/mesure → suppression`.

## Sécurité et données

Secrets hors code, URLs signées, contrôle d'accès, pas d'images personnelles dans les logs, quotas/rate limits et lifecycle de suppression.

Les détails de stockage, de prestataire, de région, de conservation et de preuve de suppression sont définis dans `docs/data-map.md` et `docs/privacy-operational.md`. Aucune image ne peut être envoyée à un fournisseur externe tant que ces champs ne sont pas déterminés pour le pilote.

L'architecture détaillée d'implémentation dépend du benchmark IA et de la validation utilisateur.
