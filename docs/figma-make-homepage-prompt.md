# Prompt Figma Make : Homepage Optimisée Reservia

## 🎯 Contexte du projet

**Nom** : Reservia - Golden Standard  
**Type** : Plateforme de réservation d'hébergements et activités  
**Design System** : Material Design 3  
**Framework** : Next.js 14 + TypeScript + Tailwind CSS

---

## 📋 Brief pour Figma Make

### Objectif principal
Créer une homepage optimisée pour la conversion et l'expérience utilisateur, en respectant le design system Material Design 3 et en maximisant la découverte contextuelle des hébergements et activités.

---

## 🎨 Design Tokens à respecter

### Couleurs
```
Primary: #0065FC (actions principales, CTAs)
On Primary: #FFFFFF (texte sur primary)
Surface: #FFFFFF (fond des cartes)
Surface Container: #F7F7F7 (fond des inputs)
On Surface: #000000 (texte principal)
On Surface Variant: #666666 (texte secondaire)
Outline Variant: #EEEEEE (bordures subtiles)
Tertiary Container: #DEEBFF (badges)
```

### Typographie
```
Display: 3.5rem / 800 weight (Hero headline)
H1: 2.5rem / 700 weight (Titres de page)
H2: 2rem / 700 weight (Titres de section)
H3: 1.5rem / 600 weight (Titres de cartes)
Body Large: 1.125rem / 400 weight (Descriptions)
Body: 1rem / 400 weight (Texte par défaut)
```

### Espacements
```
Card Padding: 20px
Grid Gap: 24px
Section Padding: 64px vertical, 16px horizontal
Container Max Width: 1280px
```

### Border Radius
```
Cards: 32px (2xl)
Buttons: 9999px (full/pill)
Badges: 9999px (full)
Inputs: 16px (lg)
```

### Aspect Ratios
```
Toutes les images: 4:3 (standardisé)
```

---

## 📐 Structure actuelle de la homepage

### Section 1 : Hero
**Composants** :
- Heading (Display typography)
- GlobalFilters (barre de recherche)

