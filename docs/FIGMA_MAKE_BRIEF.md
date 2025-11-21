# 🎨 Brief Figma Make - Homepage Reservia

## 🎯 Mission en 1 phrase
Transformer la homepage Reservia d'une interface complexe (3 champs de recherche, 8+ filtres) en une expérience simplifiée et guidée (1 champ, suggestions populaires, 6 sections stratégiques) pour augmenter la conversion de +30%.

---

## 📊 Contexte actuel

**Projet** : Reservia - Plateforme de réservation hébergements + activités  
**Design System** : Material Design 3  
**Couleur primaire** : `#0065FC`  
**Données** : 10 hébergements, 17 activités, 7 villes (Marseille, Paris, Nice, Lyon, Bordeaux, Annecy, Biarritz)

**Problèmes critiques** :
1. ❌ Barre de recherche trop complexe (destination + dates + voyageurs)
2. ❌ 8+ filtres visibles → surcharge cognitive
3. ❌ 27 cartes affichées → scroll infini
4. ❌ 0 élément de réassurance
5. ❌ 0 suggestion de destination
6. ❌ Pas de hiérarchie claire

**Résultat** :
- Taux de rebond : 35%
- Conversion : 3.5%
- Temps sur page : 45s

---

## 🚀 Solution proposée : 6 sections optimisées

### 1️⃣ Hero - Simplifié et impactant
```
[Image immersive + overlay]

"Trouvez votre prochaine aventure"
"10 hébergements • 17 activités • 7 villes"

┌─────────────────────────────────────┐
│ 🔍 Où souhaitez-vous aller ?       │ [Rechercher]
└─────────────────────────────────────┘

[🔥 Marseille] [🏖️ Nice] [🗼 Paris] [🏔️ Annecy]

⭐ 4.7/5 • 🏨 90% dispo • ✅ Réservation instantanée
```

**Changements** :
- 3 champs → 1 champ (-67% friction)
- + 4 suggestions populaires
- + 3 éléments de confiance

**Impact attendu** : +67% complétion formulaire

---

### 2️⃣ Destinations - Découverte guidée (NOUVEAU)
```
"Explorez nos destinations"
"Chaque ville a son caractère unique"

┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ [Image 4:3] │ │ [Image 4:3] │ │ [Image 4:3] │
│             │ │             │ │             │
│ Marseille   │ │   Paris     │ │    Nice     │
│ 3 hébgmts   │ │ 2 hébgmts   │ │  1 hébgmt   │
│ 8 activités │ │ 3 activités │ │ 2 activités │
│             │ │             │ │             │
│ [Explorer]  │ │ [Explorer]  │ │ [Explorer]  │
└─────────────┘ └─────────────┘ └─────────────┘
```

**Bénéfices** :
- Navigation intuitive par ville
- Aperçu du contenu disponible
- Encourage l'exploration

**Impact attendu** : +60% clics vers pages ville

---

### 3️⃣ Hébergements - Focus qualité
```
"Hébergements populaires"
"Nos coups de cœur sélectionnés pour vous"

[Tous] [Hôtels] [Appartements]    Tri: [Plus populaires ▼]
"10 hébergements disponibles"

┌────┐ ┌────┐ ┌────┐
│Card│ │Card│ │Card│  [Max 6 cartes]
└────┘ └────┘ └────┘
┌────┐ ┌────┐ ┌────┐
│Card│ │Card│ │Card│
└────┘ └────┘ └────┘

[Voir tous les hébergements →]
```

**Changements** :
- 10 cartes → 6 cartes (-40%)
- + Filtres essentiels (3 types)
- + Compteur de résultats
- + CTA explicite

**Impact attendu** : +25% clics sur cartes

---

### 4️⃣ Activités - Hiérarchie claire
```
"Activités incontournables"
"Vivez des expériences uniques"

┌─────────┬─────────┬─────────┬─────────┐
│ 🎨 Tout │🏛️ Culture│🌲 Nature│ ⚽ Sport │  [Tabs]
└─────────┴─────────┴─────────┴─────────┘

Ville: [▼] Quartier: [▼] Prix: [▼] [✓ Gratuit]

┌──┐ ┌──┐ ┌──┐ ┌──┐
│  │ │  │ │  │ │  │  [Max 8 cartes]
└──┘ └──┘ └──┘ └──┘
┌──┐ ┌──┐ ┌──┐ ┌──┐
│  │ │  │ │  │ │  │
└──┘ └──┘ └──┘ └──┘

[Découvrir toutes les activités →]
```

**Changements** :
- Catégories en tabs (plus visibles)
- Filtres secondaires regroupés
- 17 cartes → 8 cartes (-53%)
- + CTA explicite

**Impact attendu** : +60% utilisation filtres

---

### 5️⃣ Comment ça marche - Réassurance (NOUVEAU)
```
"Réservez en 3 étapes simples"

┌──────────┐ ┌──────────┐ ┌──────────┐
│   🔍     │ │    📅    │ │    ✅    │
│  (48px)  │ │  (48px)  │ │  (48px)  │
│          │ │          │ │          │
│Recherchez│ │ Comparez │ │ Réservez │
│          │ │          │ │          │
│Trouvez   │ │Consultez │ │Confirma- │
│votre     │ │les avis  │ │tion      │
│destination│ │et détails│ │instantanée│
└──────────┘ └──────────┘ └──────────┘
```

**Bénéfices** :
- Clarifie le processus
- Réduit l'anxiété de réservation
- Rassure les nouveaux utilisateurs

**Impact attendu** : +20% complétion réservation

---

