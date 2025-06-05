'use client'

import React, { forwardRef } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MotionProps {
  variant?: 'elevated' | 'filled' | 'outlined'
  interactive?: boolean
  padding?: 'none' | 'small' | 'medium' | 'large'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    variant = 'filled',
    interactive = false,
    padding = 'medium',
    children,
    ...props
  }, ref) => {
    const baseClasses = [
      'rounded-xl overflow-hidden',
      'transition-all duration-300 ease-out',
      
      // Interactive states
      interactive && [
        'cursor-pointer',
        'hover:scale-[1.02]',
        'active:scale-[0.98]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      ],
      
      // Padding variants
      padding === 'none' && 'p-0',
      padding === 'small' && 'p-4',
      padding === 'medium' && 'p-6',
      padding === 'large' && 'p-8',
    ]

    const variantClasses = {
      elevated: [
        'bg-surface-container-low shadow-elevation-1',
        interactive && 'hover:shadow-elevation-2 hover:bg-surface-container',
      ],
      filled: [
        'bg-surface-container-highest',
        interactive && 'hover:bg-surface-container-high',
      ],
      outlined: [
        'bg-surface border border-outline-variant',
        interactive && 'hover:bg-surface-container-low hover:border-outline',
      ],
    }

    const cardVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.4,
          ease: 'easeOut'
        }
      },
      hover: interactive ? {
        y: -4,
        transition: {
          duration: 0.2,
          ease: 'easeOut'
        }
      } : {},
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          className
        )}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

// Card Header Component
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  action?: React.ReactNode
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, title, description, action, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-start justify-between gap-4 pb-4', className)}
      {...props}
    >
      <div className="flex-1 space-y-1">
        {title && (
          <h3 className="text-title-large font-medium leading-none tracking-tight">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm text-on-surface/70">
            {description}
          </p>
        )}
        {children}
      </div>
      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  )
)

CardHeader.displayName = 'CardHeader'

// Card Content Component
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  )
)

CardContent.displayName = 'CardContent'

// Card Footer Component
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  actions?: React.ReactNode
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, actions, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center justify-between pt-4', className)}
      {...props}
    >
      <div className="flex-1">
        {children}
      </div>
      {actions && (
        <div className="flex gap-2 ml-4">
          {actions}
        </div>
      )}
    </div>
  )
)

CardFooter.displayName = 'CardFooter'

// Card Image Component
export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'square' | 'video' | 'wide'
}

const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, aspectRatio = 'video', alt, ...props }, ref) => {
    const aspectClasses = {
      square: 'aspect-square',
      video: 'aspect-video',
      wide: 'aspect-[21/9]',
    }

    return (
      <div className={cn('overflow-hidden', aspectClasses[aspectRatio])}>
        <img
          ref={ref}
          className={cn(
            'h-full w-full object-cover transition-transform duration-300 hover:scale-105',
            className
          )}
          alt={alt}
          {...props}
        />
      </div>
    )
  }
)

CardImage.displayName = 'CardImage'

export { Card, CardHeader, CardContent, CardFooter, CardImage }
