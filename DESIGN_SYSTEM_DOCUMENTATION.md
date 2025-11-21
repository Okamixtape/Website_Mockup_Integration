# Reservia Golden Standard - Design System Documentation

## Vue d'ensemble

Reservia a été transformé d'un projet étudiant en une **plateforme professionnelle de réservation** avec un design system cohérent basé sur **Material Design 3**. La refonte se concentre sur trois piliers : la cohérence visuelle, l'expérience utilisateur contextuelle, et l'excellence technique.

---

## 🎨 Philosophie du design

### Principes directeurs

1. **Cohérence avant tout** : Chaque élément visuel suit des règles strictes (aspect ratios, border radius, spacing)
2. **Clarté géographique** : Le système de quartiers crée des liens logiques entre hébergements et activités
3. **Hiérarchie visuelle** : Typographie, couleurs et espacements guident naturellement l'œil
4. **Accessibilité native** : Alt tags optimisés, contrastes respectés, semantic HTML

### Inspiration Material Design 3

La plateforme adopte les concepts clés de MD3 :
- **Color roles** (primary, on-primary, surface, on-surface)
- **State layers** (hover, active, focus)
- **Elevation** via shadows plutôt que flat design
- **Typography scale** hiérarchisée
- **Rounded corners** pour un style moderne et chaleureux

---

## 🌈 Système de couleurs

### Palette principale

#### Brand & Actions
- **Primary** : `#0065FC` - Bleu Reservia, utilisé pour tous les CTA, liens, et éléments interactifs principaux
- **On-Primary** : `#FFFFFF` - Texte sur fond primary (boutons, badges)

#### Surfaces & Containers
- **Background** : `#FFFFFF` - Fond de page global
- **Surface** : `#FFFFFF` - Fond des cartes et panneaux
- **Surface Container** : `#F7F7F7` - Fond des inputs, filtres, panneaux secondaires
- **Surface Container High** : `#EEEEEE` - États hover, zones surélevées

#### Texte & Contenu
- **On-Surface** : `#000000` - Titres, texte principal
- **On-Surface Variant** : `#666666` - Texte secondaire, labels, descriptions

#### Accents & États
- **Tertiary Container** : `#DEEBFF` - Badges "Incontournable", "À proximité"
- **On-Tertiary Container** : Texte sur badges tertiaires
- **Error** : `#FF0000` - États d'erreur
- **Success** : `#00C853` - Confirmations
- **Rating** : `#FFD700` - Étoiles de notation

#### Contours & Séparateurs
- **Outline** : `#D9D9D9` - Bordures par défaut
- **Outline Variant** : `#EEEEEE` - Bordures subtiles, dividers
- **Scrim** : `#000000` avec opacité - Overlays sur images

### Utilisation des couleurs

```
Bouton primaire : bg-primary text-on-primary
Bouton secondaire : bg-surface-container-high text-on-surface
Card : bg-surface border-outline-variant
Input : bg-surface-container border-outline
Badge populaire : bg-primary text-on-primary
Badge "Incontournable" : bg-tertiary-container text-on-tertiary-container
```

---

## ✍️ Typographie

### Famille de polices
- **System stack** : `system-ui, -apple-system, sans-serif`
- Performances optimales et lisibilité native sur tous les OS

### Échelle typographique

#### Display (Hero)
- **Taille** : `3.5rem (56px)`
- **Poids** : 800 (Extra Bold)
- **Usage** : Hero homepage uniquement

