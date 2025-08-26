'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { AnimatedBox } from './AnimatedBox'
import { cn } from '@/lib/utils'
import { Activity } from '@/data/activities'
import { useI18n } from '@/lib/i18n/context'
import { Button } from './Button'

interface ActivityCardProps {
  activity: Activity
  className?: string
}

export function ActivityCard({ activity, className }: ActivityCardProps) {
  const { t } = useI18n()
  const router = useRouter()
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="material-symbols-outlined text-yellow-500 text-sm fill">
          star
        </span>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="material-symbols-outlined text-yellow-500 text-sm fill">
          star_half
        </span>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="material-symbols-outlined text-outline text-sm">
          star
        </span>
      )
    }

    return stars
  }

  return (
    <AnimatedBox
      as="article"
      className={cn(
        'bg-surface rounded-2xl overflow-hidden shadow-lg border border-outline-variant group cursor-pointer flex flex-col',
        className
      )}
      animation="slideUp"
      hover="lift"
      tap
      onClick={() => router.push(`/activity/${activity.id}`)}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {activity.isPopular && (
            <span className="px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded-full flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">local_fire_department</span>
              {t.accommodations.cards.popular}
            </span>
          )}
          {activity.badge === 'Incontournable' && (
            <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">tour</span>
              {t.activities.badges.mustSee}
            </span>
          )}
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 bg-scrim/70 backdrop-blur-sm text-white px-4 py-1.5 rounded-full font-bold text-base shadow-lg">
          {activity.isFree ? t.activities.cards.free : `${activity.price}€`}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors duration-200"
          aria-label={isFavorite ? t.accommodations.cards.removeFromFavorites : t.accommodations.cards.addToFavorites}
        >
          <span
            className={cn('material-symbols-outlined transition-all duration-300',
              isFavorite ? 'text-red-500 fill-1' : 'text-gray-700'
            )}
            style={{ fontVariationSettings: isFavorite ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-on-surface line-clamp-1 mb-1">
          {activity.name}
        </h3>
        <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-3">
          <span className="material-symbols-outlined text-base">location_on</span>
          <span>{activity.city}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">{renderStars(activity.rating)}</div>
          <span className="font-semibold text-on-surface">{activity.rating.toFixed(1)}</span>
          <span className="text-sm text-on-surface-variant">({activity.reviewCount})</span>
        </div>

        <div className="flex-grow" />

        {/* Action Button */}
        <Button variant="filled" size="medium" className="w-full mt-4">
          {t.accommodations.cards.viewDetails}
        </Button>
      </div>
    </AnimatedBox>
  )
}