**Problèmes identifiés** :
- ❌ Barre de recherche trop complexe (destination + dates + voyageurs)
- ❌ Manque de hiérarchie visuelle
- ❌ Pas de proposition de valeur claire
- ❌ Aucun élément de réassurance (avis, nombre d'offres)

### Section 2 : Accommodations
**Layout** : Grid 3 colonnes (desktop)  
**Composants** : AccommodationCard[]

**Problèmes identifiés** :
- ❌ Pas de filtres visibles (type, prix, note)
- ❌ Tri par défaut non optimal
- ❌ Manque de contexte (combien de résultats ?)
- ❌ Pas de pagination ou "load more"

### Section 3 : Activities
**Layout** : Grid 4 colonnes (desktop)  
**Composants** : 
- Filtres (catégories, quartiers, prix, tri)
- ActivityCard[]

**Problèmes identifiés** :
- ❌ Filtres trop nombreux (surcharge cognitive)
- ❌ Chips de quartiers apparaissent seulement si ville sélectionnée (pas intuitif)
- ❌ Pas de suggestions populaires
- ❌ Manque de call-to-action vers pages détail

---

## 🚀 Recommandations UX pour la nouvelle version

### 1. Hero Section - Simplifié et impactant

**Proposition** :
```
[Image de fond immersive avec overlay gradient]

Titre principal (Display) :
"Trouvez votre prochaine aventure"

Sous-titre (Body Large) :
"10 hébergements • 17 activités • 7 villes en France"

[Barre de recherche simplifiée]
┌─────────────────────────────────────────────┐
│ 🔍 Où souhaitez-vous aller ?               │ [Rechercher]
└─────────────────────────────────────────────┘

[Chips de suggestions populaires]
[🔥 Marseille] [🏖️ Nice] [🗼 Paris] [🏔️ Annecy]

[Éléments de réassurance]
⭐ 4.7/5 moyenne • 🏨 90% disponibilité • ✅ Réservation instantanée
```

**Changements clés** :
- ✅ Un seul champ de recherche (destination uniquement)
- ✅ Dates et voyageurs déplacés vers page détail
- ✅ Suggestions populaires cliquables
- ✅ Métriques de confiance visibles

---

### 2. Section "Découvrez par destination" - NOUVEAU

**Proposition** :
```
H2: "Explorez nos destinations"
Subtitle: "Chaque ville a son caractère unique"

[Grid 3 colonnes - Cartes de villes]
┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐
│ [Image Marseille]   │ │ [Image Paris]       │ │ [Image Nice]        │
│                     │ │                     │ │                     │
│ Marseille           │ │ Paris               │ │ Nice                │
│ 3 hébergements      │ │ 2 hébergements      │ │ 1 hébergement       │
│ 8 activités         │ │ 3 activités         │ │ 2 activités         │
│                     │ │                     │ │                     │
│ [Explorer →]        │ │ [Explorer →]        │ │ [Explorer →]        │
└─────────────────────┘ └─────────────────────┘ └─────────────────────┘
```

**Bénéfices** :
- ✅ Navigation intuitive par ville
- ✅ Aperçu du contenu disponible
- ✅ Réduit la charge cognitive (pas de filtres complexes)
- ✅ Encourage l'exploration

---

### 3. Section Hébergements - Améliorée

**Proposition** :
```
H2: "Hébergements populaires"
Subtitle: "Nos coups de cœur sélectionnés pour vous"

[Barre de filtres simplifiée]
[Tous] [Hôtels] [Appartements]    Trier par: [Plus populaires ▼]

[Compteur de résultats]
"10 hébergements disponibles"

[Grid 3 colonnes]
[AccommodationCard] [AccommodationCard] [AccommodationCard]
[AccommodationCard] [AccommodationCard] [AccommodationCard]

[Bouton centré]
[Voir tous les hébergements →]
```

**Changements clés** :
- ✅ Filtres réduits à l'essentiel (3 types max)
- ✅ Compteur de résultats visible
- ✅ Limite à 6 cartes sur homepage
- ✅ CTA clair vers page dédiée

---

### 4. Section Activités - Repensée

**Proposition** :
```
H2: "Activités incontournables"
Subtitle: "Vivez des expériences uniques"

[Tabs de catégories - Plus visibles]
┌─────────┬─────────┬─────────┬─────────┐
│ 🎨 Tout │ 🏛️ Culture │ 🌲 Nature │ ⚽ Sport │
└─────────┴─────────┴─────────┴─────────┘

[Filtres secondaires - Ligne séparée]
Ville: [Toutes ▼]  Quartier: [Tous ▼]  Prix: [Tous ▼]  [✓ Gratuit uniquement]

[Grid 4 colonnes - Max 8 activités]
[ActivityCard] [ActivityCard] [ActivityCard] [ActivityCard]
[ActivityCard] [ActivityCard] [ActivityCard] [ActivityCard]

[Bouton centré]
[Découvrir toutes les activités →]
```

**Changements clés** :
- ✅ Catégories en tabs (plus visibles)
- ✅ Filtres secondaires sur ligne séparée
- ✅ Limite à 8 activités (2 lignes)
- ✅ Hiérarchie visuelle claire

---

### 5. Section "Comment ça marche" - NOUVEAU

**Proposition** :
```
H2: "Réservez en 3 étapes simples"

[3 colonnes avec icônes]
┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐
│   [🔍 Icon 48px]    │ │   [📅 Icon 48px]    │ │   [✅ Icon 48px]    │
│                     │ │                     │ │                     │
│ 1. Recherchez       │ │ 2. Comparez         │ │ 3. Réservez         │
│                     │ │                     │ │                     │
│ Trouvez votre       │ │ Consultez les avis  │ │ Confirmation        │
│ destination idéale  │ │ et les détails      │ │ instantanée         │
└─────────────────────┘ └─────────────────────┘ └─────────────────────┘
```

**Bénéfices** :
- ✅ Rassure les nouveaux utilisateurs
- ✅ Clarifie le processus
- ✅ Réduit l'anxiété de réservation

---

### 6. Section Social Proof - NOUVEAU

**Proposition** :
```
H2: "Ils nous font confiance"

[Carrousel d'avis]
┌──────────────────────────────────────────────────────────┐
│ ⭐⭐⭐⭐⭐                                                  │
│ "Expérience incroyable à Marseille ! L'hébergement      │
│ était parfait et les activités recommandées à proximité │
│ ont rendu notre séjour inoubliable."                    │
│                                                          │
│ — Marie D., Paris                                        │
└──────────────────────────────────────────────────────────┘

[Indicateurs de confiance]
⭐ 4.7/5 sur 1,234 avis  •  🏆 Certifié qualité  •  🔒 Paiement sécurisé
```

**Bénéfices** :
- ✅ Augmente la confiance
- ✅ Preuve sociale
- ✅ Encourage la conversion

---

## 🎯 Parcours utilisateur optimisé

### Scénario 1 : Recherche rapide
```
1. User arrive sur homepage
2. Voit suggestions populaires "Marseille"
3. Clique sur chip → Scroll automatique vers hébergements filtrés
4. Voit 3 hébergements à Marseille
5. Clique sur carte → Page détail
```

### Scénario 2 : Exploration par ville
```
1. User arrive sur homepage
2. Scroll vers section "Découvrez par destination"
3. Clique sur carte "Nice"
4. Arrive sur page dédiée Nice (hébergements + activités)
5. Réserve hébergement + activité
```

### Scénario 3 : Découverte d'activités
```
1. User arrive sur homepage
2. Scroll vers section Activités
3. Clique sur tab "Nature"
4. Voit activités nature (Calanques, Parc Borély, etc.)
5. Clique sur activité → Page détail
```

---

## 📊 Métriques de succès attendues

### Conversion
- **Objectif** : +30% de clics vers pages détail
- **KPI** : Taux de clic sur cartes hébergements/activités

### Engagement
- **Objectif** : +40% de temps passé sur homepage
- **KPI** : Durée moyenne de session

### Découverte
- **Objectif** : +50% d'utilisation des filtres
- **KPI** : Nombre de filtres appliqués par session

### Réassurance
- **Objectif** : -20% de taux de rebond
- **KPI** : Bounce rate

---

## 🎨 Spécifications techniques pour Figma

### Frames à créer
```
1. Desktop (1280px width)
   - Hero section (viewport height)
   - Destinations section (auto height)
   - Accommodations section (auto height)
   - Activities section (auto height)
   - How it works section (auto height)
   - Social proof section (auto height)
   - Footer (auto height)

2. Tablet (768px width)
   - Grids passent à 2 colonnes
   - Filtres empilés verticalement

3. Mobile (375px width)
   - Grids passent à 1 colonne
   - Barre de recherche full-width
   - Tabs horizontaux scrollables
```

### Composants à créer/modifier

#### CityCard (NOUVEAU)
```
Structure:
- Image (aspect-ratio 4:3, rounded-2xl)
- Overlay gradient (bottom)
- City name (H3, white, bold)
- Stats (Body Small, white)
  - "X hébergements"
  - "Y activités"
- CTA button (filled, primary)

Interactions:
- Hover: lift animation + image scale 1.05
- Click: navigate to city page
```

#### SimplifiedSearchBar (NOUVEAU)
```
Structure:
- Single input field (destination)
- Search icon (left)
- Submit button (right, filled primary)
- Border radius: full
- Shadow: xl
- Background: white

States:
- Default: outline-variant border
- Focus: primary border
- Error: error border + shake animation
```

#### CategoryTab (NOUVEAU)
```
Structure:
- Icon (24px Material Symbol)
- Label (Body, medium weight)
- Active indicator (bottom border 3px primary)

States:
- Default: on-surface-variant text
- Active: primary text + border
- Hover: scale 1.05
```

#### TestimonialCard (NOUVEAU)
```
Structure:
- Rating stars (5 stars, filled/outlined)
- Quote text (Body Large, italic)
- Author name (Body Small, bold)
- Author location (Caption, on-surface-variant)
- Background: surface-container
- Border radius: 2xl
- Padding: 24px

Interactions:
- Part of carousel (auto-rotate every 5s)
```

---

## 🔄 Animations recommandées

### Hero Section
```
- Fade in title (300ms delay)
- Slide up search bar (400ms delay)
- Fade in chips (500ms, staggered 50ms)
```

### Cards
```
- Slide up on scroll (intersection observer)
- Stagger delay: 100ms per card
- Hover: lift (-4px) + shadow-xl (200ms)
```

### Filters
```
- Smooth transition on selection (200ms)
- Results count update with fade (150ms)
```

---

## ✅ Checklist de validation

### Design System
- [ ] Couleurs respectent Material Design 3
- [ ] Typographie suit la scale définie
- [ ] Espacements utilisent les tokens (gap-6, p-5, etc.)
- [ ] Border radius cohérents (2xl pour cartes, full pour boutons)
- [ ] Aspect ratios 4:3 sur toutes les images

### UX
- [ ] Hiérarchie visuelle claire (H2 → Subtitle → Content)
- [ ] CTAs visibles et accessibles
- [ ] Filtres simplifiés (max 3-4 options visibles)
- [ ] Feedback visuel sur toutes les interactions
- [ ] États vides gérés (pas de résultats)

### Accessibilité
- [ ] Contraste texte/fond ≥ 4.5:1 (WCAG AA)
- [ ] Focus states visibles
- [ ] Alt texts sur toutes les images
- [ ] Tailles de clic ≥ 44x44px
- [ ] Navigation au clavier possible

### Performance
- [ ] Images optimisées (WebP, responsive)
- [ ] Lazy loading pour images below-fold
- [ ] Animations performantes (transform/opacity uniquement)
- [ ] Pas de layout shifts (CLS = 0)

### Responsive
- [ ] Desktop (1280px) : 3-4 colonnes
- [ ] Tablet (768px) : 2 colonnes
- [ ] Mobile (375px) : 1 colonne
- [ ] Touch targets ≥ 48x48px sur mobile

---

## 📝 Notes pour Figma Make

### Priorités de conception
1. **Simplicité** : Réduire la charge cognitive (moins de filtres, plus de suggestions)
2. **Découverte** : Encourager l'exploration (cartes de villes, catégories visuelles)
3. **Confiance** : Ajouter éléments de réassurance (avis, métriques, certifications)
4. **Conversion** : CTAs clairs et visibles à chaque section

### Inspirations de référence
- **Airbnb** : Simplicité de la recherche, suggestions populaires
- **Booking.com** : Filtres efficaces, compteurs de résultats
- **TripAdvisor** : Social proof, avis utilisateurs
- **Material Design 3** : Composants, animations, couleurs

### Points de différenciation
- ✅ Découverte contextuelle par quartier (unique)
- ✅ Lien hébergement ↔ activités (unique)
- ✅ Design system cohérent (4:3, 2xl, Material)
- ✅ Performance optimale (Next.js SSG)

---

## 🚀 Livrables attendus

1. **Figma file** avec :
   - 3 frames responsive (Desktop, Tablet, Mobile)
   - Composants réutilisables (variants)
   - Prototype interactif avec transitions
   - Design tokens (styles, variables)

2. **Documentation** :
   - Annotations sur les interactions
   - Spécifications de spacing
   - Guide d'implémentation

3. **Assets** :
   - Icônes exportées (SVG)
   - Images optimisées (WebP)
   - Illustrations si nécessaire

---

## ❓ Questions pour affiner le brief

1. **Ton de la marque** : Plutôt premium/luxe ou accessible/familial ?
2. **Public cible** : Jeunes voyageurs (18-35) ou familles (30-50) ?
3. **Différenciation** : Quel est le USP (Unique Selling Proposition) principal ?
4. **Contraintes** : Y a-t-il des éléments obligatoires à conserver ?
5. **Timeline** : Quel est le délai pour la livraison ?

---

**Version** : 1.0  
**Date** : 21 novembre 2025  
**Auteur** : Cascade AI  
**Projet** : Reservia Golden Standard
