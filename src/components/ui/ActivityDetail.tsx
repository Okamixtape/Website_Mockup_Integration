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
      <main className="container mx-auto px-4 py-8">
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

            <AnimatedBox animation="slideUp" delay={100}>
              <div className="space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-on-surface mb-2">{activity.name}</h1>
                  <div className="flex items-center gap-4 text-on-surface-variant">
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
                    </div>
                  </div>
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </AnimatedBox>
          </div>

          <div className="lg:col-span-1">
            <AnimatedBox 
              className="sticky top-24 bg-surface-container rounded-2xl p-6 border border-outline-variant shadow-lg"
              animation="slideLeft"
              delay={100}
            >
              <div className="space-y-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-bold text-on-surface">{activity.price ? `${activity.price}€` : 'Gratuit'}</span>
                    {activity.price && <span className="text-on-surface-variant ml-2">/ personne</span>}
                  </div>
                </div>
                <Button
                  variant="filled"
                  size="large"
                  className="w-full"
                >
                  Voir les disponibilités
                </Button>
              </div>
            </AnimatedBox>
          </div>
        </div>
      </main>
    </div>
  )
}
