# Prompt Figma Make - Homepage Reservia (Version Courte)

## 🎯 Mission
Redesigner la homepage de Reservia pour maximiser la conversion et simplifier l'expérience utilisateur.

---

## 📋 Contexte actuel

**Projet** : Plateforme de réservation hébergements + activités  
**Design System** : Material Design 3  
**Couleur primaire** : #0065FC  
**Données** : 10 hébergements, 17 activités, 7 villes

**Problèmes identifiés** :
- ❌ Barre de recherche trop complexe (destination + dates + voyageurs)
- ❌ Trop de filtres visibles (surcharge cognitive)
- ❌ Manque d'éléments de réassurance
- ❌ Pas de hiérarchie claire entre sections
- ❌ Aucune suggestion de destinations populaires

---

## 🚀 Nouvelle structure proposée

### 1. Hero Section (Simplifié)
```
[Image de fond avec overlay]

"Trouvez votre prochaine aventure"
"10 hébergements • 17 activités • 7 villes"

[Barre de recherche - UN SEUL CHAMP]
🔍 Où souhaitez-vous aller ? [Rechercher]

[Suggestions populaires]
[🔥 Marseille] [🏖️ Nice] [🗼 Paris] [🏔️ Annecy]

⭐ 4.7/5 • 🏨 90% dispo • ✅ Réservation instantanée
```

### 2. Section "Découvrez par destination" (NOUVEAU)
```
"Explorez nos destinations"

[Grid 3 colonnes - Cartes de villes]
┌─────────────────┐
│ [Image 4:3]     │
│ Marseille       │
│ 3 hébergements  │
│ 8 activités     │
│ [Explorer →]    │
└─────────────────┘
```

### 3. Hébergements (Simplifié)
```
"Hébergements populaires"

Filtres: [Tous] [Hôtels] [Appartements]  Tri: [Plus populaires ▼]
"10 hébergements disponibles"

[Grid 3 colonnes - Max 6 cartes]
[Voir tous les hébergements →]
```

### 4. Activités (Repensé)
```
"Activités incontournables"

[Tabs catégories]
[🎨 Tout] [🏛️ Culture] [🌲 Nature] [⚽ Sport]

Filtres: Ville [▼] Quartier [▼] Prix [▼] [✓ Gratuit]

[Grid 4 colonnes - Max 8 cartes]
[Découvrir toutes les activités →]
```

### 5. Comment ça marche (NOUVEAU)
```
"Réservez en 3 étapes simples"

[🔍 Recherchez] [📅 Comparez] [✅ Réservez]
```

### 6. Social Proof (NOUVEAU)
```
"Ils nous font confiance"

[Carrousel d'avis clients]
⭐⭐⭐⭐⭐ + témoignage + nom

⭐ 4.7/5 sur 1,234 avis • 🏆 Certifié • 🔒 Sécurisé
```

---

## 🎨 Design Tokens

### Couleurs
```
Primary: #0065FC
Surface: #FFFFFF
Surface Container: #F7F7F7
On Surface: #000000
On Surface Variant: #666666
Tertiary Container: #DEEBFF
```

### Typographie
```
Display: 3.5rem / 800 (Hero)
H2: 2rem / 700 (Sections)
H3: 1.5rem / 600 (Cartes)
Body: 1rem / 400
```

### Espacements
```
Grid Gap: 24px
Card Padding: 20px
Section Padding: 64px vertical
```

### Styles
```
Cards: rounded-2xl (32px)
Buttons: rounded-full
Images: aspect-ratio 4:3
Shadows: 0 10px 15px rgba(0,0,0,0.1)
```

---

## 🎯 Objectifs UX

1. **Simplicité** : 1 champ de recherche au lieu de 3
2. **Découverte** : Suggestions + cartes de villes
3. **Confiance** : Avis + métriques + certifications
4. **Conversion** : CTAs clairs à chaque section
5. **Hiérarchie** : Sections bien délimitées

---

## ✅ Checklist

### Must-have
- [ ] Aspect ratio 4:3 sur toutes les images
- [ ] Border radius 32px sur cartes principales
- [ ] Boutons en pill shape (rounded-full)
- [ ] Grid gap de 24px partout
- [ ] Couleur primaire #0065FC pour CTAs
- [ ] Maximum 6 hébergements sur homepage
- [ ] Maximum 8 activités sur homepage

### Nice-to-have
- [ ] Animations hover (lift + scale image)
- [ ] Stagger delay sur grids (100ms/carte)
- [ ] Carrousel auto-rotate pour témoignages
- [ ] Compteurs de résultats en temps réel

### Responsive
- [ ] Desktop (1280px) : 3-4 colonnes
- [ ] Tablet (768px) : 2 colonnes
- [ ] Mobile (375px) : 1 colonne

---

## 🚀 Livrables

1. **Figma file** avec 3 frames (Desktop, Tablet, Mobile)
2. **Composants** réutilisables avec variants
3. **Prototype** interactif avec transitions
4. **Design tokens** (styles + variables)

---

## 💡 Inspirations

- **Airbnb** : Simplicité recherche + suggestions
- **Booking.com** : Filtres efficaces + compteurs
- **TripAdvisor** : Social proof + avis
- **Material Design 3** : Composants + animations

---

**Prompt pour Figma Make** :

> Crée une homepage moderne pour une plateforme de réservation d'hébergements et activités en France. Utilise Material Design 3 avec la couleur primaire #0065FC. La page doit inclure : 1) Hero avec recherche simplifiée (1 champ) et suggestions populaires, 2) Section découverte par ville (cartes 4:3), 3) Hébergements avec filtres minimalistes (max 6 cartes), 4) Activités avec tabs catégories (max 8 cartes), 5) Section "Comment ça marche" (3 étapes), 6) Social proof avec avis clients. Toutes les images en 4:3, cartes en rounded-2xl (32px), boutons en pill, grid gap 24px. Responsive : 3-4 colonnes desktop, 2 tablet, 1 mobile. Ajoute animations hover (lift + scale) et éléments de réassurance (notes, certifications).

---

**Version** : 1.0  
**Date** : 21 novembre 2025
