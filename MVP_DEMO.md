# Démo MVP - Stratégie "Keep vs. Discard"

Ce document définit le périmètre de la démo pour le MVP de Reservia, en se concentrant sur un ensemble de fonctionnalités cohérentes et fonctionnelles. L'objectif est de présenter un produit stable et de mettre en évidence le potentiel du design system, tout en reportant les fonctionnalités plus complexes.

---

## ✅ Keep (Fonctionnalités à présenter)

### 1. **Parcours de Recherche Simplifié (MVP Core)**
   - **Formulaire de recherche unique :** Un seul champ "Destination" qui est le point d'entrée principal.
   - **Bouton de recherche dynamique :** Le bouton est désactivé jusqu'à ce qu'une destination soit saisie, avec un style visuel clair pour les états actif/inactif.
   - **Redirection par défilement :** Le clic sur "Rechercher" fait défiler la page en douceur vers la section des résultats, créant une expérience fluide sur une seule page.

### 2. **Design System & Composants UI robustes**
   - **Composant `Button` :** Démontrer les différents états (normal, survol, focus, désactivé) et sa réutilisabilité.
   - **Composant `AccommodationCard` :** Mettre en avant sa structure claire avec les informations essentielles (image, titre, prix, note, badge "Populaire").
   - **Thème Material Design 3 :** Expliquer que les couleurs, la typographie et les espacements sont gérés de manière centralisée via des variables CSS, garantissant une cohérence globale.

### 3. **Affichage des Résultats**
   - **Grille d'hébergements :** Présentation claire et visuellement attrayante des résultats.
   - **Filtres de base :** Les filtres "Tous", "Hôtels", "Appartements" sont présents pour montrer l'architecture prévue, même si la logique de filtrage n'est pas implémentée.

---

## ❌ Discard (Fonctionnalités à ne pas aborder)

### 1. **Logique de Recherche & Filtrage Avancée**
   - **Pas de recherche réelle :** Ne pas mentionner que la recherche n'appelle pas de véritable API. La liste affichée est statique.
   - **Filtres non fonctionnels :** Ne pas cliquer sur les filtres ("Économique", "Familial", etc.) ni sur les options de tri. Expliquer qu'il s'agit de l'étape suivante si la question est posée.

### 2. **Section "Activités"**
   - **Placeholder visuel :** Présenter la section "Activités" comme un exemple de la scalabilité du design, mais préciser que la fonctionnalité n'est pas développée pour ce MVP.

### 3. **Interactions complexes sur les cartes**
   - **Bouton "Favoris" (cœur) :** Ne pas cliquer dessus. C'est un élément d'UI pour la vision à long terme.
   - **Interaction au survol :** L'animation au survol a été simplifiée pour la stabilité. Ne pas attirer l'attention dessus.

### 4. **Navigation complète**
   - **Liens "Hébergements" & "Activités" :** Ces liens ne sont pas conçus pour fonctionner dans ce contexte de page unique. Ne pas les utiliser.
   - **"S'inscrire" & changement de langue :** Ces fonctionnalités sont des placeholders pour le design complet et ne sont pas actives.

En suivant cette ligne directrice, la démo sera ciblée, professionnelle et mettra en valeur la qualité du travail réalisé sur l'interface et l'expérience utilisateur de base.