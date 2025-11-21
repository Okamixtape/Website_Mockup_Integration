'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { AnimatedBox } from './AnimatedBox'
import { Button } from './Button'
import { ImageGallery } from './ImageGallery'
import { cn } from '@/lib/utils'
import { Activity } from '@/data/activities'

interface ActivityDetailProps {
  activity: Activity
}

export function ActivityDetail({ activity }: ActivityDetailProps) {
  const router = useRouter()

  // Utiliser une seule image pour les activités pour l'instant
  const images = [activity.image]

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 pb-32 lg:pb-8">
        <div className="mb-6">
          <Button variant="tonal" size="small" onClick={() => router.back()} icon="arrow_back">
            Retour aux activités
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Galerie d'images avec lightbox */}
            <AnimatedBox animation="fadeIn">
              <ImageGallery
                images={images}
                alt={`${activity.name} à ${activity.city}`}
                aspectRatio="aspect-[4/3]"
              />
            </AnimatedBox>

            {/* Informations principales */}
            <AnimatedBox animation="slideUp" delay={100}>
              <div className="space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-on-surface mb-2">{activity.name}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-on-surface-variant mb-4">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                      {activity.location}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={cn(
                            "material-symbols-outlined text-sm",
                            i < Math.floor(activity.rating) ? "text-yellow-500" : "text-on-surface-variant/30"
                          )}
                        >
                          star
                        </span>
                      ))}
                      <span className="ml-1">{activity.rating}</span>
                      <span className="text-sm">({activity.reviewCount} avis)</span>
                    </div>
                  </div>

                  {/* Info rapide - Duration & Category */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary-container rounded-full">
                      <span className="material-symbols-outlined text-secondary">schedule</span>
                      <span className="font-medium text-on-secondary-container">{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-tertiary-container rounded-full">
                      <span className="material-symbols-outlined text-tertiary">category</span>
                      <span className="font-medium text-on-tertiary-container capitalize">{activity.category}</span>
                    </div>
                    {activity.badge && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-primary-container rounded-full">
                        <span className="material-symbols-outlined text-primary">star</span>
                        <span className="font-medium text-on-primary-container">{activity.badge}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </AnimatedBox>

            {/* Ce qui est inclus */}
            <AnimatedBox animation="slideUp" delay={200}>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  Ce qui est inclus
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activity.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 text-on-surface-variant bg-surface-container p-4 rounded-xl">
                      <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">
                        check_circle
                      </span>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedBox>

            {/* Horaires & Informations pratiques */}
            <AnimatedBox animation="slideUp" delay={300}>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">info</span>
                  Informations pratiques
                </h2>
                <div className="space-y-3 text-on-surface-variant bg-surface-container p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary flex-shrink-0">schedule</span>
                    <div>
                      <p className="font-medium text-on-surface">Horaires d'ouverture</p>
                      <p className="text-sm">Tous les jours : 9h00 - 18h00</p>
                      <p className="text-sm text-on-surface-variant/70">Dernière entrée : 17h30</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary flex-shrink-0">groups</span>
                    <div>
                      <p className="font-medium text-on-surface">Capacité</p>
                      <p className="text-sm">Groupes jusqu'à 15 personnes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary flex-shrink-0">language</span>
                    <div>
                      <p className="font-medium text-on-surface">Langues</p>
                      <p className="text-sm">Français, Anglais, Espagnol</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary flex-shrink-0">accessible</span>
                    <div>
                      <p className="font-medium text-on-surface">Accessibilité</p>
                      <p className="text-sm">Accessible aux personnes à mobilité réduite</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedBox>
          </div>

          {/* Colonne CTA - Desktop sticky sidebar */}
          <div className="lg:col-span-1">
            <AnimatedBox
              className="hidden lg:block sticky top-24 bg-surface-container rounded-2xl p-6 border border-outline-variant shadow-lg"
              animation="slideLeft"
              delay={100}
            >
              <div className="space-y-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-bold text-on-surface">{activity.price ? `${activity.price}€` : 'Gratuit'}</span>
                    {activity.price && <span className="text-on-surface-variant ml-2">/ personne</span>}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "material-symbols-outlined text-xs",
                          i < Math.floor(activity.rating) ? "text-yellow-500" : "text-on-surface-variant/30"
                        )}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info rapide */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-base">groups</span>
                    <span>Jusqu'à 15 personnes</span>
                  </div>
                </div>

                <Button
                  variant="filled"
                  size="xl"
                  className="w-full"
                >
                  Réserver maintenant
                </Button>

                <p className="text-xs text-center text-on-surface-variant">
                  Confirmation instantanée
                </p>
              </div>
            </AnimatedBox>
          </div>
        </div>
      </main>

      {/* Mobile Sticky CTA Bar - French Riviera Luxury */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant shadow-2xl z-40 safe-area-inset-bottom">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Prix */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-on-surface">
                {activity.price ? `${activity.price}€` : 'Gratuit'}
              </span>
              <span className="text-xs text-on-surface-variant">par personne</span>
            </div>

            {/* Bouton Réserver */}
            <Button
              variant="filled"
              size="xl"
              className="flex-1"
            >
              Réserver maintenant
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
