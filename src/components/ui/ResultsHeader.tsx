'use client'

import { cn } from '@/lib/utils'

interface ResultsHeaderProps {
  totalResults: number
  currentView: 'grid' | 'map'
  onViewChange: (view: 'grid' | 'map') => void
  className?: string
}

export function ResultsHeader({ 
  totalResults, 
  currentView, 
  onViewChange,
  className 
}: ResultsHeaderProps) {
  return (
    <div className={cn(
      "flex items-center justify-between mb-6",
      className
    )}>
      {/* Results count with animation */}
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-semibold text-on-surface">
          {totalResults > 0 ? (
            <>
              <span className="text-primary">{totalResults}</span> hébergements trouvés
            </>
          ) : (
            'Aucun hébergement trouvé'
          )}
        </h2>
        
        {/* Loading indicator */}
        <div className="hidden animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />
      </div>

      {/* View switcher */}
      <div className="flex items-center gap-2 bg-surface-variant rounded-lg p-1">
        <button
          onClick={() => onViewChange('grid')}
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all",
            currentView === 'grid' 
              ? "bg-primary text-on-primary" 
              : "text-on-surface-variant hover:bg-surface-container"
          )}
        >
          <span className="material-symbols-outlined text-sm">grid_view</span>
          <span className="text-sm font-medium">Grille</span>
        </button>
        
        <button
          onClick={() => onViewChange('map')}
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all",
            currentView === 'map' 
              ? "bg-primary text-on-primary" 
              : "text-on-surface-variant hover:bg-surface-container"
          )}
        >
          <span className="material-symbols-outlined text-sm">map</span>
          <span className="text-sm font-medium">Carte</span>
        </button>
      </div>
    </div>
  )
}
