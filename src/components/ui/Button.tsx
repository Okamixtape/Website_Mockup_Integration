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

  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-3xl font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-98';

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  }[size];

  const variantClasses = {
    filled: 'bg-primary text-on-primary hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 focus:ring-primary shadow-md active:shadow-md cursor-pointer',
    tonal: 'bg-secondary-container text-on-secondary-container hover:bg-secondary-container/90 hover:shadow-sm focus:ring-secondary cursor-pointer',
    outlined: 'border border-outline text-primary hover:bg-primary/8 hover:border-primary focus:ring-primary cursor-pointer',
    text: 'text-primary hover:bg-primary/8 focus:ring-primary cursor-pointer',
  };

  const disabledClasses = 'bg-gray-200 text-gray-500 cursor-not-allowed';

  const buttonClasses = cn(
    baseClasses,
    sizeClasses,
    (disabled || loading) ? disabledClasses : variantClasses[variant],
    {
      [getHoverClasses('scale')]: !disabled && !loading,
      [getTapClasses()]: !disabled && !loading,
    },
    className
  );

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
        <span className={cn(iconClasses, 'w-5 h-5 flex items-center justify-center')}>
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
