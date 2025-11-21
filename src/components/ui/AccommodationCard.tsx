'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Accommodation, amenityIcons } from '@/data/accommodations'
import { Button } from './Button'
import { useI18n } from '@/lib/i18n/context'
import { useFavoriteItem } from '@/hooks/useFavorites'

interface AccommodationCardProps {
  accommodation: Accommodation
  className?: string
}

export function AccommodationCard({ accommodation, className }: AccommodationCardProps) {
  const router = useRouter()
  const { t } = useI18n()
  const { isFavorite, toggleFavorite } = useFavoriteItem(accommodation.id, 'accommodation')

  const {
    name,
    type,
    location,
    price,
    rating,
    reviewCount,
    image,
    amenities,
    description,
    isPopular
  } = accommodation

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="material-symbols-outlined text-yellow-500 text-sm fill">
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

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleFavorite()
  }

  return (
    <article
      className="bg-surface rounded-2xl overflow-hidden shadow-md"
    >
      <div className="relative">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={`${type} ${name} à ${location}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {accommodation.isPopular && (
              <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-base">trending_up</span>
                Populaire
              </span>
            )}
          </div>

          {/* Price Badge */}
          <div className="absolute bottom-4 left-4 bg-primary text-on-primary px-4 py-2 rounded-full font-bold text-lg shadow-lg">
            {price}€<span className="text-sm font-normal">/nuit</span>
          </div>

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
            aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            <span
              className={cn('material-symbols-outlined transition-all duration-300',
                isFavorite ? 'text-red-500' : 'text-gray-600'
              )}
              style={{ fontVariationSettings: isFavorite ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
            >
              favorite
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-xl font-semibold text-on-surface mb-1 line-clamp-1">
              {name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-base">
                location_on
              </span>
              <span>{location}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {renderStars(rating)}
            </div>
            <span className="font-medium text-on-surface">
              {rating.toFixed(1)}
            </span>
            <span className="text-sm text-on-surface-variant">
              ({reviewCount} {t.accommodations.cards.reviews})
            </span>
          </div>
          
          {/* Distance from city center */}
          <div className="flex items-center gap-1 text-sm text-on-surface-variant mb-4">
            <span className="material-symbols-outlined text-base">pin_drop</span>
            <span>À 2.5 km du centre-ville</span>
          </div>
          
          {/* Quick amenities */}
          <div className="flex flex-wrap gap-2 mb-4">
            {amenities.slice(0, 3).map((amenity, index) => (
              <div key={index} className="flex items-center gap-1 text-xs text-on-surface-variant bg-surface-variant px-2 py-1 rounded-md">
                <span className="material-symbols-outlined text-sm">
                  {amenityIcons[amenity] || 'check_circle'}
                </span>
                <span>{amenity}</span>
              </div>
            ))}
            {amenities.length > 3 && (
              <span className="text-xs text-on-surface-variant bg-surface-variant px-2 py-1 rounded-md">
                +{amenities.length - 3}
              </span>
            )}
          </div>

          {/* Single Action Button */}
          <Button 
            variant="filled"
            size="medium"
            className="w-full"
            onClick={(e) => {
              e.preventDefault()
              router.push(`/accommodation/${accommodation.id}`)
            }}
          >
            Voir les détails
          </Button>
        </div>
      </div>
    </article>
  )
}
