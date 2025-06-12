import { useState, useEffect } from 'react'

/**
 * Hook pour détecter si l'utilisateur préfère les animations réduites
 * Optimise les performances en désactivant les animations complexes
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    // Initial check
    setPrefersReducedMotion(mediaQuery.matches)
    
    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return prefersReducedMotion
}

/**
 * Variants d'animation optimisées selon prefers-reduced-motion
 */
export const createOptimizedVariants = (prefersReducedMotion: boolean) => {
  if (prefersReducedMotion) {
    // Animations minimalistes pour performance
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.1 }
    }
  }
  
  // Animations normales seulement si l'utilisateur les accepte
  return {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1] // Material Design easing
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  }
}