### 6️⃣ Social Proof - Confiance (NOUVEAU)
```
"Ils nous font confiance"

┌──────────────────────────────────────────┐
│ ⭐⭐⭐⭐⭐                                  │
│ "Expérience incroyable à Marseille !    │
│ L'hébergement était parfait..."          │
│                                          │
│ — Marie D., Paris                        │
└──────────────────────────────────────────┘

⭐ 4.7/5 sur 1,234 avis • 🏆 Certifié • 🔒 Sécurisé
```

**Bénéfices** :
- Preuve sociale
- Avis authentiques
- Métriques de confiance

**Impact attendu** : +30% conversion

---

## 🎨 Design System (Material Design 3)

### Couleurs
```css
Primary:            #0065FC  /* CTAs, liens */
Surface:            #FFFFFF  /* Cartes */
Surface Container:  #F7F7F7  /* Inputs */
On Surface:         #000000  /* Texte principal */
On Surface Variant: #666666  /* Texte secondaire */
Tertiary Container: #DEEBFF  /* Badges */
```

### Typographie
```css
Display:    3.5rem / 800  /* Hero headline */
H2:         2rem / 700    /* Titres sections */
H3:         1.5rem / 600  /* Titres cartes */
Body:       1rem / 400    /* Texte défaut */
```

### Espacements
```css
Grid Gap:        24px
Card Padding:    20px
Section Padding: 64px vertical
Max Width:       1280px
```

### Styles
```css
Cards:    rounded-2xl (32px)
Buttons:  rounded-full (pill)
Images:   aspect-ratio 4:3
Shadows:  0 10px 15px rgba(0,0,0,0.1)
```

---

## 📐 Responsive

| Breakpoint | Grids | Notes |
|------------|-------|-------|
| **Desktop** (1280px) | 3-4 colonnes | Layout optimal |
| **Tablet** (768px) | 2 colonnes | Filtres empilés |
| **Mobile** (375px) | 1 colonne | Tabs scrollables |

---

## 🎯 Objectifs mesurables

### Conversion
- Clics vers détail : **12% → 18%** (+50%)
- Taux de réservation : **3.5% → 5%** (+43%)
- Panier moyen : **180€ → 240€** (+33%)

### Engagement
- Temps sur homepage : **45s → 75s** (+67%)
- Pages vues/session : **2.3 → 3.8** (+65%)
- Taux de rebond : **35% → 20%** (-43%)

### Découverte
- Utilisation filtres : **25% → 50%** (+100%)
- Clics suggestions : **0% → 35%** (∞)
- Exploration villes : **15% → 45%** (+200%)

---

## ✅ Checklist de validation

### Design System
- [ ] Couleurs Material Design 3 respectées
- [ ] Aspect ratio 4:3 sur toutes les images
- [ ] Border radius 32px sur cartes
- [ ] Boutons en pill shape (rounded-full)
- [ ] Grid gap 24px partout
- [ ] Typographie scale respectée

### UX
- [ ] 1 seul champ de recherche (hero)
- [ ] 4 suggestions populaires visibles
- [ ] Max 6 hébergements sur homepage
- [ ] Max 8 activités sur homepage
- [ ] CTAs explicites à chaque section
- [ ] Compteurs de résultats visibles
- [ ] Éléments de confiance présents

### Responsive
- [ ] Desktop : 3-4 colonnes
- [ ] Tablet : 2 colonnes
- [ ] Mobile : 1 colonne
- [ ] Touch targets ≥ 48x48px

### Accessibilité
- [ ] Contraste ≥ 4.5:1 (WCAG AA)
- [ ] Focus states visibles
- [ ] Alt texts descriptifs
- [ ] Navigation clavier possible

---

## 🚀 Livrables attendus

1. **Figma file** avec :
   - 3 frames responsive (Desktop 1280px, Tablet 768px, Mobile 375px)
   - Composants réutilisables avec variants
   - Prototype interactif avec transitions
   - Design tokens (color styles, text styles, effects)

2. **Assets** :
   - Icônes Material Symbols (SVG)
   - Images optimisées (WebP, 4:3)
   - Illustrations si nécessaire

3. **Documentation** :
   - Annotations sur interactions
   - Spécifications spacing
   - Guide d'implémentation

---

## 💡 Inspirations

- **Airbnb** : Simplicité recherche + suggestions populaires
- **Booking.com** : Filtres efficaces + compteurs de résultats
- **TripAdvisor** : Social proof + avis clients authentiques
- **Material Design 3** : Composants + animations + couleurs

---

## 🎬 Prompt court pour Figma Make

> Redesigne la homepage d'une plateforme de réservation (hébergements + activités) en Material Design 3. Couleur primaire #0065FC. Structure : 1) Hero avec recherche simplifiée (1 champ) + 4 suggestions populaires + métriques de confiance, 2) Section découverte par ville (7 cartes 4:3), 3) Hébergements avec filtres minimalistes (max 6 cartes), 4) Activités avec tabs catégories (max 8 cartes), 5) "Comment ça marche" (3 étapes), 6) Social proof (avis + métriques). Toutes images en 4:3, cartes rounded-2xl (32px), boutons pill, grid gap 24px. Responsive : 3-4 colonnes desktop, 2 tablet, 1 mobile. Animations hover : lift -4px + image scale 1.05.

---

## 📞 Contact

**Questions ?** Consultez les documents détaillés :
- `figma-make-homepage-prompt.md` (version complète)
- `homepage-comparison-before-after.md` (analyse avant/après)
- `figma-make-api-request.json` (spécifications techniques)

---

**Version** : 1.0  
**Date** : 21 novembre 2025  
**Auteur** : Cascade AI  
**Projet** : Reservia Golden Standard
