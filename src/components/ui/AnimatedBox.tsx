'use client'

import { forwardRef, ReactNode, ElementType } from 'react'
import { useEntranceAnimation, useHoverAnimation, useTapAnimation, useInView } from '@/hooks/useAnimations'
import { cn } from '@/lib/utils'

interface AnimatedBoxProps {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight'
  hover?: 'scale' | 'lift' | 'glow' | 'none'
  tap?: boolean
  lazy?: boolean
  onClick?: (event: React.MouseEvent) => void
}

/**
 * Composant d'animation léger - Alternative performante à motion.div
 * Utilise CSS transitions natives pour des performances optimales
 */
export const AnimatedBox = forwardRef<HTMLElement, AnimatedBoxProps>(({
    as: Component = 'div',
  children,
  className,
  delay = 0,
  animation = 'fadeIn',
  hover = 'none',
  tap = false,
  lazy = false,
  onClick,
  ...props
}, ref) => {
  // Hooks d'animation
  const { isVisible } = useEntranceAnimation({ delay })
  const { handlers: hoverHandlers, getHoverClasses } = useHoverAnimation()
  const { handlers: tapHandlers, getTapClasses } = useTapAnimation()
  const { inView, ref: inViewRef } = useInView()
  
  // Determine si l'animation doit se déclencher
  const shouldAnimate = lazy ? inView : isVisible

  // Classes d'animation selon le type
  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-300 ease-out'
    
    if (!shouldAnimate) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClasses} opacity-0`
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-4`
        case 'slideDown':
          return `${baseClasses} opacity-0 translate-y-[-1rem]`
        case 'slideLeft':
          return `${baseClasses} opacity-0 translate-x-4`
        case 'slideRight':
          return `${baseClasses} opacity-0 translate-x-[-1rem]`
        default:
          return `${baseClasses} opacity-0`
      }
    }
    
    // État animé (visible)
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0`
  }

  const combinedClasses = cn(
    getAnimationClasses(),
    hover !== 'none' && getHoverClasses(hover),
    tap && getTapClasses(),
    className
  )

  const combinedHandlers = {
    ...(hover !== 'none' && hoverHandlers),
    ...(tap && tapHandlers),
    onClick
  }

  return (
    <Component
      ref={(el: HTMLElement) => {
        if (typeof ref === 'function') ref(el)
        else if (ref) ref.current = el
        if (lazy) inViewRef(el)
      }}
      className={combinedClasses}
      {...combinedHandlers}
      {...props}
    >
      {children}
    </Component>
  )
})

AnimatedBox.displayName = 'AnimatedBox'

/**
 * Composants spécialisés pour des cas d'usage courants
 */

// Card animée
export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedBoxProps>(
  (props, ref) => (
    <AnimatedBox
      ref={ref}
      animation="slideUp"
      hover="lift"
      tap
      {...props}
    />
  )
)
AnimatedCard.displayName = 'AnimatedCard'

// Bouton animé
export const AnimatedButton = forwardRef<HTMLDivElement, AnimatedBoxProps>(
  (props, ref) => (
    <AnimatedBox
      ref={ref}
      animation="fadeIn"
      hover="scale"
      tap
      {...props}
    />
  )
)
AnimatedButton.displayName = 'AnimatedButton'

// Section lazy-loaded
export const LazySection = forwardRef<HTMLDivElement, AnimatedBoxProps>(
  (props, ref) => (
    <AnimatedBox
      ref={ref}
      animation="slideUp"
      lazy
      {...props}
    />
  )
)
LazySection.displayName = 'LazySection'
