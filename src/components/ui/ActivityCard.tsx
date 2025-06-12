'use client'

import Image from 'next/image'
import { AnimatedBox } from './AnimatedBox'
import { cn } from '@/lib/utils'
import { Activity } from '@/data/activities'
import { useI18n } from '@/lib/i18n/context'

interface ActivityCardProps {
  activity: Activity
  className?: string
}

export function ActivityCard({ activity, className }: ActivityCardProps) {
  const { t } = useI18n()
  
  return (
    <AnimatedBox
      className={cn(
        'bg-surface rounded-3xl overflow-hidden shadow-elevation-2 border border-outline-variant group cursor-pointer',
        className
      )}
      animation="slideUp"
      hover="lift"
      tap
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExUWHB/9oADADAQAAAAAA/2Q=="
        />
        
        {/* Badge - Only show if it's a must-see */}
        {activity.badge === 'Incontournable' && (
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-medium">
              {t.activities.badges.mustSee}
            </span>
          </div>
        )}

        {/* Price - Simplified display */}
        <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
          {activity.isFree ? t.activities.cards.free : `${activity.price}€`}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-on-surface line-clamp-1">
            {activity.name}
          </h3>
          <p className="text-sm text-on-surface-variant line-clamp-2">
            {activity.description}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-xs text-tertiary">star</span>
            <span className="text-on-surface-variant">{activity.rating}</span>
          </div>
          <span className="text-on-surface-variant">{activity.duration}</span>
          <span className="text-sm text-on-surface-variant">
            ({activity.reviewCount} {t.activities.cards.reviews})
          </span>
        </div>
      </div>
    </AnimatedBox>
  )
}
