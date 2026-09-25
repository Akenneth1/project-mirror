# Risk Register — V2

| ID | Risque | Indicateur | Contrôle | Fallback |
|---|---|---|---|---|
| R-01 | VTO peu réaliste | score qualité | benchmark | autre provider |
| R-02 | Identité altérée | score identité | benchmark | provider alternatif |
| R-03 | Vêtement mal reproduit | fidélité | évaluation | catégorie restreinte |
| R-04 | Biais de performance | écarts | benchmark diversité | restriction |
| R-05 | Latence | p95 | monitoring | async/provider |
| R-06 | Coût | coût utile | cost tracking | modèle moins cher |
| R-07 | Exposition données | incident | sécurité | désactivation |
| R-08 | Conservation excessive | audit | lifecycle | purge |
| R-09 | Licence incompatible | audit | registre licences | autre modèle |
| R-10 | Abandon photo | taux | UX | onboarding progressif |
| R-11 | Scope creep | backlog | gates | report |
| R-12 | Abus d'images | incidents | moderation | blocage |
| R-13 | Fraude/charge | coût anormal | quotas/rate limits | limitation |
| R-14 | Provider lock-in | dépendance | AI Gateway | fallback |
| R-15 | Promesse de fit | plaintes | wording | clarification |
| R-16 | Faible rétention | repeat rate | cohortes | repositionnement |
| R-17 | Économie incompatible | coût utile | unit economics | pivot |

Chaque risque critique doit recevoir un propriétaire et une date de revue avant production.
