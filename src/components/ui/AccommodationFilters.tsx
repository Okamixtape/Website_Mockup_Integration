'use client'

import { useState, useMemo } from 'react'
import { Button } from './Button'
import { useI18n } from '@/lib/i18n/context'
import { amenityIcons } from '@/data/accommodations'
import { cn } from '@/lib/utils'

const allAmenities = [
  'Wifi', 'Pool', 'Beach', 'Spa', 'Restaurant', 'Fitness', 
  'Kitchen', 'Parking', 'Terrace', 'AirConditioning', 'Bar', 'CityView', 
  'Concierge', 'Washer', 'LakeView', 'PrivateBeach', 'SurfEquipment', 'Breakfast'
].sort()

interface AccommodationFiltersProps {
  onFilterChange: (filters: any) => void
  accommodations: any[]
}

export function AccommodationFilters({ onFilterChange, accommodations }: AccommodationFiltersProps) {
  const { t } = useI18n()
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])

  const maxPrice = useMemo(() => {
    return Math.max(...accommodations.map(a => a.price), 500)
  }, [accommodations])

  const handleApplyFilters = () => {
    onFilterChange({ priceRange, amenities: selectedAmenities })
  }

  const handleAmenityChange = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity) 
        : [...prev, amenity]
    )
  }

  return (
    <div className="bg-surface-container p-6 rounded-2xl mb-8">
      <h3 className="text-xl font-bold mb-4">{t.common.filters}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Price Filter */}
        <div>
          <label htmlFor="priceRange" className="block text-sm font-medium text-on-surface-variant mb-2">{t.accommodations.filters.priceRange}</label>
          <input 
            type="range" 
            id="priceRange"
            min={0}
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="text-center mt-2">{t.accommodations.filters.upTo} <span className="font-semibold">€{priceRange[1]}</span></div>
        </div>

        {/* Amenities Filter */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-on-surface-variant mb-2">{t.accommodations.filters.amenities}</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {allAmenities.map(amenity => (
              <button 
                key={amenity}
                onClick={() => handleAmenityChange(amenity)}
                className={cn(
                  'flex items-center gap-2 p-2 rounded-lg text-sm transition-colors w-full text-left',
                  selectedAmenities.includes(amenity) 
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-surface-container-high hover:bg-surface-container-highest'
                )}
              >
                <span className="material-symbols-outlined text-base">{amenityIcons[amenity.toLowerCase()] || 'help'}</span>
                <span>{amenity}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 text-right">
        <Button onClick={handleApplyFilters}>{t.common.applyFilters}</Button>
      </div>
    </div>
  )
}
