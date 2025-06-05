'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './Button'
import { cn } from '@/lib/utils'

interface HeroProps {
  className?: string
}

interface SearchFilters {
  location: string
  guests: number
  dateRange: string
}

export function Hero({ className }: HeroProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    guests: 2,
    dateRange: ''
  })

  const handleSearch = () => {
    console.log('Recherche avec filtres:', filters)
    // Implement search logic here
  }

  const popularDestinations = [
    'Marseille, France',
    'Paris, France', 
    'Lyon, France',
    'Nice, France'
  ]

  return (
    <section className={cn(
      'relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden',
      className
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-secondary rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-tertiary rounded-full blur-md"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-on-surface mb-6">
              Trouvez votre hébergement pour des vacances de 
              <span className="text-primary"> rêve</span>
            </h2>
            <p className="text-xl text-on-surface-variant mb-8 max-w-2xl mx-auto">
              En plein centre-ville ou en pleine nature, découvrez des logements exceptionnels 
              qui rendront votre séjour inoubliable.
            </p>
          </motion.div>

          {/* Search Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-surface rounded-3xl shadow-elevation-3 p-6 md:p-8 border border-outline-variant"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              {/* Location Input */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-on-surface mb-2">
                  Destination
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 material-symbols-outlined text-on-surface-variant">
                    location_on
                  </span>
                  <input
                    type="text"
                    placeholder="Où souhaitez-vous aller ?"
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 bg-surface-container border border-outline-variant rounded-2xl text-on-surface placeholder:text-on-surface-variant outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    list="destinations"
                  />
                  <datalist id="destinations">
                    {popularDestinations.map((dest) => (
                      <option key={dest} value={dest} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Guests Selector */}
              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">
                  Voyageurs
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 material-symbols-outlined text-on-surface-variant">
                    group
                  </span>
                  <select
                    value={filters.guests}
                    onChange={(e) => setFilters({...filters, guests: parseInt(e.target.value)})}
                    className="w-full pl-12 pr-4 py-4 bg-surface-container border border-outline-variant rounded-2xl text-on-surface outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 appearance-none"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'voyageur' : 'voyageurs'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date Range */}
              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">
                  Dates
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 material-symbols-outlined text-on-surface-variant">
                    calendar_month
                  </span>
                  <input
                    type="text"
                    placeholder="Sélectionner"
                    value={filters.dateRange}
                    onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 bg-surface-container border border-outline-variant rounded-2xl text-on-surface placeholder:text-on-surface-variant outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="filled"
                size="large"
                icon="search"
                onClick={handleSearch}
                className="w-full md:w-auto px-12 py-4 text-lg font-semibold"
              >
                Rechercher
              </Button>
            </motion.div>
          </motion.div>

          {/* Popular Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <p className="text-sm text-on-surface-variant mb-4">Destinations populaires :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularDestinations.map((destination, index) => (
                <motion.button
                  key={destination}
                  onClick={() => setFilters({...filters, location: destination})}
                  className="px-4 py-2 bg-surface-container hover:bg-surface-container-high border border-outline-variant rounded-full text-on-surface text-sm transition-all duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {destination}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
