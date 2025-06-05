'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Activity, categoryIcons, categoryLabels } from '@/data/activities'

interface ActivityCardProps {
  activity: Activity
  className?: string
}

export function ActivityCard({ activity, className }: ActivityCardProps) {
  const {
    name,
    category,
    location,
    duration,
    rating,
    reviewCount,
    image,
    description,
    highlights,
    price,
    isFree,
    badge,
    isPopular
  } = activity

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className="material-symbols-outlined text-yellow-500 text-xs">
          star
        </span>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="material-symbols-outlined text-yellow-500 text-xs">
          star_half
        </span>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="material-symbols-outlined text-outline text-xs">
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
        'hover:shadow-elevation-6 transition-all duration-300 group cursor-pointer',
        'h-[400px] flex flex-col',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      layout
    >
      {/* Image Container - Plus large pour les activités */}
      <div className="relative h-56 bg-surface-container overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-7xl text-on-surface-variant opacity-40">
            {categoryIcons[category]}
          </span>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <motion.div
            className="bg-surface/95 backdrop-blur-sm text-on-surface px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="material-symbols-outlined text-sm">
              {categoryIcons[category]}
            </span>
            {categoryLabels[category]}
          </motion.div>
        </div>

        {/* Badges Row */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
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

        {/* Price/Free Badge */}
        <div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-sm rounded-2xl px-3 py-2">
          {isFree ? (
            <span className="text-sm font-bold text-primary">Gratuit</span>
          ) : (
            <>
              <span className="text-lg font-bold text-on-surface">{price}€</span>
              <span className="text-xs text-on-surface-variant ml-1">/pers</span>
            </>
          )}
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm rounded-2xl px-3 py-2 flex items-center gap-1">
          <span className="material-symbols-outlined text-sm text-on-surface-variant">
            schedule
          </span>
          <span className="text-sm font-medium text-on-surface">{duration}</span>
        </div>
      </div>

      {/* Content - Plus compact */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-on-surface mb-1 group-hover:text-primary transition-colors line-clamp-2">
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
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            {renderStars(rating)}
          </div>
          <span className="text-sm font-medium text-on-surface">
            {rating.toFixed(1)}
          </span>
          <span className="text-xs text-on-surface-variant">
            ({reviewCount})
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-on-surface-variant mb-4 line-clamp-2 flex-1">
          {description}
        </p>

        {/* Highlights */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                className="inline-block bg-surface-container text-on-surface-variant px-2 py-1 rounded-lg text-xs"
              >
                {highlight}
              </span>
            ))}
            {highlights.length > 3 && (
              <span className="inline-block bg-surface-container text-on-surface-variant px-2 py-1 rounded-lg text-xs">
                +{highlights.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          className="w-full bg-primary text-on-primary py-3 px-4 rounded-2xl font-medium hover:shadow-elevation-2 transition-all duration-200 mt-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">
              explore
            </span>
            Découvrir
          </div>
        </motion.button>
      </div>
    </motion.article>
  )
}
