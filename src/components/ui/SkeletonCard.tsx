'use client'

import { cn } from '@/lib/utils'

interface SkeletonCardProps {
  className?: string
}

export function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <div className={cn(
      "relative bg-surface rounded-2xl overflow-hidden shadow-lg animate-pulse",
      className
    )}>
      {/* Image skeleton */}
      <div className="h-48 bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container bg-[length:200%_100%] animate-shimmer" />
      
      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-6 bg-surface-container rounded-lg w-3/4" />
        
        {/* Location */}
        <div className="h-4 bg-surface-container rounded-lg w-1/2" />
        
        {/* Features */}
        <div className="flex gap-2">
          <div className="h-4 bg-surface-container rounded-lg w-16" />
          <div className="h-4 bg-surface-container rounded-lg w-16" />
        </div>
        
        {/* Bottom section */}
        <div className="flex items-center justify-between pt-2">
          <div className="h-9 bg-surface-container rounded-lg w-24" />
          <div className="h-6 bg-surface-container rounded-lg w-20" />
        </div>
      </div>
    </div>
  )
}
