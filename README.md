# 🏨 Reservia M3 - Portfolio Moderne avec Material Design 3

> Portfolio professionnel transformé avec Next.js 14 et Material Design 3

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Material Design](https://img.shields.io/badge/Material_Design-3-blue?style=for-the-badge&logo=material-design)](https://m3.material.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 🎯 Vision du Projet

Refonte complète du portfolio Reservia d'OpenClassrooms en application web moderne, démontrant des compétences avancées en développement front-end avec les dernières technologies.

### Objectifs
- **Portfolio Impressionnant**: Vitrine professionnelle pour recruteurs et clients
- **Base Technique Évolutive**: Architecture prête pour l'e-commerce
- **Démonstration de Compétences**: Implementation Material Design 3 + Next.js

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build de production
npm run build

# Démarrage en production
npm run start
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application.

## 🏗️ Architecture Technique

### Stack Principal
- **Framework**: Next.js 14.2.15 avec App Router
- **Langage**: TypeScript strict
- **Design System**: Material Design 3 (Material Web Components)
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Animations**: Framer Motion
- **Déploiement**: Netlify (optimisé)

### Structure du Projet
```
src/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/
│   ├── ui/                # Composants Material Design 3
│   │   ├── Button.tsx     # Boutons M3 avec variants
│   │   ├── Card.tsx       # Cards Material avec sub-components
│   │   └── Navigation.tsx # Navigation responsive complète
│   └── providers/         # Providers React
│       └── ThemeProvider.tsx # Gestion thème clair/sombre
├── styles/
│   └── material-theme.css # Tokens Material Design 3
├── lib/
│   └── utils.ts          # Utilitaires et helpers
└── hooks/                # Hooks personnalisés
```

## 🎨 Système de Design

### Material Design 3 Integration

**Approche Hybride**: Material Web + Tailwind CSS
- **Material Web**: Composants officiels Google avec tokens M3 natifs
- **Tailwind CSS**: Utilitaires pour layouts et customisations rapides
- **CSS Custom Properties**: Bridge entre tokens M3 et classes Tailwind

### Palette de Couleurs
```css
/* Light Theme */
--md-sys-color-primary: #6750a4;        /* Actions principales */
--md-sys-color-secondary: #625b71;      /* Actions secondaires */
--md-sys-color-tertiary: #7e5260;       /* Accents */
--md-sys-color-surface: #fef7ff;        /* Backgrounds */

/* Dark Theme - Auto-switching */
--md-sys-color-primary: #cfbcff;
--md-sys-color-surface: #141218;
```

### Composants Implémentés

#### 🔘 Button Component
```tsx
<Button variant="filled" size="large" icon="search">
  Rechercher
</Button>
```
- **5 variants**: filled, outlined, text, elevated, tonal
- **3 tailles**: small, medium, large
- **Features**: loading states, icons, animations

#### 🎴 Card Component  
```tsx
<Card variant="elevated" interactive>
  <CardImage src="/hotel.jpg" aspectRatio="video" />
  <CardHeader title="Hôtel" description="Marseille" />
  <CardContent>...</CardContent>
  <CardFooter actions={...}>€89/nuit</CardFooter>
</Card>
```
- **3 variants**: elevated, filled, outlined
- **Sub-components**: Header, Content, Footer, Image
- **Features**: hover effects, responsive design

#### 🧭 Navigation Component
```tsx
<Navigation
  variant="top"          // top | side | bottom
  items={navigationItems}
  logo={<Logo />}
  actions={<ThemeToggle />}
/>
```
- **3 variants**: Top header, side drawer, bottom mobile
- **Features**: responsive, active states, badges, theme toggle

## 🌙 Gestion des Thèmes

### ThemeProvider Avancé
```tsx
const { theme, setTheme, resolvedTheme } = useTheme()

// Modes disponibles
setTheme('light')   // Thème clair
setTheme('dark')    // Thème sombre  
setTheme('system')  // Auto (suit les préférences système)
```

### Auto-Detection
- Détection automatique des préférences système
- Persistance localStorage
- Transitions fluides entre thèmes
- Support complet Material Design 3

## 📱 Responsive Design

### Mobile-First Approach
- **Breakpoints Tailwind**: 640px, 768px, 1024px, 1280px
- **Navigation Adaptive**: 
  - Mobile: Bottom navigation + drawer
  - Tablet: Collapsible header
  - Desktop: Full header navigation
- **Images Responsive**: Next.js Image avec optimisation automatique

## ⚡ Performance

### Optimisations Implémentées
- **Bundle Splitting**: Code splitting automatique Next.js
- **Image Optimization**: WebP/AVIF automatique, lazy loading
- **CSS Optimization**: PurgeCSS en production, CSS nesting
- **JavaScript**: Tree shaking Material Web components

### Métriques Cibles (Lighthouse)
- 🎯 **Performance**: > 95
- 🎯 **Accessibility**: > 95  
- 🎯 **Best Practices**: > 95
- 🎯 **SEO**: > 95

## 🛠️ Scripts Disponibles

```bash
# Développement
npm run dev              # Serveur de développement
npm run build           # Build de production
npm run start           # Serveur de production
npm run lint            # ESLint
npm run type-check      # Vérification TypeScript

# Utilitaires
npm run extract-tasks   # Extraction des tâches depuis les docs
```

## 📋 Plan de Migration

### ✅ Phase 1: Fondations (Terminé)
- [x] Setup Next.js 14 + TypeScript
- [x] Configuration Material Design 3  
- [x] Intégration Tailwind CSS + tokens M3
- [x] Composants de base (Button, Card, Navigation)
- [x] ThemeProvider et mode sombre

### 🚧 Phase 2: Migration des Composants (En cours)
- [ ] **TASK-005**: Migration du Header
- [ ] **TASK-006**: Migration de la Section Héro  
- [ ] **TASK-007**: Migration des Hébergements
- [ ] **TASK-008**: Migration des Activités

### 📈 Phase 3: Optimisations (À venir)
- [ ] **TASK-009**: Performance & SEO
- [ ] **TASK-010**: PWA Features
- [ ] **TASK-011**: Tests & Documentation

## 📚 Documentation

- 📖 [Plan de Migration](./docs/project-management/05-migration-plan.md)
- 🎨 [Guide Material Design 3](./docs/design-system/material-design-integration.md)
- 📋 [Roadmap Projet](./docs/project-management/00-roadmap.md)
- ✅ [Tasks & Sprint](./tasks/current-sprint.md)

## 🔗 Liens Utiles

- [Material Design 3](https://m3.material.io/) - Design system officiel
- [Material Web](https://github.com/material-components/material-web) - Composants web officiels
- [Next.js 14](https://nextjs.org/docs) - Documentation framework
- [Tailwind CSS](https://tailwindcss.com/docs) - Documentation CSS framework

## 👨‍💻 Développement

### Pré-requis
- Node.js 18.0.0+
- npm 9.0.0+

### Configuration IDE Recommandée
- **VS Code** avec extensions:
  - TypeScript Hero
  - Tailwind CSS IntelliSense  
  - ES7+ React/Redux/React-Native snippets
  - Auto Rename Tag

### Standards de Code
- **ESLint**: Configuration Next.js stricte
- **TypeScript**: Mode strict activé
- **Prettier**: Formatage automatique
- **Husky**: Pre-commit hooks

## 🚀 Déploiement

### Netlify (Recommandé)
```bash
npm run build    # Build optimisé
# Deploy automatique via Git
```

### Configuration
- **Framework**: Next.js
- **Node Version**: 18.x
- **Build Command**: `npm run build`
- **Publish Directory**: `.next`

## 📞 Support

Pour toute question ou suggestion d'amélioration:
- 📧 Email: votre.email@example.com
- 💼 LinkedIn: [Votre Profil](https://linkedin.com/in/votre-profil)
- 🌐 Portfolio: [Votre Site](https://votre-site.com)

---

**⭐ N'hésitez pas à star le projet si vous le trouvez utile !**

*Développé avec ❤️ et Material Design 3*
