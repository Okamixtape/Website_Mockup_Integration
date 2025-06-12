import { useState, useEffect } from 'react'

/**
 * Alternative légère à Framer Motion
 * Utilise les animations CSS natives pour des performances optimales
 */

export interface AnimationConfig {
  duration?: number
  delay?: number
  easing?: string
  fillMode?: 'forwards' | 'backwards' | 'both' | 'none'
}

/**
 * Hook pour gérer les animations d'entrée/sortie avec CSS
 */
export function useEntranceAnimation(
  config: AnimationConfig = {}
) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)

  const {
    duration = 300,
    delay = 0,
    easing = 'cubic-bezier(0.4, 0.0, 0.2, 1)', // Material Design easing
    fillMode = 'forwards'
  } = config

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setHasEntered(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const animationStyles = {
    transition: `all ${duration}ms ${easing}`,
    animationFillMode: fillMode,
  }

  const getClassNames = () => {
    return {
      base: `transition-all duration-${Math.round(duration/100)*100}`,
      entering: 'opacity-0 translate-y-4 scale-95',
      entered: 'opacity-100 translate-y-0 scale-100',
      visible: isVisible
    }
  }

  return {
    isVisible,
    hasEntered,
    animationStyles,
    getClassNames
  }
}

/**
 * Hook pour les animations au hover
 */
export function useHoverAnimation() {
  const [isHovered, setIsHovered] = useState(false)

  return {
    isHovered,
    handlers: {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    },
    getHoverClasses: (hoverEffect: 'scale' | 'lift' | 'glow' = 'scale') => {
      const baseClasses = 'transition-all duration-200 ease-out'
      
      switch (hoverEffect) {
        case 'scale':
          return `${baseClasses} ${isHovered ? 'scale-102' : 'scale-100'}`
        case 'lift':
          return `${baseClasses} ${isHovered ? 'translate-y-[-2px] shadow-lg' : 'translate-y-0'}`
        case 'glow':
          return `${baseClasses} ${isHovered ? 'shadow-md shadow-primary/20' : 'shadow-sm'}`
        default:
          return baseClasses
      }
    }
  }
}

/**
 * Hook pour les animations au clic/tap
 */
export function useTapAnimation() {
  const [isTapped, setIsTapped] = useState(false)

  const handleTap = () => {
    setIsTapped(true)
    setTimeout(() => setIsTapped(false), 150)
  }

  return {
    isTapped,
    handlers: {
      onMouseDown: handleTap,
      onTouchStart: handleTap,
    },
    getTapClasses: () => {
      return `transition-transform duration-150 ease-out ${
        isTapped ? 'scale-98' : 'scale-100'
      }`
    }
  }
}

/**
 * Hook pour l'intersection observer (lazy loading)
 */
export function useInView(options: IntersectionObserverInit = {}) {
  const [inView, setInView] = useState(false)
  const [ref, setRef] = useState<Element | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref) // Stop observing once in view
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref, options])

  return { inView, ref: setRef }
}

/**
 * Classes CSS prédéfinies pour animations communes
 */
export const animationClasses = {
  // Animations d'entrée
  fadeIn: 'animate-in fade-in duration-300',
  slideInUp: 'animate-in slide-in-from-bottom-4 duration-300',
  slideInDown: 'animate-in slide-in-from-top-4 duration-300',
  slideInLeft: 'animate-in slide-in-from-left-4 duration-300',
  slideInRight: 'animate-in slide-in-from-right-4 duration-300',
  
  // Animations de sortie
  fadeOut: 'animate-out fade-out duration-200',
  slideOutUp: 'animate-out slide-out-to-top-4 duration-200',
  slideOutDown: 'animate-out slide-out-to-bottom-4 duration-200',
  
  // Effets hover
  hover: {
    scale: 'hover:scale-102 transition-transform duration-200',
    lift: 'hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200',
    glow: 'hover:shadow-md hover:shadow-primary/20 transition-shadow duration-200'
  },
  
  // Effets tap/active
  tap: 'active:scale-98 transition-transform duration-150',
  
  // Loading states
  pulse: 'animate-pulse',
  spin: 'animate-spin',
  bounce: 'animate-bounce'
} as const
