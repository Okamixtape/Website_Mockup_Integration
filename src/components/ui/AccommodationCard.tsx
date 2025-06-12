'use client'

import { AnimatedBox } from './AnimatedBox'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Accommodation, amenityIcons } from '@/data/accommodations'
import { Button } from './Button'
import { useI18n } from '@/lib/i18n/context'

interface AccommodationCardProps {
  accommodation: Accommodation
  className?: string
}

export function AccommodationCard({ accommodation, className }: AccommodationCardProps) {
  const router = useRouter()
  const { t } = useI18n()

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
        <span key={`star-${i}`} className="material-symbols-outlined text-yellow-500 text-sm">
          star
        </span>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="material-symbols-outlined text-yellow-500 text-sm">
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
    <Link href={`/accommodation/${accommodation.id}`} className={cn("block h-full", className)}>
      <AnimatedBox 
        className="group relative h-full bg-surface-container rounded-2xl overflow-hidden border border-outline-variant hover:border-outline transition-all duration-300 hover:shadow-lg"
        hover="lift"
        tap
      >
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={`${name} - ${type} à ${location}`}
            width={400}
            height={240}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExUWHB/9oADAMBAAIRAxEAPwA7jRmqahoq3qW2fS/iHxV2eT7nXqf2j9+Aqf5BHCavwKAUz9FKXNflKLxLv+D/2Q=="
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isPopular && (
              <div className="absolute top-3 left-3 z-10">
                <span className="
                  bg-tertiary text-on-tertiary 
                  px-3 py-1 rounded-full text-xs font-medium
                  shadow-md
                ">
                  {t.accommodations.cards.popular}
                </span>
              </div>
            )}
          </div>

          {/* Prix overlay */}
          <div className="absolute bottom-3 right-3 z-10">
            <div className="
              bg-surface/90 backdrop-blur-sm
              px-3 py-1.5 rounded-full
              shadow-md
            ">
              <span className="text-sm font-bold text-on-surface">
                €{price}
              </span>
              <span className="text-xs text-on-surface-variant">
                /{t.accommodations.cards.perNight}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-lg font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-base">
                location_on
              </span>
              {location}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {renderStars(rating)}
            </div>
            <span className="text-sm font-medium text-on-surface">
              {rating.toFixed(1)}
            </span>
            <span className="text-sm text-on-surface-variant">
              ({reviewCount} {t.accommodations.cards.reviews})
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">
            {description}
          </p>

          {/* Amenities */}
          <div className="flex items-center gap-3 mb-4">
            {amenities.slice(0, 4).map((amenity) => (
              <div
                key={amenity}
                className="flex items-center justify-center w-8 h-8 bg-surface-container rounded-lg"
                title={amenity}
              >
                <span className="material-symbols-outlined text-sm text-on-surface-variant">
                  {amenityIcons[amenity] || 'check'}
                </span>
              </div>
            ))}
            {amenities.length > 4 && (
              <div className="flex items-center justify-center w-8 h-8 bg-surface-container rounded-lg">
                <span className="text-xs text-on-surface-variant font-medium">
                  +{amenities.length - 4}
                </span>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-between">
            <Link href={`/accommodation/${accommodation.id}`}>
              <Button
                variant="filled"
                size="small"
                className="hover:scale-105 transition-transform"
              >
                {t.accommodations.cards.book}
              </Button>
            </Link>
            <div className="flex items-center gap-1">
              {renderStars(rating)}
              <span className="text-sm text-on-surface-variant ml-1">
                ({reviewCount} {t.accommodations.cards.reviews})
              </span>
            </div>
          </div>
        </div>
      </AnimatedBox>
    </Link>
  )
}
