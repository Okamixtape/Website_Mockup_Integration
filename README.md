# Reservia M3 - Portfolio Technique

<div align="center">
  <img src="public/images/logo.png" alt="Reservia Logo" width="200"/>
  
  ### 🏨 Plateforme de Réservation d'Hébergements
  **Next.js 14 • TypeScript • Material Design 3 • Framer Motion**
  
  [![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen)](https://web.dev/measure/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)](https://www.typescriptlang.org/)
  [![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
</div>

## 🎯 Vue d'ensemble

Reservia M3 est un **portfolio technique démonstratif** présentant une interface moderne de réservation d'hébergements. Ce projet met en avant l'excellence technique et les bonnes pratiques de développement frontend.

### ✨ Points Forts

- **Performance exceptionnelle** : Lighthouse 100/100 en production
- **Design System complet** : Material Design 3 intégré
- **Animations fluides** : Framer Motion pour une UX premium
- **Architecture scalable** : Composants modulaires et réutilisables
- **TypeScript strict** : Code robuste et maintenable

## 🚀 Démo Live

[**Voir la démo en ligne →**](https://reservia-m3.vercel.app)

## 📸 Screenshots

<div align="center">
  <img src="docs/images/homepage.png" alt="Homepage" width="800"/>
  <br/><br/>
  <img src="docs/images/detail-page.png" alt="Detail Page" width="800"/>
  <br/><br/>
  <img src="docs/images/reservation-modal.png" alt="Reservation Modal" width="400"/>
</div>

## 🛠 Stack Technique

### Frontend
- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript (strict mode)
- **Styling** : Tailwind CSS + Material Design 3
- **Animations** : Framer Motion
- **Images** : Next/Image avec lazy loading

### Architecture
- **Structure** : Feature-based organization
- **State** : React hooks (pas de state global inutile)
- **Routing** : Dynamic routes avec SSG
- **Performance** : Code splitting automatique

### Outils
- **Linting** : ESLint + Prettier
- **Testing** : Jest + React Testing Library (prévu)
- **CI/CD** : GitHub Actions + Vercel
- **Documentation** : Storybook (prévu)

## 🌟 Features Portfolio

### 1. Page d'accueil
- Hero section avec recherche
- Filtres avancés (type, prix, tri)
- Grid responsive avec animations
- Lazy loading des images

### 2. Page détail hébergement
- Galerie d'images interactive
- Informations complètes
- Widget de réservation sticky
- Animations orchestrées

### 3. Système de réservation
- Sélection de dates intuitive
- Calcul dynamique du prix
- Modal de confirmation animée
- Feedback utilisateur (shake animation)

### 4. Design System
- Tokens Material Design 3
- Composants réutilisables
- Thème clair/sombre (prévu)
- Accessibilité WCAG AA

## 📊 Performances

```
Lighthouse Production:
├── Performance: 100/100
├── Accessibility: 91/100
├── Best Practices: 96/100
└── SEO: 100/100

Bundle Size:
├── First Load JS: 108 kB
├── Route /: 20.8 kB
└── FCP: 0.3s
```

## 🏃‍♂️ Installation

```bash
# Cloner le repo
git clone https://github.com/[username]/reservia-m3.git
cd reservia-m3

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build
npm start
```

## 📁 Structure du Projet

```
src/
├── app/                    # Routes Next.js
│   ├── page.tsx           # Homepage
│   ├── accommodation/     # Pages détail
│   └── layout.tsx         # Layout principal
├── components/
│   ├── ui/               # Composants UI
│   └── layout/           # Composants layout
├── data/                 # Données mock
├── lib/                  # Utilities
└── styles/              # Styles globaux

docs/
├── features/            # Documentation features
├── project-management/  # Gestion projet
└── design-system/       # Guidelines design
```

## 🎨 Design Patterns

### Composants
- **Atomic Design** : Séparation claire des responsabilités
- **Composition** : Composants flexibles et composables
- **Props strictes** : TypeScript interfaces pour tout

### Performance
- **Static Generation** : Pages pré-rendues
- **Image Optimization** : Next/Image automatique
- **Code Splitting** : Bundles optimisés
- **Lazy Loading** : Chargement à la demande

### Code Quality
```typescript
// Exemple : Typage strict
interface AccommodationProps {
  accommodation: Accommodation
  onSelect?: (id: number) => void
  className?: string
}

// Exemple : Composant modulaire
export function AccommodationCard({ 
  accommodation, 
  onSelect,
  className 
}: AccommodationProps) {
  // Logic here
}
```

## 📈 Roadmap

### Phase actuelle : Portfolio (Juin 2025)
- [x] Interface complète
- [x] Système de réservation démo
- [x] Documentation technique
- [ ] Tests unitaires
- [ ] Storybook
- [ ] Case study complet

### Évolution possible : MVP Produit
- [ ] Backend API (Node.js/Prisma)
- [ ] Authentification (NextAuth)
- [ ] Paiement (Stripe)
- [ ] Multi-langues complet
- [ ] PWA capabilities

## 🤝 Contribution

Ce projet est un portfolio personnel, mais les suggestions sont bienvenues !

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 License

MIT License - voir [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**[Votre Nom]**
- Portfolio : [votresite.com](https://votresite.com)
- LinkedIn : [linkedin.com/in/votrenom](https://linkedin.com/in/votrenom)
- GitHub : [@votregithub](https://github.com/votregithub)

---

<div align="center">
  Fait avec ❤️ et beaucoup de ☕
  <br/>
  <strong>Ce projet est un portfolio technique démonstratif</strong>
</div>
