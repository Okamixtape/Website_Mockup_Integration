'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ActivityCard } from './ActivityCard'
import { activities, categoryLabels, categoryIcons, durationLabels } from '@/data/activities'

type SortOption = 'popular' | 'rating' | 'price' | 'name'
type CategoryFilter = string | 'all'
type DurationFilter = string | 'all'

export function Activities() {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all')
  const [durationFilter, setDurationFilter] = useState<DurationFilter>('all')
  const [sortBy, setSortBy] = useState<SortOption>('popular')
  const [showFreeOnly, setShowFreeOnly] = useState(false)

  const filteredAndSortedActivities = useMemo(() => {
    let filtered = activities.filter(activity => {
      const categoryMatch = categoryFilter === 'all' || activity.category === categoryFilter
      const durationMatch = durationFilter === 'all' || activity.duration === durationFilter
      const freeMatch = !showFreeOnly || activity.isFree

      return categoryMatch && durationMatch && freeMatch
    })

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          if (a.isPopular && !b.isPopular) return -1
          if (!a.isPopular && b.isPopular) return 1
          return b.reviewCount - a.reviewCount
        case 'rating':
          return b.rating - a.rating
        case 'price':
          const priceA = a.isFree ? 0 : (a.price || 0)
          const priceB = b.isFree ? 0 : (b.price || 0)
          return priceA - priceB
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return filtered
  }, [categoryFilter, durationFilter, sortBy, showFreeOnly])

  const categories = ['all', ...Array.from(new Set(activities.map(a => a.category)))]
  const durations = ['all', ...Array.from(new Set(activities.map(a => a.duration)))]

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
    <section className="py-12 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-4">
            Découvrez Marseille
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Des expériences authentiques pour tous les goûts dans la cité phocéenne
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-6 md:flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Category Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-on-surface">Catégorie</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-surface-container text-on-surface border border-outline rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">Toutes les catégories</option>
              {Object.entries(categoryLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          {/* Duration Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-on-surface">Durée</label>
            <select
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
              className="bg-surface-container text-on-surface border border-outline rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">Toutes les durées</option>
              {durations.filter(d => d !== 'all').map((duration) => (
                <option key={duration} value={duration}>{duration}</option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-on-surface">Trier par</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-surface-container text-on-surface border border-outline rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="popular">Popularité</option>
              <option value="rating">Note</option>
              <option value="price">Prix</option>
              <option value="name">Nom</option>
            </select>
          </div>

          {/* Free Only Toggle */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="freeOnly"
              checked={showFreeOnly}
              onChange={(e) => setShowFreeOnly(e.target.checked)}
              className="w-4 h-4 text-primary bg-surface-container border-outline rounded focus:ring-primary focus:ring-2"
            />
            <label htmlFor="freeOnly" className="text-sm font-medium text-on-surface">
              Gratuit uniquement
            </label>
          </div>

          {/* Results Count */}
          <div className="ml-auto text-sm text-on-surface-variant">
            {filteredAndSortedActivities.length} activité{filteredAndSortedActivities.length > 1 ? 's' : ''} trouvée{filteredAndSortedActivities.length > 1 ? 's' : ''}
          </div>
        </motion.div>

        {/* Activities Grid */}
        <AnimatePresence mode="wait">
          {filteredAndSortedActivities.length > 0 ? (
            <motion.div
              key="activities-grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredAndSortedActivities.map((activity) => (
                <motion.div
                  key={activity.id}
                  variants={itemVariants}
                  layout
                >
                  <ActivityCard activity={activity} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-6">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant opacity-50">
                  search_off
                </span>
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-2">
                Aucune activité trouvée
              </h3>
              <p className="text-on-surface-variant mb-6">
                Essayez de modifier vos critères de recherche
              </p>
              <button
                onClick={() => {
                  setCategoryFilter('all')
                  setDurationFilter('all')
                  setShowFreeOnly(false)
                  setSortBy('popular')
                }}
                className="bg-primary text-on-primary px-6 py-3 rounded-2xl font-medium hover:shadow-elevation-2 transition-all duration-200"
              >
                Réinitialiser les filtres
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
