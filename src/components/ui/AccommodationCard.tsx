'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Accommodation, amenityIcons } from '@/data/accommodations'

interface AccommodationCardProps {
  accommodation: Accommodation
  className?: string
}

export function AccommodationCard({ accommodation, className }: AccommodationCardProps) {
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
    badge,
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
    <motion.article
      className={cn(
        'bg-surface rounded-3xl overflow-hidden shadow-elevation-2 border border-outline-variant',
        'hover:shadow-elevation-4 transition-all duration-300 group cursor-pointer',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      layout
    >
      {/* Image Container */}
      <div className="relative h-48 bg-surface-container overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant opacity-50">
            hotel
          </span>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isPopular && (
            <motion.div
              className="bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-medium"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Populaire
            </motion.div>
          )}
          {badge && (
            <motion.div
              className="bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-medium"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              {badge}
            </motion.div>
          )}
        </div>

        {/* Price */}
        <div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-sm rounded-2xl px-3 py-2">
          <span className="text-lg font-bold text-on-surface">{price}€</span>
          <span className="text-sm text-on-surface-variant ml-1">/nuit</span>
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
            ({reviewCount} avis)
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
        <motion.button
          className="w-full bg-primary text-on-primary py-3 px-4 rounded-2xl font-medium hover:shadow-elevation-2 transition-all duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Voir les détails
        </motion.button>
      </div>
    </motion.article>
  )
}
