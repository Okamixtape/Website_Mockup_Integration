'use client'

import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  width?: string | number
  height?: string | number
  variant?: 'text' | 'rectangular' | 'circular'
  animation?: boolean
}

export function Skeleton({
  className,
  width,
  height,
  variant = 'rectangular',
  animation = true,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'bg-surface-container-highest',
        {
          'rounded-full': variant === 'circular',
          'rounded-lg': variant === 'rectangular',
          'rounded': variant === 'text',
          'animate-pulse': animation,
        },
        className
      )}
      style={{ width, height }}
      {...props}
    />
  )
}

// Composants Skeleton spécialisés pour nos use cases
export function AccommodationCardSkeleton() {
  return (
    <div
      className="bg-surface rounded-xl p-4 space-y-4"
    >
      <Skeleton variant="rectangular" width="100%" height="12rem" />
      <div className="space-y-2">
        <Skeleton variant="text" width="75%" height="1rem" />
        <Skeleton variant="text" width="50%" height="1rem" />
        <div className="flex justify-between items-center">
          <Skeleton variant="text" width="33%" height="1rem" />
          <Skeleton variant="text" width="25%" height="1rem" />
        </div>
      </div>
    </div>
  )
}

export function ActivityCardSkeleton() {
  return (
    <div
      className="bg-surface rounded-xl p-4 space-y-4"
    >
      <Skeleton variant="rectangular" width="100%" height="10rem" />
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton variant="circular" width="1.5rem" height="1.5rem" />
          <Skeleton variant="text" width="33%" height="1rem" />
        </div>
        <Skeleton variant="text" width="100%" height="1rem" />
        <Skeleton variant="text" width="66%" height="1rem" />
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} variant="circular" width="1rem" height="1rem" />
            ))}
          </div>
          <Skeleton variant="text" width="25%" height="1rem" />
        </div>
      </div>
    </div>
  )
}

// Grid Skeletons pour les sections complètes
export function AccommodationsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <AccommodationCardSkeleton key={index} />
      ))}
    </div>
  )
}

export function ActivitiesGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <ActivityCardSkeleton key={index} />
      ))}
    </div>
  )
}
