'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useFavorites } from '@/hooks/useFavorites'
import { accommodations } from '@/data/accommodations'
import { activities } from '@/data/activities'
import { AccommodationCard } from '@/components/ui/AccommodationCard'
import { ActivityCard } from '@/components/ui/ActivityCard'
import { Button } from '@/components/ui/Button'
import { AnimatedBox } from '@/components/ui/AnimatedBox'

export default function FavoritesPage() {
  const router = useRouter()
  const {
    favorites,
    accommodationCount,
    activityCount,
    clearAllFavorites,
    isLoaded
  } = useFavorites()

  const [activeTab, setActiveTab] = useState<'all' | 'accommodations' | 'activities'>('all')

  // Récupérer les données complètes des favoris
  const favoriteAccommodations = accommodations.filter(acc =>
    favorites.some(fav => fav.type === 'accommodation' && fav.id === acc.id)
  )

  const favoriteActivities = activities.filter(act =>
    favorites.some(fav => fav.type === 'activity' && fav.id === act.id)
  )

  const totalCount = accommodationCount + activityCount

  // État de chargement
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant animate-pulse">
            favorite
          </span>
          <p className="text-on-surface-variant">Chargement de vos favoris...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <AnimatedBox animation="fadeIn">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-5xl text-primary">
                favorite
              </span>
              <h1 className="text-4xl font-bold text-on-surface">Mes Favoris</h1>
            </div>
            <p className="text-lg text-on-surface-variant">
              {totalCount === 0
                ? "Vous n'avez pas encore de favoris"
                : `${totalCount} favori${totalCount > 1 ? 's' : ''} sauvegardé${totalCount > 1 ? 's' : ''}`
              }
            </p>
          </div>
        </AnimatedBox>

        {/* Empty State */}
        {totalCount === 0 ? (
          <AnimatedBox animation="slideUp" className="text-center py-20">
            <span className="material-symbols-outlined text-8xl text-on-surface-variant/30 mb-6 block">
              bookmark_border
            </span>
            <h2 className="text-2xl font-semibold text-on-surface mb-3">
              Aucun favori pour le moment
            </h2>
            <p className="text-on-surface-variant mb-8 max-w-md mx-auto">
              Explorez nos hébergements et activités, puis cliquez sur le cœur pour sauvegarder vos préférés !
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="filled" onClick={() => router.push('/')}>
                <span className="material-symbols-outlined mr-2">home</span>
                Explorer les hébergements
              </Button>
              <Button variant="outlined" onClick={() => router.push('/#activities')}>
                <span className="material-symbols-outlined mr-2">explore</span>
                Découvrir les activités
              </Button>
            </div>
          </AnimatedBox>
        ) : (
          <>
            {/* Tabs + Clear All */}
            <AnimatedBox animation="slideUp" delay={100}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-outline-variant">
                {/* Tabs */}
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      activeTab === 'all'
                        ? 'bg-primary text-on-primary shadow-md'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    Tous ({totalCount})
                  </button>
                  <button
                    onClick={() => setActiveTab('accommodations')}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      activeTab === 'accommodations'
                        ? 'bg-primary text-on-primary shadow-md'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm mr-1 align-middle">
                      hotel
                    </span>
                    Hébergements ({accommodationCount})
                  </button>
                  <button
                    onClick={() => setActiveTab('activities')}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      activeTab === 'activities'
                        ? 'bg-primary text-on-primary shadow-md'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm mr-1 align-middle">
                      explore
                    </span>
                    Activités ({activityCount})
                  </button>
                </div>

                {/* Clear All */}
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    if (confirm('Êtes-vous sûr de vouloir retirer tous vos favoris ?')) {
                      clearAllFavorites()
                    }
                  }}
                >
                  <span className="material-symbols-outlined text-sm mr-1">
                    delete_outline
                  </span>
                  Tout effacer
                </Button>
              </div>
            </AnimatedBox>

            {/* Hébergements favoris */}
            {(activeTab === 'all' || activeTab === 'accommodations') && favoriteAccommodations.length > 0 && (
              <div className="mb-12">
                <AnimatedBox animation="fadeIn" delay={200}>
                  <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined">hotel</span>
                    Hébergements favoris
                  </h2>
                </AnimatedBox>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteAccommodations.map((accommodation, index) => (
                    <AnimatedBox
                      key={accommodation.id}
                      animation="slideUp"
                      delay={250 + index * 50}
                    >
                      <AccommodationCard accommodation={accommodation} />
                    </AnimatedBox>
                  ))}
                </div>
              </div>
            )}

            {/* Activités favorites */}
            {(activeTab === 'all' || activeTab === 'activities') && favoriteActivities.length > 0 && (
              <div>
                <AnimatedBox animation="fadeIn" delay={200}>
                  <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined">explore</span>
                    Activités favorites
                  </h2>
                </AnimatedBox>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {favoriteActivities.map((activity, index) => (
                    <AnimatedBox
                      key={activity.id}
                      animation="slideUp"
                      delay={250 + index * 50}
                    >
                      <ActivityCard activity={activity} />
                    </AnimatedBox>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state pour onglet actif */}
            {activeTab === 'accommodations' && favoriteAccommodations.length === 0 && (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant/30 mb-4 block">
                  hotel
                </span>
                <p className="text-on-surface-variant mb-6">
                  Aucun hébergement dans vos favoris
                </p>
                <Button variant="filled" onClick={() => router.push('/')}>
                  Explorer les hébergements
                </Button>
              </div>
            )}

            {activeTab === 'activities' && favoriteActivities.length === 0 && (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant/30 mb-4 block">
                  explore
                </span>
                <p className="text-on-surface-variant mb-6">
                  Aucune activité dans vos favoris
                </p>
                <Button variant="filled" onClick={() => router.push('/#activities')}>
                  Découvrir les activités
                </Button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
