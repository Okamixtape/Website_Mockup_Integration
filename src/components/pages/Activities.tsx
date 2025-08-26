'use client'

import { useState, useMemo, useEffect } from 'react'
import { AnimatedBox } from '../ui/AnimatedBox'
import { ActivityCard } from '../ui/ActivityCard'
import { Button } from '../ui/Button'
import { ResultsHeader } from '../ui/ResultsHeader'
import { ActivityFilters } from '@/components/pages/ActivityFilters' // This will be created next
import { cn } from '@/lib/utils'
import { useI18n } from '@/lib/i18n/context'
import { activities } from '@/data/activities'

interface ActivitiesProps {
  className?: string
}

export function Activities({ className }: ActivitiesProps) {
  const { t } = useI18n()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedDestination, setSelectedDestination] = useState<string>('')
  const [currentView, setCurrentView] = useState<'grid' | 'map'>('grid')
  const [visibleCount, setVisibleCount] = useState(6)
  const [filters, setFilters] = useState({
    priceRange: [0, 200],
    categories: [] as string[],
    freeOnly: false,
  })

  useEffect(() => {
    const savedSearch = localStorage.getItem('searchQuery')
    if (savedSearch) setSearchTerm(savedSearch)

    const handleSearchUpdate = (event: CustomEvent) => {
      setSearchTerm(event.detail || '')
    }
    window.addEventListener('searchUpdated', handleSearchUpdate as EventListener)
    return () => window.removeEventListener('searchUpdated', handleSearchUpdate as EventListener)
  }, [])

  useEffect(() => {
    const savedDestination = localStorage.getItem('selectedDestination')
    if (savedDestination) setSelectedDestination(savedDestination)

    const handleDestinationUpdate = (event: CustomEvent<string>) => {
      setSelectedDestination(event.detail)
    }
    window.addEventListener('destinationUpdated', handleDestinationUpdate as EventListener)
    return () => window.removeEventListener('destinationUpdated', handleDestinationUpdate as EventListener)
  }, [])

  const filteredAndSortedActivities = useMemo(() => {
    let filtered = activities.filter(act => {
      const matchesDestination = !selectedDestination || act.city.toLowerCase() === selectedDestination.toLowerCase()
      const searchMatch = !searchTerm || 
        act.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        act.location.toLowerCase().includes(searchTerm.toLowerCase())
      const priceMatch = typeof act.price === 'number' && act.price >= filters.priceRange[0] && act.price <= filters.priceRange[1]
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(act.category)
      const freeMatch = !filters.freeOnly || act.isFree

      return matchesDestination && searchMatch && priceMatch && categoryMatch && freeMatch
    })

    // Add sorting if needed in the future

    return filtered
  }, [searchTerm, selectedDestination, filters])

  const displayedActivities = useMemo(() => {
    return filteredAndSortedActivities.slice(0, visibleCount)
  }, [filteredAndSortedActivities, visibleCount])

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
  }

  return (
    <section id="activities" className={cn('py-16 md:py-24 px-4', className)}>
      <div className="max-w-7xl mx-auto">
        <AnimatedBox className="mb-12" animation="fadeIn">
          <h2 className="text-3xl font-bold text-on-surface mb-4">
            {t.activities.title}
          </h2>
          <p className="text-on-surface-variant">
            {t.activities.subtitle}
          </p>
        </AnimatedBox>

        <ActivityFilters onFilterChange={handleFilterChange} />

        <ResultsHeader 
          totalResults={filteredAndSortedActivities.length}
          currentView={currentView}
          onViewChange={setCurrentView}
        />

        {currentView === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedActivities.map((activity, index) => (
              <AnimatedBox key={activity.id} animation="slideUp" delay={index * 50}>
                <ActivityCard activity={activity} className="h-full" />
              </AnimatedBox>
            ))}
          </div>
        ) : (
          <div className="bg-surface-container rounded-2xl p-8 text-center">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">map</span>
            <h3 className="text-xl font-semibold mb-2">Vue carte disponible prochainement</h3>
            <p className="text-on-surface-variant">
              La vue carte interactive sera bientôt disponible pour explorer les activités.
            </p>
          </div>
        )}

        {visibleCount < filteredAndSortedActivities.length && currentView === 'grid' && (
          <AnimatedBox animation="fadeIn" delay={300} className="mt-12 text-center">
            <Button variant="outlined" size="large" className="mx-auto" onClick={() => setVisibleCount(prev => prev + 6)}>
              {t.common.showMore}
            </Button>
          </AnimatedBox>
        )}
      </div>
    </section>
  )
}
