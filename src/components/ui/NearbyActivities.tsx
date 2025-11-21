'use client'

import { AnimatedBox } from './AnimatedBox'
import { ActivityCard } from './ActivityCard'
import { Accommodation } from '@/data/accommodations'
import { activities } from '@/data/activities'
import { getNeighborhoodName } from '@/data/neighborhoods'
import { useI18n } from '@/lib/i18n/context'

interface NearbyActivitiesProps {
  accommodation: Accommodation
  maxItems?: number
  className?: string
}

export function NearbyActivities({
  accommodation,
  maxItems = 4,
  className
}: NearbyActivitiesProps) {
  const { t } = useI18n()

  // Filtrer les activités du même quartier
  const nearbyActivities = activities
    .filter(activity =>
      activity.neighborhoodId === accommodation.neighborhoodId &&
      activity.city === accommodation.city
    )
    .slice(0, maxItems)

  // Si aucune activité dans le même quartier, chercher dans la même ville
  const sameCityActivities = nearbyActivities.length === 0
    ? activities
        .filter(activity => activity.city === accommodation.city)
        .slice(0, maxItems)
    : []

  const displayActivities = nearbyActivities.length > 0
    ? nearbyActivities
    : sameCityActivities

  // Ne rien afficher si aucune activité trouvée
  if (displayActivities.length === 0) {
    return null
  }

  const neighborhoodName = getNeighborhoodName(
    accommodation.city,
    accommodation.neighborhoodId
  )

  // Déterminer le titre selon si c'est le même quartier ou juste la même ville
  const isNeighborhood = nearbyActivities.length > 0
  const title = isNeighborhood
    ? `À faire à proximité • ${neighborhoodName}`
    : `À découvrir à ${accommodation.city}`

  const subtitle = isNeighborhood
    ? `Découvrez les meilleures activités à quelques minutes de votre hébergement`
    : `Explorez les activités incontournables de la ville`

  return (
    <section className={className}>
      <AnimatedBox animation="fadeIn" className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-on-surface">
                {title}
              </h2>
              {isNeighborhood && (
                <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">near_me</span>
                  À 10min à pied
                </span>
              )}
            </div>
            <p className="text-lg text-on-surface-variant">
              {subtitle}
            </p>
          </div>
        </div>
      </AnimatedBox>

      {/* Grille d'activités */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayActivities.map((activity, index) => (
          <AnimatedBox
            key={activity.id}
            animation="slideUp"
            delay={index * 100}
          >
            <ActivityCard activity={activity} />
          </AnimatedBox>
        ))}
      </div>

      {/* Call to action si plus d'activités disponibles */}
      {activities.filter(a => a.city === accommodation.city).length > displayActivities.length && (
        <AnimatedBox animation="fadeIn" delay={400} className="mt-8 text-center">
          <a
            href={`/activities?city=${encodeURIComponent(accommodation.city)}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-full font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Voir toutes les activités à {accommodation.city}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </AnimatedBox>
      )}
    </section>
  )
}
