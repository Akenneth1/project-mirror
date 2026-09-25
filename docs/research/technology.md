# Recherche — Technologie de Virtual Try-On

## 1. Familles technologiques

Un système moderne de VTO peut combiner :

1. Détection / segmentation de personne.
2. Pose / DensePose.
3. Segmentation du vêtement.
4. Modèle de diffusion ou autre générateur.
5. Conditionnement par image du vêtement.
6. Préservation de l'identité.
7. Post-traitement.
8. Contrôle qualité.

## 2. Modèles open source étudiés

### IDM-VTON

Projet officiel :
https://github.com/yisol/IDM-VTON

Le projet est dédié au virtual try-on et utilise des composants de segmentation humaine, DensePose, OpenPose et diffusion.

Licence annoncée pour le code et checkpoints :
CC BY-NC-SA 4.0.

Le dépôt et le modèle Hugging Face indiquent donc une contrainte **non commerciale**.

Sources :
https://github.com/yisol/IDM-VTON
https://huggingface.co/yisol/IDM-VTON

### CatVTON

Projet :
https://github.com/Zheng-Chong/CatVTON

Le dépôt indique un modèle léger relativement aux systèmes VTO précédents, avec moins de 8 Go de VRAM annoncés pour une configuration donnée en 1024×768.

Licence :
CC BY-NC-SA 4.0.

Donc, comme IDM-VTON, il ne doit pas être intégré à un produit commercial sans analyse et autorisation/licence appropriée.

### OOTDiffusion

Projet :
https://github.com/levihsu/OOTDiffusion

Le projet fournit des modèles half-body et full-body et indique avoir été testé sous Linux/Ubuntu.

Le dépôt contient également des discussions ouvertes autour de l'utilisation commerciale.

## 3. Décision technique

Ne pas choisir définitivement un modèle open source uniquement parce qu'il est disponible.

Le choix devra dépendre de :

- licence commerciale ;
- qualité ;
- identité ;
- catégories supportées ;
- vitesse ;
- coût ;
- infrastructure ;
- maintenance ;
- confidentialité ;
- possibilité de remplacement.

## 4. Architecture recommandée

Commencer avec une abstraction :

```text
VTON_PROVIDER
     │
     ├── provider A
     ├── provider B
     └── self-hosted model
```

L'application ne doit pas dépendre directement d'un seul modèle.

## 5. Prototype

Pour le prototype, le but est de démontrer :

Photo utilisateur + vêtement
→ résultat VTO
→ mesure qualitative de satisfaction.

Le prototype n'a pas besoin d'entraîner un modèle propriétaire.

