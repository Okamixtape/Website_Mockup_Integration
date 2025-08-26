'use client'

import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n/context'
import { cn } from '@/lib/utils'

interface GlobalFiltersProps {
  className?: string
}

export function GlobalFilters({ className }: GlobalFiltersProps) {
  const [selectedDestination, setSelectedDestination] = useState('')
  const { t } = useI18n()

  useEffect(() => {
    const handleDestinationUpdate = (e: CustomEvent) => {
      setSelectedDestination(e.detail)
    }

    window.addEventListener('destinationUpdated', handleDestinationUpdate as EventListener)
    
    // Check for stored destination on mount
    const stored = localStorage.getItem('selectedDestination')
    if (stored) {
      setSelectedDestination(stored)
    }

    return () => {
      window.removeEventListener('destinationUpdated', handleDestinationUpdate as EventListener)
    }
  }, [])

  const handleReset = () => {
    setSelectedDestination('')
    localStorage.removeItem('selectedDestination')
    window.dispatchEvent(new CustomEvent('destinationUpdated', { detail: '' }))
  }

  if (!selectedDestination) return null

  return (
    <div className={cn(
      "sticky top-20 z-40 bg-surface/95 backdrop-blur-lg border-b border-outline-variant",
      className
    )}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="material-symbols-outlined text-primary">
              location_on
            </span>
            <span className="font-medium text-on-surface">
              {t.common.filteringBy}: <span className="text-primary">{selectedDestination}</span>
            </span>
          </div>
          
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-1.5 bg-error/10 text-error rounded-full text-sm font-medium hover:bg-error/20 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">close</span>
            {t.common.reset}
          </button>
        </div>
      </div>
    </div>
  )
}
