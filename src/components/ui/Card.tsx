'use client'

import React, { forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { AnimatedBox } from './AnimatedBox'

export interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'elevated' | 'filled' | 'outlined'
  padding?: 'none' | 'small' | 'medium' | 'large'
  clickable?: boolean
  hover?: boolean
  onClick?: () => void
}

/**
 * Card Component - Optimisé avec animations CSS natives
 * Alternative performante à Framer Motion pour des performances optimales
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  className,
  variant = 'elevated',
  padding = 'medium',
  clickable = false,
  hover = true,
  onClick,
  ...props
}, ref) => {
  
  const cardClasses = cn(
    // Base styles
    'rounded-xl transition-all duration-200 ease-out',
    
    // Variant styles
    {
      'bg-surface shadow-elevation-1 hover:shadow-elevation-2': variant === 'elevated',
      'bg-surface-container': variant === 'filled',
      'bg-surface border border-outline-variant': variant === 'outlined',
    },
    
    // Padding variants
    {
      'p-0': padding === 'none',
      'p-3': padding === 'small',
      'p-6': padding === 'medium',
      'p-8': padding === 'large',
    },
    
    // Interactive states
    {
      'cursor-pointer': clickable,
      'hover:bg-surface-container-high': clickable && variant === 'elevated',
    },
    
    className
  )

  if (clickable || onClick) {
    return (
      <AnimatedBox
        ref={ref}
        className={cardClasses}
        hover={hover ? 'lift' : 'none'}
        tap={clickable}
        onClick={onClick}
        {...props}
      >
        {children}
      </AnimatedBox>
    )
  }

  return (
    <div
      ref={ref}
      className={cardClasses}
      {...props}
    >
      {children}
    </div>
  )
})

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
