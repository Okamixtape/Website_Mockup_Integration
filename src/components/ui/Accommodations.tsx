'use client'

import { useState, useMemo, useEffect } from 'react'
import { AnimatedBox } from './AnimatedBox'
import { AccommodationCard } from './AccommodationCard'
import { Button } from './Button'
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

  const accommodationTypes = ['all', 'hotel', 'apartment']

  const filteredAndSortedAccommodations = useMemo(() => {
    let filtered = accommodations.filter(acc => {
      const typeMatch = selectedType === 'all' || acc.type === selectedType
      
      // Filtre par destination
      const matchesDestination = !selectedDestination || 
        acc.city.toLowerCase() === selectedDestination.toLowerCase()
      
      // Filtrage par terme de recherche
      const searchMatch = !searchTerm || 
        acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acc.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acc.amenities.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()))
      
      return typeMatch && matchesDestination && searchMatch
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
  }, [selectedType, sortBy, searchTerm, selectedDestination])

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

        {/* Simplified Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          {/* Type Filter - Only 3 options */}
          <div className="flex gap-2">
            {accommodationTypes.map((type) => (
              <button
                key={type}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  selectedType === type
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                )}
                onClick={() => setSelectedType(type)}
              >
                {type === 'all' ? t.accommodations.types.all : type === 'hotel' ? t.accommodations.types.hotel : t.accommodations.types.apartment}
              </button>
            ))}
          </div>

          {/* Simple Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="ml-auto px-4 py-2 bg-surface-container rounded-full text-sm border-0 focus:outline-none"
          >
            <option value="rating">{t.accommodations.sort.rating}</option>
            <option value="price">{t.accommodations.sort.priceAsc}</option>
          </select>

          {/* Clear destination filter if active */}
          {selectedDestination && (
            <>
              <div className="h-8 w-px bg-outline-variant" />
              <button
                onClick={() => {
                  setSelectedDestination('')
                  localStorage.removeItem('selectedDestination')
                }}
                className="flex items-center gap-2 px-3 py-1.5 bg-error/10 text-error rounded-full text-sm font-medium hover:bg-error/20 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">close</span>
                {t.common.reset}
              </button>
            </>
          )}
        </div>

        {/* Results Grid */}
        {filteredAndSortedAccommodations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedAccommodations.map((accommodation, index) => (
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
          <AnimatedBox
            className="text-center py-16"
            animation="fadeIn"
          >
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">
              search_off
            </span>
            <h3 className="text-xl font-medium text-on-surface mb-2">
              {t.accommodations.noAccommodations}
            </h3>
            <p className="text-on-surface-variant">
              {t.accommodations.tryAgain}
            </p>
            {searchTerm && (
              <Button
                variant="filled"
                className="mt-4"
                onClick={() => {
                  setSearchTerm('')
                  localStorage.removeItem('searchQuery')
                }}
              >
                {t.common.reset}
              </Button>
            )}
          </AnimatedBox>
        )}
      </div>
    </section>
  )
}
