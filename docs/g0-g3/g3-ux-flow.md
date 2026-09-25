# G3 — UX Flow et états

## Parcours nominal
`Landing → Upload photo → Photo validation → Upload garment → Garment validation → Confirmation → Try-on job → Quality control → Result`

Depuis Result :
- Regenerate
- Save
- Try another
- Feedback
- Delete

## Frictions prioritaires
### Photo
Expliquer clairement pourquoi la photo est nécessaire.

### Vêtement
Accepter une image réelle d'un produit, pas uniquement un catalogue MIRROR.

### Attente
Utiliser un job asynchrone. Ne pas bloquer le navigateur.

### Résultat
Distinguer visualisation utile et garantie de fit.

## Erreurs
Chaque erreur doit être compréhensible, récupérable lorsque possible, non culpabilisante et traçable.

Exemple : `PHOTO_UNSUPPORTED_POSE` → message explicatif → remplacement de la photo → événement analytics.

## Responsive
Mobile-first, puis adaptation desktop.
