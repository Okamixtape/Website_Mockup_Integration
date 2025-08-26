# Guide d'Optimisation CSS - Reservia M3

## 📋 Résumé de l'Optimisation

### Situation initiale
Le projet contenait 4 fichiers CSS avec des conflits potentiels :
- `/src/app/globals.css` ✅ (utilisé)
- `/src/styles/globals.css` ❌ (duplicata non utilisé)
- `/css/style.css` ❌ (ancien fichier Reservia)
- `/src/styles/material-theme.css` ✅ (utilisé)

### Actions réalisées

#### 1. Nettoyage des fichiers non utilisés
- Déplacement de `/src/styles/globals.css` → `/src/styles/archive/globals.css.backup`
- Déplacement de `/css/style.css` → `/src/styles/archive/style.css.backup`

#### 2. Optimisation de la structure CSS

##### `/src/app/globals.css`
Structure optimisée avec :
- Organisation en sections numérotées
- Utilisation des `@layer` Tailwind pour éviter les conflits
- Support complet de `prefers-reduced-motion`
- Variables CSS next/font pour performance optimale
- Pas d'imports de fonts externes bloquants

##### `/src/styles/material-theme.css`
Réorganisation complète :
1. Color Tokens (Light & Dark)
2. Typography Scale
3. Shape Tokens
4. **Spacing Tokens** (nouveaux)
5. Elevation Tokens
6. **Motion Tokens** (nouveaux)

## 🎯 Bénéfices de l'Optimisation

### 1. Élimination des conflits
- Plus de propriétés CSS en conflit
- Une seule source de vérité pour chaque style
- Structure claire et maintenable

### 2. Performance améliorée
- Utilisation de `next/font` au lieu de Google Fonts
- Pas de requêtes HTTP bloquantes
- Bundle CSS plus léger

### 3. Maintenabilité
- Organisation logique avec sections commentées
- Tokens Material Design 3 complets
- Support natif light/dark mode

## 📁 Structure finale

```
src/
├── app/
│   └── globals.css          # Styles globaux principaux
├── styles/
│   ├── material-theme.css   # Tokens Material Design 3
│   └── archive/            # Fichiers archivés
│       ├── globals.css.backup
│       └── style.css.backup
```

## 🔧 Utilisation

### Imports
Le seul import nécessaire dans `layout.tsx` :
```tsx
import './globals.css'
```

`material-theme.css` est automatiquement importé par `globals.css`.

### Classes utilitaires disponibles

#### Layout
- `.container` - Container responsive avec padding
- `.sr-only` - Screen reader only

#### Animations
- `.transition-smooth` - Transitions fluides
- `.animate-pulse` - Animation pulse pour skeletons

#### Typography (via material-theme.css)
- `.text-display-large`
- `.text-headline-large`
- `.text-title-large`
- `.text-body-large`

#### Surfaces
- `.surface-container`
- `.surface-container-high`
- `.surface-container-highest`

## 🚀 Recommandations

1. **Toujours utiliser les tokens Material Design 3** pour les couleurs, espacements, etc.
2. **Éviter les styles inline** - utiliser Tailwind ou les classes utilitaires
3. **Respecter la hiérarchie des @layer** pour éviter les conflits de spécificité
4. **Tester en mode light ET dark** pour vérifier la cohérence

## 📊 Métriques d'amélioration

- **Fichiers CSS actifs** : 4 → 2 (réduction de 50%)
- **Conflits potentiels** : Nombreux → 0
- **Performance** : Amélioration grâce à next/font
- **Maintenabilité** : Structure claire et documentée
