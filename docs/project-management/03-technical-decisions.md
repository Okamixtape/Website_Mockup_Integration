# Décisions Techniques - Reservia M3

## 🏗️ Architecture

### Stack finale retenue
- **Framework** : Next.js 14.2.x (App Router)
- **Design System** : Material Design 3 via Material Web
- **Styling** : Tailwind CSS + Material Design Tokens
- **TypeScript** : 5.4.x
- **Animations** : Framer Motion + Material Motion

### Pourquoi Material Web vs Material UI ?
✅ **Pour Material Web :**
- 100% Material Design 3 officiel
- Performances optimales
- Évolutivité assurée

❌ **Contre Material UI :**
- Encore en Material Design 2
- Plus lourd
- Transition M3 incertaine

## 📦 Packages clés
```json
{
  "dependencies": {
    "next": "14.2.x",
    "@material/web": "latest",
    "tailwindcss": "3.4.x",
    "framer-motion": "11.x",
    "@types/react": "18.x"
  }
}

