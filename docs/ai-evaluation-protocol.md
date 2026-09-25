# AI Evaluation Protocol — V2

## Dataset
Jeu de cas consentants et diversifiés, avec identifiant, photo, catégorie, vêtement, pose et qualité.

Éviter les attributs sensibles non nécessaires.

## Comparabilité
Même jeu de cas et paramètres comparables pour tous les fournisseurs.

## Évaluation
Chaque résultat est évalué indépendamment sur :
- fidélité vêtement : 1–5 ;
- identité : 1–5 ;
- silhouette : 1–5 ;
- artefacts : 1–5 ;
- utilité : 1–5.

## Échecs
API, timeout, mauvais vêtement, identité altérée, artefact anatomique, catégorie non supportée, entrée invalide.

## Diversité
Comparer les distributions et les écarts entre situations/groupes pertinents ; ne pas masquer une exclusion derrière une moyenne.

## Sortie
Taux de succès, scores par dimension, latence p50/p95, coût, coût utile, limites, licence, politique de données et statut `candidate/fallback/rejected`.
