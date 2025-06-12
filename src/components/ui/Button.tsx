'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { useHoverAnimation, useTapAnimation } from '@/hooks/useAnimations'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'outlined' | 'filled' | 'tonal'
  size?: 'small' | 'medium' | 'large'
  icon?: string
  iconPosition?: 'left' | 'right'
  loading?: boolean
  children?: React.ReactNode
}

/**
 * Button Component - Optimisé avec animations CSS natives
 * Alternative performante à Framer Motion pour un meilleur LCP/TTI
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'filled',
  size = 'medium',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled,
  className,
  children,
  ...props
}, ref) => {
  // Hooks d'animation légères
  const { handlers: hoverHandlers, getHoverClasses } = useHoverAnimation()
  const { handlers: tapHandlers, getTapClasses } = useTapAnimation()

  const buttonClasses = cn(
    // Base styles
    'inline-flex items-center justify-center gap-2 rounded-3xl font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-98',
    
    // Size variants
    {
      'px-4 py-2 text-sm': size === 'small',
      'px-6 py-3 text-base': size === 'medium', 
      'px-8 py-4 text-lg': size === 'large',
    },
    
    // Variant styles
    {
      'bg-primary text-on-primary hover:bg-primary/90 hover:shadow-md focus:ring-primary shadow-sm': variant === 'filled',
      'bg-secondary-container text-on-secondary-container hover:bg-secondary-container/90 hover:shadow-sm focus:ring-secondary': variant === 'tonal',
      'border border-outline text-primary hover:bg-primary/8 hover:border-primary focus:ring-primary': variant === 'outlined',
      'text-primary hover:bg-primary/8 focus:ring-primary': variant === 'text',
    },
    
    // States
    {
      'opacity-50 cursor-not-allowed': disabled || loading,
      'cursor-pointer': !disabled && !loading,
    },
    
    // Animation classes
    !disabled && !loading && getHoverClasses('scale'),
    !disabled && !loading && getTapClasses(),
    
    className
  )

  const iconClasses = cn(
    'material-symbols-outlined transition-transform duration-150',
    {
      'text-sm': size === 'small',
      'text-base': size === 'medium',
      'text-lg': size === 'large',
    },
    loading && 'animate-spin'
  )

  const iconElement = icon && (
    <span className={iconClasses}>
      {loading ? 'progress_activity' : icon}
    </span>
  )

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={buttonClasses}
      {...(!disabled && !loading ? { ...hoverHandlers, ...tapHandlers } : {})}
      {...props}
    >
      {iconPosition === 'left' && iconElement}
      {children && (
        <span className={loading ? 'opacity-75' : ''}>
          {children}
        </span>
      )}
      {iconPosition === 'right' && iconElement}
    </button>
  )
})

Button.displayName = 'Button'