#### H1 (Titres de page)
- **Taille** : `2.5rem (40px)`
- **Poids** : 700 (Bold)
- **Usage** : Titres principaux (ex: nom de l'hébergement en détail)

#### H2 (Titres de section)
- **Taille** : `2rem (32px)`
- **Poids** : 700 (Bold)
- **Usage** : Sections "Hébergements à Marseille", "Activités à Paris"

#### H3 (Titres de cartes)
- **Taille** : `1.5rem (24px)`
- **Poids** : 600 (Semi-Bold)
- **Usage** : Titres des cards d'hébergements et activités

#### Body Large
- **Taille** : `1.125rem (18px)`
- **Line-height** : 1.6
- **Usage** : Descriptions importantes, sous-titres de sections

#### Body (Default)
- **Taille** : `1rem (16px)`
- **Line-height** : 1.5
- **Usage** : Texte courant, paragraphes

#### Small
- **Taille** : `0.875rem (14px)`
- **Usage** : Labels, métadonnées (localisation, durée)

#### Caption
- **Taille** : `0.75rem (12px)`
- **Usage** : Disclaimers, texte légal

### Hiérarchie en pratique

```
<h2>Hébergements à Marseille</h2>  ← text-2xl font-bold text-on-surface
  <article>
    <h3>Auberge La Canebière</h3>  ← text-xl font-bold text-on-surface
    <p>Vieux-Port</p>              ← text-sm text-on-surface-variant
    <span>76€ / nuit</span>        ← text-lg font-bold
  </article>
```

---

## 📐 Spacing & Layout

### Système d'espacement (basé sur rem)

```
gap-2  : 0.5rem  (8px)  → Espacement interne dans badges
gap-4  : 1rem    (16px) → Entre éléments dans un groupe
gap-6  : 1.5rem  (24px) → Grilles de cartes (STANDARD)
gap-8  : 2rem    (32px) → Entre sections majeures
py-16  : 4rem    (64px) → Padding vertical des sections
py-24  : 6rem    (96px) → Sections larges (desktop)
```

### Règles de grille

#### Homepage - Hébergements
```css
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
gap-6
```
3 colonnes sur desktop, adaptatif sur mobile

#### Homepage - Activités
```css
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
gap-6
```
4 colonnes sur desktop pour plus de densité

#### Nearby Activities (détail d'hébergement)
```css
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
gap-6
```
Maximum 4 activités affichées

### Container principal
```css
max-width: 1280px (max-w-7xl)
margin: auto (mx-auto)
padding: 1rem horizontal (px-4)
```

---

## 🔲 Border Radius (Coins arrondis)

### Standardisation 2xl = 32px

**Avant refactoring** : Mélange de `rounded-lg` (16px), `rounded-xl` (24px), `rounded-2xl` (32px)
**Après refactoring** : **Uniformisation stricte**

#### Règles d'application

| Élément | Border Radius | Justification |
|---------|---------------|---------------|
| **Cards principales** | `rounded-2xl` (32px) | Style premium, moderne |
| **Images principales** | `rounded-2xl` (32px) | Cohérence avec la card |
| **Thumbnails** | `rounded-2xl` (32px) | Harmonisation visuelle |
| **Boutons** | `rounded-full` (9999px) | Effet "pill", friendly |
| **Badges** | `rounded-full` | Cohérence avec boutons |
| **Inputs/Select** | `rounded-lg` (16px) | Subtilité pour formulaires |

### Exemple de card
```jsx
<article className="bg-surface rounded-2xl overflow-hidden">
  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
    <img className="object-cover" />
  </div>
</article>
```

---

## 📷 Aspect Ratios

### Standardisation 4:3

**Avant** : Mélange de `aspect-[16/10]`, `aspect-video`, dimensions fixes
**Après** : **Unique ratio 4:3 partout**

#### Avantages du 4:3
- **Rythme visuel** : Toutes les cartes ont la même proportion
- **Équilibre** : Ni trop carré, ni trop panoramique
- **Photos** : Format classique qui valorise les façades, paysages
- **Cohérence** : Facile à maintenir et étendre

#### Application
```jsx
// Image principale
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
  <Image src={...} fill className="object-cover" />
</div>

// Thumbnails (galerie)
<button className="relative aspect-[4/3] overflow-hidden rounded-2xl">
  <Image src={...} fill className="object-cover" />
</button>
```

Tous les composants : `AccommodationCard`, `ActivityCard`, `AccommodationDetail`, `ActivityDetail`, `NearbyActivities`

---

## 🎭 Composants UI

### 1. Cards (AccommodationCard, ActivityCard)

#### Structure anatomique
```
┌─────────────────────────────┐
│  [Image 4:3, rounded-2xl]   │
│    ┌──────┐         ┌───┐   │ ← Overlays
│    │Badge │         │ ♥ │   │
│    └──────┘         └───┘   │
│            ┌────────┐       │
│            │ 76€    │       │ ← Price badge
│            └────────┘       │
├─────────────────────────────┤
│ Padding 5 (20px)            │
│ [H3] Titre                  │
│ [Icon + text] Location      │
│ [★★★★★] 4.5                 │
│                              │
│ [Button filled full-width]  │
└─────────────────────────────┘
```

#### États interactifs
- **Hover** : `translateY(-4px)` + `shadow-xl` + image `scale(1.05)`
- **Click** : Navigation vers page détail

#### Variants entre Accommodation et Activity
- **Accommodation** : Badge "Très bon marché" / "Populaire"
- **Activity** : Badge "Incontournable" / "Populaire" + indication "Gratuit" ou prix

### 2. Boutons

#### Variant "filled" (primaire)
```jsx
<button className="
  bg-primary text-on-primary
  px-6 py-3 rounded-full
  font-semibold
  hover:shadow-lg hover:scale-102
  transition-all duration-200
">
  Réserver
</button>
```

#### Variant "tonal" (secondaire)
```jsx
<button className="
  bg-surface-container-high text-on-surface
  px-6 py-3 rounded-full
  font-medium
  hover:bg-surface-container transition-colors
">
  Retour
</button>
```

#### Variant "outlined"
```jsx
<button className="
  bg-transparent border border-outline-variant
  text-on-surface
  px-6 py-3 rounded-full
  hover:bg-surface-container-high
">
  Filtrer
</button>
```

#### Tailles
- **Small** : `h-9 px-4 text-sm` - Actions secondaires
- **Medium** : `h-11 px-6 text-base` - Actions standard
- **Large** : `h-13 px-8 text-lg` - CTAs majeurs

### 3. Chips (filtres)

#### État par défaut
```jsx
<button className="
  px-4 py-2 rounded-full
  bg-surface-container
  border border-outline-variant
  text-on-surface-variant
  hover:scale-105 transition-transform
">
  <span className="material-symbols-outlined">museum</span>
  Culture
</button>
```

#### État sélectionné
```jsx
<button className="
  px-4 py-2 rounded-full
  bg-primary text-on-primary
  hover:scale-105
">
  <span className="material-symbols-outlined">museum</span>
  Culture
</button>
```

### 4. Badges

#### Badge "Populaire"
```jsx
<span className="
  px-3 py-1 rounded-full
  bg-primary text-on-primary
  text-xs font-bold
  flex items-center gap-1.5
">
  <span className="material-symbols-outlined text-sm">local_fire_department</span>
  Populaire
</span>
```

#### Badge "Incontournable"
```jsx
<span className="
  px-3 py-1 rounded-full
  bg-tertiary-container text-on-tertiary-container
  text-xs font-bold
  flex items-center gap-1.5
">
  <span className="material-symbols-outlined text-sm">tour</span>
  Incontournable
</span>
```

#### Badge "À proximité"
```jsx
<span className="
  px-3 py-1 rounded-full
  bg-tertiary-container text-on-tertiary-container
  text-xs font-bold
  flex items-center gap-1.5
">
  <span className="material-symbols-outlined text-sm">near_me</span>
  À 10min à pied
</span>
```

### 5. ReservationCalendar (panneau sticky)

Structure du panneau de réservation :

```jsx
<div className="
  sticky top-24
  bg-surface-container rounded-2xl
  p-6 border border-outline-variant
  shadow-lg
">
  {/* Prix */}
  <div>
    <span className="text-3xl font-bold">76€</span>
    <span className="text-on-surface-variant">/ nuit</span>
  </div>

  {/* Calendrier */}
  <ReservationCalendar />

  {/* Compteur de voyageurs */}
  <div className="flex items-center gap-4">
    <button className="w-10 h-10 rounded-full border">-</button>
    <span className="text-lg font-medium">2</span>
    <button className="w-10 h-10 rounded-full border">+</button>
  </div>

  {/* Récapitulatif */}
  {checkIn && checkOut && (
    <div className="space-y-2 pt-4 border-t">
      <div>76€ x 3 nuits = 228€</div>
      <div>Frais de service = 23€</div>
      <div className="font-semibold">Total = 251€</div>
    </div>
  )}

  {/* CTA */}
  <Button variant="filled" size="large" className="w-full">
    Réserver
  </Button>

  <p className="text-xs text-center text-on-surface-variant">
    Aucun montant ne sera débité
  </p>
</div>
```

### 6. NearbyActivities (section intelligente)

Nouveau composant créé pendant la refonte :

#### Logique de filtrage
```typescript
// 1. Chercher dans le même quartier
const nearbyActivities = activities.filter(
  activity => activity.neighborhoodId === accommodation.neighborhoodId
)

// 2. Fallback : toute la ville
const sameCityActivities = nearbyActivities.length === 0
  ? activities.filter(activity => activity.city === accommodation.city)
  : []

// 3. Afficher avec titre dynamique
const title = nearbyActivities.length > 0
  ? `À faire à proximité • ${neighborhoodName}`
  : `À découvrir à ${city}`
```

#### Affichage visuel
- **Badge contextuel** : "À 10min à pied" si quartier exact
- **Grille 4 colonnes** : Maximum 4 activités
- **CTA** : "Voir toutes les activités à {ville}" si plus d'activités disponibles

---

## 🎬 Animations

### Principes
- **Subtilité** : Animations courtes (200-400ms)
- **Performance** : `transform` et `opacity` uniquement
- **Purpose** : Feedback, hiérarchie temporelle, plaisir

### AnimatedBox (composant wrapper)

#### FadeIn
```jsx
<AnimatedBox animation="fadeIn">
  <h2>Titre de section</h2>
</AnimatedBox>
```
- **Duration** : 300ms
- **Usage** : Titres de sections, messages d'état vide

#### SlideUp
```jsx
<AnimatedBox animation="slideUp" delay={index * 50}>
  <ActivityCard />
</AnimatedBox>
```
- **Duration** : 400ms
- **Transform** : `translateY(20px) → translateY(0)`
- **Usage** : Cartes dans les grilles (avec delay staggeré)

#### SlideLeft
```jsx
<AnimatedBox animation="slideLeft" delay={100}>
  <ReservationPanel />
</AnimatedBox>
```
- **Duration** : 400ms
- **Transform** : `translateX(20px) → translateX(0)`
- **Usage** : Sidebars, panneaux latéraux

#### Hover: Lift
```jsx
<AnimatedBox hover="lift" tap>
  <Card />
</AnimatedBox>
```
- **Duration** : 200ms
- **Transform** : `translateY(-4px)` + `shadow-xl`
- **Usage** : Cartes interactives

#### Image Scale on Card Hover
```jsx
<div className="overflow-hidden">
  <img className="
    group-hover:scale-105
    transition-transform duration-300
  " />
</div>
```

#### Shake (validation error)
```typescript
// Animation de tremblement si dates non sélectionnées
calendar.classList.add('animate-shake')
setTimeout(() => calendar.classList.remove('animate-shake'), 500)
```

### Staggering (délais échelonnés)
```jsx
{activities.map((activity, index) => (
  <AnimatedBox animation="slideUp" delay={index * 50}>
    <ActivityCard activity={activity} />
  </AnimatedBox>
))}
```
Délai de 50ms par carte pour effet de cascade

---

## 📱 Responsive Design

### Breakpoints Tailwind
```
sm:  640px  - Petits écrans
md:  768px  - Tablettes
lg:  1024px - Desktop
xl:  1280px - Large desktop
2xl: 1536px - Extra large
```

### Stratégies par composant

#### Grilles de cartes
```jsx
// Hébergements : 1 → 2 → 3 colonnes
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Activités : 1 → 2 → 4 colonnes
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
```

#### Filters section
```jsx
// Desktop : ligne horizontale avec chips + switch + select
// Mobile : empilement vertical

<div className="flex flex-wrap gap-4 items-center">
  {/* Sur mobile, flex-wrap empile naturellement */}
</div>
```

#### GlobalFilters (barre de recherche)
```jsx
// Desktop : 4 inputs en ligne (destination | dates | guests | search)
// Mobile : empilement vertical avec même ordre

<form className="
  flex flex-col md:flex-row
  gap-4 md:gap-2
  bg-white rounded-full md:rounded-full
  p-4 md:p-2
">
```

#### AccommodationDetail layout
```jsx
// Desktop : 2/3 contenu + 1/3 sidebar
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2">
    {/* Galerie + infos */}
  </div>
  <div className="lg:col-span-1">
    <div className="sticky top-24">
      {/* Panneau réservation */}
    </div>
  </div>
</div>
```

### Images responsives
```jsx
<Image
  src="/images/hebergements/4_small/..."
  alt="..."
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  loading="lazy"
/>
```
Next.js génère automatiquement les srcsets

---

## ♿ Accessibilité

### Alt tags optimisés
**Règle stricte** : < 125 caractères

**Avant** :
```jsx
alt="Superbe appartement dans le coeur historique du Vieux-Port de Marseille avec vue sur la mer Méditerranée, proche de toutes commodités, idéal pour familles - Marseille"
// 166 caractères ❌
```

**Après** :
```jsx
alt="Auberge La Canebière - Vieux-Port"
// 35 caractères ✅
```

**Format standard** :
```
Hébergements : "{nom} - {localisation}"
Activités : "{nom} à {ville}"
Galeries : "{nom} - vue {numéro}"
```

### Semantic HTML
```jsx
// ✅ Bon
<article>
  <h3>Titre de la card</h3>
  <p>Description</p>
</article>

<section id="activites">
  <h2>Activités à Marseille</h2>
</section>

// ❌ Mauvais
<div>
  <div className="font-bold">Titre</div>
</div>
```

### ARIA labels
```jsx
// Bouton favori (icon-only)
<button aria-label="Ajouter aux favoris">
  <span className="material-symbols-outlined">favorite</span>
</button>

// Compteur de voyageurs
<button aria-label="Diminuer le nombre de voyageurs">
  <span className="material-symbols-outlined">remove</span>
</button>
```

### Focus states
```css
/* Tous les éléments interactifs ont un focus visible */
focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
```

### Contraste des couleurs
Tous les couples texte/fond respectent WCAG AA :
- `text-on-surface` (#000) sur `bg-surface` (#FFF) = 21:1
- `text-on-primary` (#FFF) sur `bg-primary` (#0065FC) = 4.8:1
- `text-on-surface-variant` (#666) sur `bg-surface` (#FFF) = 5.7:1

---

## 🗺️ Architecture de données géographique

### Système de quartiers (nouveauté clé)

#### Fichier `neighborhoods.ts`
```typescript
export interface Neighborhood {
  id: string           // 'vieux-port', 'marais', etc.
  name: string         // 'Vieux-Port', 'Le Marais'
  city: string         // 'Marseille', 'Paris'
  description: string  // Description du quartier
  coords?: [number, number]  // [latitude, longitude]
}

export const neighborhoods: Record<string, Record<string, Neighborhood>> = {
  marseille: {
    'vieux-port': { ... },
    'calanques': { ... },
    'joliette': { ... },
    'borély': { ... },
    'frioul': { ... }
  },
  paris: { ... },
  nice: { ... },
  lyon: { ... },
  bordeaux: { ... }
}
```

#### Liens dans les données
```typescript
// accommodations.ts
export interface Accommodation {
  // ... autres champs
  neighborhoodId: string  // 'vieux-port'
  city: string            // 'Marseille'
}

// activities.ts
export interface Activity {
  // ... autres champs
  neighborhoodId: string  // 'vieux-port'
  city: string            // 'Marseille'
}
```

#### Helpers functions
```typescript
// Récupérer tous les quartiers d'une ville
getCityNeighborhoods('Marseille')
// → [{ id: 'vieux-port', name: 'Vieux-Port', ... }, ...]

// Récupérer un quartier spécifique
getNeighborhood('Marseille', 'vieux-port')
// → { id: 'vieux-port', name: 'Vieux-Port', ... }

// Juste le nom pour l'affichage
getNeighborhoodName('Marseille', 'vieux-port')
// → 'Vieux-Port'
```

### Flux de données géographiques

#### 1. Sélection de destination (Homepage)
```typescript
// GlobalFilters.tsx
const handleSearch = () => {
  localStorage.setItem('selectedDestination', destination)
  window.dispatchEvent(new CustomEvent('destinationUpdated', {
    detail: destination
  }))
}
```

#### 2. Écoute dans Activities section
```typescript
// Activities.tsx
useEffect(() => {
  const handleDestinationUpdate = (event: CustomEvent<string>) => {
    setSelectedDestination(event.detail)
    setSelectedNeighborhood('all') // Reset neighborhood filter
  }

  window.addEventListener('destinationUpdated', handleDestinationUpdate)

  // Charger depuis localStorage au montage
  const saved = localStorage.getItem('selectedDestination')
  if (saved) setSelectedDestination(saved)

  return () => {
    window.removeEventListener('destinationUpdated', handleDestinationUpdate)
  }
}, [])
```

#### 3. Filtrage par quartier
```typescript
// Afficher les chips de quartiers si ville sélectionnée
const cityNeighborhoods = selectedDestination
  ? getCityNeighborhoods(selectedDestination)
  : []

// Filtrer les activités
const filteredActivities = activities.filter(activity => {
  if (selectedDestination && activity.city !== selectedDestination) {
    return false
  }
  if (selectedNeighborhood !== 'all' && activity.neighborhoodId !== selectedNeighborhood) {
    return false
  }
  // ... autres filtres
  return true
})
```

#### 4. Nearby Activities (intelligence contextuelle)
```typescript
// NearbyActivities.tsx
const nearbyActivities = activities
  .filter(activity =>
    activity.neighborhoodId === accommodation.neighborhoodId &&
    activity.city === accommodation.city
  )
  .slice(0, maxItems)

// Fallback ville si 0 résultats dans le quartier
const sameCityActivities = nearbyActivities.length === 0
  ? activities.filter(activity => activity.city === accommodation.city)
  : []

// Badge conditionnel
{isNeighborhood && (
  <span className="badge">
    <span className="material-symbols-outlined">near_me</span>
    À 10min à pied
  </span>
)}
```

---

## 🔄 États et interactions

### États des cartes

#### Default
```css
shadow-lg
border border-outline-variant
```

#### Hover
```css
shadow-xl
transform: translateY(-4px)
img: scale(1.05)
```

#### Active/Pressed
```css
transform: scale(0.98)
```

### États des boutons

#### Default
```css
bg-primary text-on-primary
shadow-md
```

#### Hover
```css
shadow-lg
transform: scale(1.02)
```

#### Active
```css
transform: scale(0.98)
```

#### Disabled
```css
opacity-50
cursor-not-allowed
```

### États des inputs

#### Default
```css
bg-surface-container
border border-outline-variant
```

#### Focus
```css
border-primary
ring-2 ring-primary ring-opacity-20
```

#### Error
```css
border-error
text-error
```

### États des chips (filtres)

#### Default
```css
bg-surface-container
text-on-surface-variant
border border-outline-variant
```

#### Hover
```css
transform: scale(1.05)
bg-surface-container-high
```

#### Selected
```css
bg-primary
text-on-primary
border-0
```

---

## 📦 Gestion des images

### Structure des fichiers
```
/public/images/
  ├── hebergements/
  │   ├── 4_small/    (400x300 - cards)
  │   ├── 3_medium/   (768x576 - tablettes)
  │   ├── 2_large/    (1024x768 - desktop)
  │   └── 1_xlarge/   (1920x1440 - fullscreen)
  └── activites/
      ├── 4_small/    (400x300 - cards)
      └── ... (idem structure)
```

### Nomenclature
```
Format : {photographer}-{hash}-unsplash.jpg
Exemple : emile-guillemot-Bj_rcSC5XfE-unsplash.jpg
```

### Optimisation Next.js
```jsx
<Image
  src="/images/hebergements/4_small/emile-guillemot-Bj_rcSC5XfE-unsplash.jpg"
  alt="Auberge La Canebière - Vieux-Port"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  loading="lazy"  // Sauf hero images
  priority={false} // true uniquement pour images above-the-fold
/>
```

Next.js génère automatiquement les formats WebP et AVIF

---

## 🎯 Différenciateurs professionnels

### Ce qui fait de Reservia une "Golden Standard"

#### 1. Cohérence visuelle absolue
- ✅ Tous les aspect ratios à 4:3 (avant : mélange aléatoire)
- ✅ Tous les border-radius à 2xl/full (avant : lg/xl/2xl mixés)
- ✅ Gaps uniformes à 6 (24px) dans toutes les grilles
- ✅ Alt tags < 125 caractères et descriptifs

#### 2. UX contextuelle intelligente
- ✅ Système de quartiers géographiques
- ✅ Filtrage automatique par proximité
- ✅ Fallback logique (quartier → ville)
- ✅ Badges contextuels ("À 10min à pied")

#### 3. Excellence technique
- ✅ TypeScript strict mode
- ✅ Next.js 14 App Router avec SSG
- ✅ Zero erreurs de build
- ✅ Images optimisées avec srcsets
- ✅ Animations performantes (transform only)
- ✅ Accessibilité WCAG AA

#### 4. Architecture de données
- ✅ Taxonomie géographique structurée (7 villes, 20+ quartiers)
- ✅ Liens bidirectionnels hébergements ↔ activités
- ✅ State management hybride (localStorage + custom events)
- ✅ Helpers functions pour éviter la duplication

#### 5. Attention aux détails
- ✅ Staggered animations (délais échelonnés)
- ✅ Empty states avec messages explicites
- ✅ Loading states sur les images
- ✅ Validation avec feedback visuel (shake animation)
- ✅ Semantic HTML partout

---

## 📋 Checklist d'intégration Figma

### Avant de créer les maquettes

- [ ] Importer toutes les couleurs du JSON comme Color Styles
- [ ] Créer les Text Styles à partir de l'échelle typographique
- [ ] Définir les Effect Styles pour les shadows
- [ ] Créer des variables pour spacing (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- [ ] Créer des variables pour border-radius (16px, 24px, 32px, 9999px)

### Pendant la création

- [ ] Utiliser Auto Layout avec gap-6 (24px) pour les grilles
- [ ] Verrouiller l'aspect ratio 4:3 sur toutes les images
- [ ] Appliquer border-radius 32px sur cards, images, thumbnails
- [ ] Appliquer border-radius 9999px sur boutons, badges, chips
- [ ] Utiliser des composants Figma avec variants (default/hover/active)
- [ ] Nommer les frames selon la nomenclature : Screen / Section / Component

### Prototypage

- [ ] Lier les écrans selon les user flows du JSON
- [ ] Utiliser "Smart Animate" pour les transitions cards
- [ ] Créer des overlays pour les modals (ReservationConfirmation)
- [ ] Simuler les états hover avec variants
- [ ] Tester les breakpoints (375px / 768px / 1280px)

---

## 🚀 Pour aller plus loin

### Améliorations futures identifiées

1. **Favoris persistants** : Actuellement le toggle fonctionne mais ne persiste pas au refresh
2. **Galerie plein écran** : Modal lightbox pour explorer toutes les images
3. **Cartes géographiques** : Intégrer une map avec pins des quartiers
4. **Filtres avancés** : Gamme de prix, équipements spécifiques
5. **Comparateur** : Sélectionner plusieurs hébergements pour comparer
6. **Historique de recherche** : Suggestions basées sur précédentes recherches
7. **Partage social** : Boutons de partage sur pages détails
8. **Dark mode** : Variant sombre du design system
9. **Multi-langue** : Extension du système i18n existant
10. **Tests E2E** : Cypress pour valider les user flows

---

## 📞 Contact & Resources

- **Fichier JSON** : `figma-make-integration.json` (dans le repo)
- **Design Tokens** : Voir section `designTokens` du JSON
- **User Flows** : Voir section `userFlows` du JSON
- **Component Library** : Voir section `components` du JSON

**Material Design 3 Documentation** : https://m3.material.io/
**Tailwind CSS** : https://tailwindcss.com/docs
**Next.js Image Optimization** : https://nextjs.org/docs/app/building-your-application/optimizing/images

---

*Document généré lors de la refonte "Golden Standard" de Reservia - Janvier 2025*
