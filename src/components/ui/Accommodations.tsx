'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { AccommodationCard } from './AccommodationCard'
import { accommodations, typeLabels } from '@/data/accommodations'

interface AccommodationsProps {
  className?: string
}

export function Accommodations({ className }: AccommodationsProps) {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'popular'>('popular')

  const accommodationTypes = ['all', ...Object.keys(typeLabels)]

  const filteredAndSortedAccommodations = useMemo(() => {
    let filtered = accommodations.filter(acc => {
      const typeMatch = selectedType === 'all' || acc.type === selectedType
      const priceMatch = acc.price >= priceRange[0] && acc.price <= priceRange[1]
      return typeMatch && priceMatch
    })

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'rating':
          return b.rating - a.rating
        case 'popular':
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0) || b.rating - a.rating
        default:
          return 0
      }
    })

    return filtered
  }, [selectedType, priceRange, sortBy])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className={cn('py-16 bg-surface', className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-4">
            Hébergements à Marseille
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl">
            Découvrez nos meilleures offres d'hébergements dans la cité phocéenne.
            Hôtels, auberges et appartements sélectionnés pour vous.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-8 space-y-6 p-6 bg-surface-container rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-on-surface mb-3">
              Type d'hébergement
            </label>
            <div className="flex flex-wrap gap-3">
              {accommodationTypes.map((type) => (
                <motion.button
                  key={type}
                  className={cn(
                    'px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200',
                    selectedType === type
                      ? 'bg-primary text-on-primary shadow-elevation-2'
                      : 'bg-surface text-on-surface hover:bg-surface-container'
                  )}
                  onClick={() => setSelectedType(type)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {type === 'all' ? 'Tous' : typeLabels[type as keyof typeof typeLabels]}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Price Range & Sort */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-on-surface mb-3">
                Prix par nuit (€)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1 h-2 bg-surface-container rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm font-medium text-on-surface min-w-[60px]">
                  ≤ {priceRange[1]}€
                </span>
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-on-surface mb-3">
                Trier par
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full p-3 bg-surface border border-outline rounded-2xl text-on-surface focus:border-primary focus:outline-none"
              >
                <option value="popular">Popularité</option>
                <option value="rating">Note</option>
                <option value="price">Prix</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
            <span className="text-sm text-on-surface-variant">
              {filteredAndSortedAccommodations.length} hébergement{filteredAndSortedAccommodations.length > 1 ? 's' : ''} trouvé{filteredAndSortedAccommodations.length > 1 ? 's' : ''}
            </span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                tune
              </span>
              <span className="text-sm text-primary font-medium">
                Filtres actifs
              </span>
            </div>
          </div>
        </motion.div>

        {/* Accommodations Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            layout
          >
            {filteredAndSortedAccommodations.map((accommodation) => (
              <motion.div
                key={accommodation.id}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <AccommodationCard accommodation={accommodation} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredAndSortedAccommodations.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4 block">
              search_off
            </span>
            <h3 className="text-xl font-medium text-on-surface mb-2">
              Aucun hébergement trouvé
            </h3>
            <p className="text-on-surface-variant">
              Essayez de modifier vos critères de recherche
            </p>
          </motion.div>
        )}

        {/* Show More Button */}
        {filteredAndSortedAccommodations.length >= 6 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="bg-primary text-on-primary px-8 py-4 rounded-3xl font-medium hover:shadow-elevation-4 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Afficher plus d'hébergements
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
