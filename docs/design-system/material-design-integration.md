# Material Design 3 Integration Guide

## 🎨 Vue d'ensemble

Cette documentation détaille l'intégration complète de Material Design 3 dans le projet Reservia, incluant la configuration, les composants et les bonnes pratiques.

## 🔧 Configuration Technique

### Architecture Choisie: Material Web + Tailwind CSS

**Pourquoi cette approche hybride ?**
- **Material Web**: Composants officiels Google avec tokens M3 natifs
- **Tailwind CSS**: Utilitaires pour layouts et customisations rapides
- **CSS Custom Properties**: Bridge entre M3 tokens et Tailwind

### Structure des Tokens

```css
/* Tokens de couleur M3 */
:root {
  --md-sys-color-primary: #6750a4;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #e9ddff;
  --md-sys-color-on-primary-container: #22005d;
  /* ... */
}

/* Intégration Tailwind */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--md-sys-color-primary)',
          50: 'var(--md-sys-color-primary-container)',
        }
      }
    }
  }
}
```

## 🎯 Système de Couleurs

### Palette Principale
| Role | Light | Dark | Usage |
|------|-------|------|-------|
| Primary | `#6750a4` | `#cfbcff` | Actions principales, CTA |
| Secondary | `#625b71` | `#cbc2db` | Actions secondaires |
| Tertiary | `#7e5260` | `#efb8c8` | Accents, highlights |
| Error | `#ba1a1a` | `#ffb4ab` | Erreurs, états critiques |

### Surfaces et Containers
```css
/* Hiérarchie des surfaces */
.surface { background: var(--md-sys-color-surface); }
.surface-container { background: var(--md-sys-color-surface-container); }
.surface-container-high { background: var(--md-sys-color-surface-container-high); }
```

## 📝 Typographie

### Échelle Typographique M3
```css
/* Display */
.text-display-large {
  font-size: 57px;
  line-height: 64px;
  font-weight: 400;
}

/* Headlines */
.text-headline-large {
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
}

/* Titles */
.text-title-large {
  font-size: 22px;
  line-height: 28px;
  font-weight: 400;
}

/* Body */
.text-body-large {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}
```

### Usage Recommandé
- **Display**: Titres principaux de page
- **Headline**: Titres de section
- **Title**: Titres de composants (cards, modals)
- **Body**: Contenu principal
- **Label**: Boutons, liens, labels

## 🔲 Système d'Élévation

### Niveaux d'Élévation
```css
--md-sys-elevation-1: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
--md-sys-elevation-2: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
/* ... jusqu'à elevation-5 */
```

### Usage par Composant
- **Elevation 1**: Cards au repos, chips
- **Elevation 2**: Cards au hover, FAB au repos
- **Elevation 3**: FAB au hover, menus
- **Elevation 4**: Navigation drawer, modal backdrop
- **Elevation 5**: Dialogs, modals

## 🔄 Système de Formes

### Border Radius Scale
```css
--md-sys-shape-corner-none: 0px;
--md-sys-shape-corner-extra-small: 4px;  /* Chips, small buttons */
--md-sys-shape-corner-small: 8px;        /* Cards, input fields */
--md-sys-shape-corner-medium: 12px;      /* Dialogs, large cards */
--md-sys-shape-corner-large: 16px;       /* Sheets, navigation */
--md-sys-shape-corner-extra-large: 28px; /* FAB, special components */
```

## 🎭 Composants Implémentés

### 1. Button Component
```tsx
<Button variant="filled" size="large" icon="search">
  Rechercher
</Button>
```

**Variants Disponibles:**
- `filled`: Bouton principal avec background coloré
- `outlined`: Bouton avec bordure, background transparent
- `text`: Bouton texte sans background
- `elevated`: Bouton avec élévation et background neutre
- `tonal`: Bouton avec background container coloré

### 2. Card Component
```tsx
<Card variant="elevated" interactive>
  <CardImage src="/hotel.jpg" alt="Hôtel" />
  <CardHeader title="Hôtel du Soleil" description="Marseille" />
  <CardContent>
    <p>Description de l'hébergement...</p>
  </CardContent>
  <CardFooter actions={<Button>Réserver</Button>}>
    <span>€89/nuit</span>
  </CardFooter>
</Card>
```

### 3. Navigation Component
```tsx
<Navigation
  variant="top"
  items={navigationItems}
  logo={<Logo />}
  actions={<ThemeToggle />}
/>
```

## 🌙 Gestion des Thèmes

### ThemeProvider Implementation
```tsx
const { theme, setTheme, resolvedTheme } = useTheme()

// Themes disponibles: 'light' | 'dark' | 'system'
setTheme('dark')
```

### Auto-detection Système
```css
[data-theme="dark"] {
  --md-sys-color-primary: #cfbcff;
  --md-sys-color-surface: #141218;
  /* ... */
}
```

## ✨ Animations et Motion

### Framer Motion Integration
```tsx
// Animations pré-configurées
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Contenu animé
</motion.div>
```

### Classes Utilitaires
```css
.animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
.animate-scale-in { animation: scaleIn 0.2s ease-out; }
```

## 📱 Responsive Design

### Breakpoints Tailwind
```css
/* Mobile first approach */
.container {
  @apply px-4;
}

@media (min-width: 768px) {
  .container {
    @apply px-6;
  }
}

@media (min-width: 1024px) {
  .container {
    @apply px-8;
  }
}
```

### Navigation Adaptative
- **Desktop**: Navigation horizontale dans le header
- **Tablet**: Navigation collapside avec menu burger
- **Mobile**: Bottom navigation + drawer menu

## 🔧 Outils de Développement

### Utilities Functions
```typescript
// Classe management
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Theme detection
const isDark = resolvedTheme === 'dark'
```

### Debugging Tools
```css
/* Debug tokens */
.debug-tokens {
  --debug-primary: var(--md-sys-color-primary);
  background: var(--debug-primary);
}
```

## 📈 Performance

### Bundle Size Optimization
- Tree shaking automatique des composants Material Web
- Code splitting par route Next.js
- Lazy loading des composants non-critiques

### Image Optimization
```tsx
import Image from 'next/image'

<Image
  src="/hotel.jpg"
  alt="Hôtel"
  width={400}
  height={300}
  priority={index < 3} // LCP optimization
  placeholder="blur"
/>
```

## ✅ Checklist d'Intégration

### Configuration ✅
- [x] Material Design 3 tokens configurés
- [x] Tailwind CSS intégré avec tokens M3
- [x] ThemeProvider fonctionnel
- [x] Responsive breakpoints définis

### Composants ✅
- [x] Button avec toutes les variants
- [x] Card avec sous-composants complets
- [x] Navigation responsive (top/side/bottom)
- [x] Theme toggle automatique

### À Compléter 🚧
- [ ] Input fields et formulaires
- [ ] Modal et dialog system
- [ ] Toast notifications
- [ ] Loading states et skeletons
- [ ] Data tables
- [ ] Charts et graphiques

## 🚀 Prochaines Étapes

1. **Tests des Composants**
   - Unit tests avec Jest + Testing Library
   - Visual regression tests avec Chromatic
   - Accessibility tests avec axe-core

2. **Documentation Interactive**
   - Setup Storybook avec tous les composants
   - Documentation des props et variants
   - Playground interactif

3. **Optimisations Avancées**
   - Dynamic imports pour les composants lourds
   - CSS-in-JS migration si nécessaire
   - Performance monitoring avec Web Vitals
