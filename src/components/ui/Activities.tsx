'use client'

import { useState, useEffect, useMemo } from 'react'
import { AnimatedBox } from './AnimatedBox'
import { ActivityCard } from './ActivityCard'
import { Chip } from './Chip'
import { Switch } from './Switch'
import { Button } from './Button'
import { ActivityFilters } from './ActivityFilters'
import { cn } from '@/lib/utils'
import { activities } from '@/data/activities'
import { useI18n } from '@/lib/i18n/context'

interface ActivitiesProps {
  className?: string
}

export function Activities({ className }: ActivitiesProps) {
  const { t } = useI18n()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showFreeOnly, setShowFreeOnly] = useState(false)
  const [sortBy, setSortBy] = useState<'rating' | 'price-asc' | 'price-desc'>('rating')
  const [selectedDestination, setSelectedDestination] = useState<string>('')
  const [priceRange, setPriceRange] = useState<number>(0)
  const [appliedPriceRange, setAppliedPriceRange] = useState<number>(0)

  // Écouter les changements de destination
  useEffect(() => {
    const handleDestinationUpdate = (event: CustomEvent<string>) => {
      setSelectedDestination(event.detail)
    }

    window.addEventListener('destinationUpdated', handleDestinationUpdate as EventListener)

    // Charger la destination depuis localStorage au montage
    const savedDestination = localStorage.getItem('selectedDestination')
    if (savedDestination) {
      setSelectedDestination(savedDestination)
    }

    return () => {
      window.removeEventListener('destinationUpdated', handleDestinationUpdate as EventListener)
    }
  }, [])

  const maxPrice = useMemo(() => Math.max(...activities.map(a => a.price || 0)), [])

  useEffect(() => {
    if (maxPrice > 0) {
      setPriceRange(maxPrice)
      setAppliedPriceRange(maxPrice)
    }
  }, [maxPrice])

  const activityCategories = [
    { id: 'all', label: t.activities.filters.all, icon: 'category' },
    { id: 'culture', label: t.activities.filters.culture, icon: 'museum' },
    { id: 'nature', label: t.activities.filters.nature, icon: 'forest' },
    { id: 'sports', label: t.activities.filters.sports, icon: 'sports_soccer' }
  ]

  const toggleCategory = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  // Filtrer les activités
  const filteredActivities = activities
    .filter(activity => {
      // Filtre par catégorie
      if (selectedCategory !== 'all' && activity.category !== selectedCategory) {
        return false
      }
      // Filtre par gratuité
      if (showFreeOnly && activity.price && activity.price > 0) {
        return false
      }
      // Filtre par gamme de prix
      if (appliedPriceRange > 0 && (activity.price || 0) > appliedPriceRange) {
        return false
      }
      // Filtre par destination
      if (selectedDestination && activity.city !== selectedDestination) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return (a.price || 0) - (b.price || 0)
        case 'price-desc':
          return (b.price || 0) - (a.price || 0)
        case 'rating':
        default:
          return b.rating - a.rating
      }
    })

  return (
    <section id="activites" className={cn('py-16 md:py-24 px-4', className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-on-surface mb-4">
            {selectedDestination 
              ? t.activities.titleWithCity.replace('{city}', selectedDestination)
              : t.activities.title
            }
          </h2>
          <p className="text-xl text-on-surface-variant">
            {t.activities.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-wrap gap-4 items-center">
                {/* Category filters */}
                <div className="flex gap-2 flex-wrap">
                  {activityCategories.map((category) => (
                    <Chip
                      key={category.id}
                      label={category.label}
                      icon={category.icon}
                      selected={selectedCategory === category.id}
                      onClick={() => toggleCategory(category.id)}
                    />
                  ))}
                </div>

                {/* Separator */}
                <div className="hidden md:block w-px h-8 bg-outline-variant" />

                {/* Free only toggle */}
                <div className="flex items-center gap-2">
                  <Switch
                    id="free-only"
                    checked={showFreeOnly}
                    onCheckedChange={setShowFreeOnly}
                  />
                  <label htmlFor="free-only" className="text-sm font-medium text-on-surface-variant">
                    {t.activities.filters.free}
                  </label>
                </div>

                {/* Separator */}
                <div className="hidden md:block w-px h-8 bg-outline-variant" />

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="px-4 py-2 bg-surface-container rounded-lg border border-outline-variant focus:outline-none focus:border-primary"
                >
                  <option value="rating">{t.activities.sortBy.rating}</option>
                  <option value="price-asc">{t.activities.sortBy.priceAsc}</option>
                  <option value="price-desc">{t.activities.sortBy.priceDesc}</option>
                </select>
            </div>
          </div>

          <div className="md:col-span-1">
            <ActivityFilters 
              maxPrice={maxPrice}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              onApply={() => setAppliedPriceRange(priceRange)}
            />
          </div>
        </div>

        {/* Activities Grid */}
        {filteredActivities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredActivities.map((activity, index) => (
              <AnimatedBox
                key={activity.id}
                animation="slideUp"
                delay={index * 50}
              >
                <ActivityCard activity={activity} />
              </AnimatedBox>
            ))}
          </div>
        ) : (
          <AnimatedBox
            animation="fadeIn"
            className="text-center py-16"
          >
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4 block">
              search_off
            </span>
            <h3 className="text-xl font-medium text-on-surface mb-2">
              {t.activities.noActivities}
            </h3>
            <p className="text-on-surface-variant">
              {t.common.tryModifyingSearch}
            </p>
          </AnimatedBox>
        )}
      </div>
    </section>
  )
}
