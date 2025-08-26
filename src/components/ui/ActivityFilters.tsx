'use client'

import { useMemo } from 'react'
import { Button } from './Button'
import { useI18n } from '@/lib/i18n/context'

interface ActivityFiltersProps {
  maxPrice: number
  priceRange: number
  onPriceChange: (value: number) => void
  onApply: () => void
}

export function ActivityFilters({ maxPrice, priceRange, onPriceChange, onApply }: ActivityFiltersProps) {
  const { t } = useI18n()

  const priceLabel = useMemo(() => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(priceRange)
  }, [priceRange])

  return (
    <div className="p-6 bg-surface-container-low rounded-2xl shadow-sm border border-outline-variant">
      <h3 className="text-xl font-semibold text-on-surface mb-4">{t.common.filters}</h3>
      <div className="space-y-6">
        {/* Price Range Filter */}
        <div>
          <label htmlFor="priceRange" className="block text-base font-medium text-on-surface-variant mb-2">
            {t.accommodations.filters.priceRange}
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              id="priceRange"
              min={0}
              max={maxPrice}
              value={priceRange}
              onChange={(e) => onPriceChange(Number(e.target.value))}
              className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <span className="text-on-surface font-semibold w-24 text-right">{t.accommodations.filters.upTo} {priceLabel}</span>
          </div>
        </div>

      </div>
      <div className="mt-6">
        <Button onClick={onApply} className="w-full">
          {t.common.applyFilters}
        </Button>
      </div>
    </div>
  )
}
