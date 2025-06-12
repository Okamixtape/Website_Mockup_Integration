import { Inter } from 'next/font/google'

/**
 * Configuration des polices optimisée pour les performances
 * Utilise next/font pour un chargement optimal et le cache automatique
 */

// Police principale Inter avec optimisations
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Améliore FCP en affichant une police de fallback
  preload: true,
  variable: '--font-inter',
  // Optimisation : charge seulement les poids nécessaires
  weight: ['400', '500', '600', '700'],
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'sans-serif'
  ],
})

// Import direct CSS pour Material Symbols (plus simple et efficace)
// Note: next/font ne supporte pas encore Material Symbols directement
export const materialSymbolsCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
  
  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
    
    /* Variantes de taille */
    &.text-sm { font-size: 18px; }
    &.text-base { font-size: 24px; }
    &.text-lg { font-size: 32px; }
    &.text-xl { font-size: 40px; }
    
    /* Support du thème sombre */
    @media (prefers-color-scheme: dark) {
      -webkit-font-smoothing: antialiased;
    }
  }
`;
