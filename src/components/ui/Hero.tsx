'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatedBox } from './AnimatedBox'
import { SearchBar } from './SearchBar'
import { destinations } from '@/data/accommodations'
import { useI18n } from '@/lib/i18n/context'

export function Hero() {
  const [destination, setDestination] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const { t } = useI18n()
  
  // Récupérer toutes les villes disponibles
  const allCities: string[] = []
  Object.values(destinations.france.regions).forEach(region => {
    allCities.push(...region.cities)
  })
  
  // Filtrer les suggestions
  const suggestions = destination 
    ? allCities.filter(city => 
        city.toLowerCase().includes(destination.toLowerCase())
      )
    : []
  
  const handleDestinationSelect = (city: string) => {
    setDestination(city)
    setShowSuggestions(false)
    // Stocker la destination sélectionnée
    localStorage.setItem('selectedDestination', city)
    // Déclencher un événement pour mettre à jour les filtres
    window.dispatchEvent(new CustomEvent('destinationUpdated', { detail: city }))
  }

  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=400&fit=crop"
        alt="Marseille"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-scrim/60 to-scrim/80" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
        <AnimatedBox animation="fadeIn" delay={100}>
          <h1 className="text-5xl font-bold text-on-primary mb-4 text-center">
            {t.hero.title}
          </h1>
          <p className="text-xl text-on-primary/90 mb-8 text-center">
            {t.hero.subtitle}
          </p>
        </AnimatedBox>
        
        <AnimatedBox animation="slideUp" delay={200}>
          <div className="bg-surface/95 backdrop-blur-md rounded-3xl p-6 shadow-elevation-3">
            <div className="space-y-4">
              {/* Destination */}
              <div className="relative">
                <label className="text-sm font-medium text-on-surface-variant mb-1 block">
                  {t.common.destination}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => {
                      setDestination(e.target.value)
                      setShowSuggestions(true)
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder={t.common.destinationPlaceholder}
                    className="w-full px-4 py-3 pl-12 bg-surface-container rounded-xl border border-outline-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                    location_on
                  </span>
                  
                  {/* Suggestions */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-surface-container rounded-xl shadow-elevation-2 border border-outline-variant max-h-60 overflow-y-auto z-20">
                      {suggestions.map((city) => (
                        <button
                          key={city}
                          onClick={() => handleDestinationSelect(city)}
                          className="w-full px-4 py-3 text-left hover:bg-surface-container-high transition-colors flex items-center gap-3"
                        >
                          <span className="material-symbols-outlined text-on-surface-variant text-sm">
                            location_city
                          </span>
                          <span className="text-on-surface">{city}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Search Bar */}
              <SearchBar 
                placeholder={t.common.searchPlaceholder} 
                size="large"
                className="w-full"
              />
              
              {/* Popular Destinations */}
              <div className="pt-2">
                <p className="text-sm text-on-surface-variant mb-2">{t.common.popularDestinations} :</p>
                <div className="flex flex-wrap gap-2">
                  {['Paris', 'Marseille', 'Nice', 'Lyon', 'Bordeaux'].map((city) => (
                    <button
                      key={city}
                      onClick={() => handleDestinationSelect(city)}
                      className="px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-colors"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedBox>
      </div>
    </section>
  )
}
