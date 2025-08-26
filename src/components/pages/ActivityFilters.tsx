'use client'

import { useState, useEffect } from 'react'
import { useI18n } from '@/lib/i18n/context'
import { activities } from '@/data/activities'
import { Button } from '../ui/Button'
import { Switch } from '../ui/Switch'

interface ActivityFiltersProps {
  onFilterChange: (filters: any) => void
}

export function ActivityFilters({ onFilterChange }: ActivityFiltersProps) {
  const { t } = useI18n()
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [freeOnly, setFreeOnly] = useState(false)

  const categories = Array.from(new Set(activities.map(a => a.category)))

  useEffect(() => {
    onFilterChange({ 
      priceRange,
      categories: selectedCategories,
      freeOnly
    })
  }, [priceRange, selectedCategories, freeOnly, onFilterChange])

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    )
  }

  return (
    <div className="bg-surface-container rounded-2xl p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
          <label htmlFor="priceRange" className="block text-sm font-medium text-on-surface-variant mb-2">{t.accommodations.filters.priceRange}</label>
          <input 
            type="range" 
            id="priceRange"
            min={0}
            max={200}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="text-center mt-2">{t.accommodations.filters.upTo} <span className="font-semibold">€{priceRange[1]}</span></div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Catégories</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button 
                key={category} 
                variant={selectedCategories.includes(category) ? 'filled' : 'outlined'}
                onClick={() => handleCategoryToggle(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
                <div className="flex items-center gap-2">
          <Switch id="free-only" checked={freeOnly} onCheckedChange={setFreeOnly} aria-label={t.activities.filters.free} />
          <label htmlFor="free-only">{t.activities.filters.free}</label>
        </div>
      </div>
    </div>
  )
}
