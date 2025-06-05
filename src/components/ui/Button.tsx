'use client'

import React, { forwardRef } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    MotionProps {
  variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal'
  size?: 'small' | 'medium' | 'large'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'filled',
    size = 'medium',
    icon,
    iconPosition = 'left',
    loading = false,
    fullWidth = false,
    children,
    disabled,
    ...props
  }, ref) => {
    const baseClasses = [
      // Base styling
      'inline-flex items-center justify-center gap-2',
      'font-label font-medium',
      'transition-all duration-200 ease-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'relative overflow-hidden',
      
      // Full width
      fullWidth && 'w-full',
      
      // Size variants
      size === 'small' && 'h-10 px-4 text-sm rounded-full',
      size === 'medium' && 'h-12 px-6 text-sm rounded-full',
      size === 'large' && 'h-14 px-8 text-base rounded-full',
    ]

    const variantClasses = {
      filled: [
        'bg-primary text-on-primary',
        'hover:bg-primary/90 hover:shadow-elevation-1',
        'active:bg-primary/80',
        'focus-visible:ring-primary',
      ],
      outlined: [
        'border border-outline text-primary bg-transparent',
        'hover:bg-primary/8 hover:border-primary',
        'active:bg-primary/12',
        'focus-visible:ring-primary',
      ],
      text: [
        'text-primary bg-transparent',
        'hover:bg-primary/8',
        'active:bg-primary/12',
        'focus-visible:ring-primary',
      ],
      elevated: [
        'bg-surface-container-low text-primary shadow-elevation-1',
        'hover:bg-surface-container hover:shadow-elevation-2',
        'active:bg-surface-container-high',
        'focus-visible:ring-primary',
      ],
      tonal: [
        'bg-secondary-container text-on-secondary-container',
        'hover:bg-secondary-container/90 hover:shadow-elevation-1',
        'active:bg-secondary-container/80',
        'focus-visible:ring-secondary',
      ],
    }

    const rippleVariants = {
      initial: { scale: 0, opacity: 0.5 },
      animate: { scale: 4, opacity: 0 },
    }

    const loadingVariants = {
      initial: { rotate: 0 },
      animate: { rotate: 360 },
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          className
        )}
        disabled={disabled || loading}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        {...props}
      >
        {/* Ripple Effect */}
        <motion.span
          className="absolute inset-0 rounded-full"
          variants={rippleVariants}
          initial="initial"
          whileTap="animate"
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
        
        {/* Content */}
        {loading ? (
          <motion.span
            className="material-symbols-outlined"
            variants={loadingVariants}
            animate="animate"
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            progress_activity
          </motion.span>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="material-symbols-outlined text-inherit">
                {icon}
              </span>
            )}
            
            {children && (
              <span className="relative z-10">
                {children}
              </span>
            )}
            
            {icon && iconPosition === 'right' && (
              <span className="material-symbols-outlined text-inherit">
                {icon}
              </span>
            )}
          </>
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
