'use client'

import { useState, useMemo, useEffect } from 'react'
import { AnimatedBox } from './AnimatedBox'
import { AccommodationCard } from './AccommodationCard'
import { Button } from './Button'
import { ResultsHeader } from './ResultsHeader'
import { AccommodationFilters } from './AccommodationFilters'
import { cn } from '@/lib/utils'
import { useI18n } from '@/lib/i18n/context'
import { accommodations, typeLabels, destinations } from '@/data/accommodations'

interface AccommodationsProps {
  className?: string
}

export function Accommodations({ className }: AccommodationsProps) {
  const { t } = useI18n()
  const [selectedType, setSelectedType] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('rating')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedDestination, setSelectedDestination] = useState<string>('')
  const [currentView, setCurrentView] = useState<'grid' | 'map'>('grid')
  const [visibleCount, setVisibleCount] = useState(6)
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    amenities: [] as string[],
  })

  // Écouter les événements de recherche depuis le Header
  useEffect(() => {
    // Charger la recherche initiale depuis localStorage
    const savedSearch = localStorage.getItem('searchQuery')
    if (savedSearch) {
      setSearchTerm(savedSearch)
    }

    // Écouter les mises à jour de recherche
    const handleSearchUpdate = (event: CustomEvent) => {
      setSearchTerm(event.detail || '')
    }

    window.addEventListener('searchUpdated', handleSearchUpdate as EventListener)
    
    return () => {
      window.removeEventListener('searchUpdated', handleSearchUpdate as EventListener)
    }
  }, [])

  // Écouter les changements de destination
  useEffect(() => {
    const handleDestinationUpdate = (event: CustomEvent<string>) => {
      setSelectedDestination(event.detail)
    }

    // Charger la destination depuis le localStorage au chargement
    const savedDestination = localStorage.getItem('selectedDestination')
    if (savedDestination) {
      setSelectedDestination(savedDestination)
    }

    window.addEventListener('destinationUpdated', handleDestinationUpdate as EventListener)
    return () => {
      window.removeEventListener('destinationUpdated', handleDestinationUpdate as EventListener)
    }
  }, [])

  const accommodationTypes = ['all', 'Hôtel', 'Appartement']

  const filteredAndSortedAccommodations = useMemo(() => {
    let filtered = accommodations.filter(acc => {
      const typeMatch = selectedType === 'all' || acc.type.toLowerCase() === selectedType.toLowerCase()
      
      // Filtre par destination
      const matchesDestination = !selectedDestination || 
        acc.city.toLowerCase() === selectedDestination.toLowerCase()
      
      // Filtrage par terme de recherche
      const searchMatch = !searchTerm || 
        acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acc.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acc.amenities.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()))
      const priceMatch = acc.price >= filters.priceRange[0] && acc.price <= filters.priceRange[1]
      const amenitiesMatch = filters.amenities.length === 0 || filters.amenities.every(a => acc.amenities.includes(a))

      return typeMatch && matchesDestination && searchMatch && priceMatch && amenitiesMatch
    })

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'rating':
          return b.rating - a.rating
        default:
          return 0
      }
    })

    return filtered
  }, [selectedType, sortBy, searchTerm, selectedDestination, filters])

  const displayedAccommodations = useMemo(() => {
    return filteredAndSortedAccommodations.slice(0, visibleCount)
  }, [filteredAndSortedAccommodations, visibleCount])

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
  }

  return (
    <section id="hebergements" className={cn('py-16 md:py-24 px-4', className)}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedBox 
          className="mb-12"
          animation="fadeIn"
        >
          <h2 className="text-3xl font-bold text-on-surface mb-4">
            {t.accommodations.title}
            {searchTerm && (
              <span className="text-lg font-normal text-on-surface-variant ml-3">
                {t.common.searchingFor} "{searchTerm}"
              </span>
            )}
            {selectedDestination && (
              <span className="text-lg font-normal text-on-surface-variant ml-3">
                {t.common.destination} "{selectedDestination}"
              </span>
            )}
          </h2>
          <p className="text-on-surface-variant">
            {t.accommodations.subtitle}
          </p>
        </AnimatedBox>

        {/* Filters */}
        <AccommodationFilters 
          accommodations={accommodations} 
          onFilterChange={handleFilterChange} 
        />

        {/* Type and Sort Controls */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex gap-2">
            {accommodationTypes.map((type) => (
              <button
                key={type}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  selectedType.toLowerCase() === type.toLowerCase()
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                )}
                onClick={() => setSelectedType(type)}
              >
                {typeLabels[type] || t.accommodations.types.all}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="ml-auto px-4 py-2 bg-surface-container rounded-full text-sm border-0 focus:outline-none"
          >
            <option value="rating">{t.accommodations.sort.rating}</option>
            <option value="price">{t.accommodations.sort.priceAsc}</option>
          </select>
        </div>

        {/* Results Header */}
        <ResultsHeader 
          totalResults={filteredAndSortedAccommodations.length}
          currentView={currentView}
          onViewChange={setCurrentView}
        />

        {/* Results Grid */}
        {currentView === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedAccommodations.map((accommodation, index) => (
              <AnimatedBox
                key={accommodation.id}
                animation="slideUp"
                delay={index * 50}
              >
                <AccommodationCard
                  accommodation={accommodation}
                  className="h-full"
                />
              </AnimatedBox>
            ))}
          </div>
        ) : (
          <div className="bg-surface-container rounded-2xl p-8 text-center">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">map</span>
            <h3 className="text-xl font-semibold mb-2">Vue carte disponible prochainement</h3>
            <p className="text-on-surface-variant">
              La vue carte interactive sera bientôt disponible pour explorer les hébergements par zone géographique.
            </p>
          </div>
        )}

        {/* Show More Button */}
        {visibleCount < filteredAndSortedAccommodations.length && currentView === 'grid' && (
          <AnimatedBox 
            animation="fadeIn"
            delay={300}
            className="mt-12 text-center"
          >
            <Button
              variant="outlined"
              size="large"
              className="mx-auto"
              onClick={() => setVisibleCount(prev => prev + 6)}
            >
              {t.common.showMore}
            </Button>
          </AnimatedBox>
        )}
      </div>
    </section>
  )
}
