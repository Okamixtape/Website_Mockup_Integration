'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedBox } from './AnimatedBox'
import { Button } from './Button'
import { ReservationCalendar } from './ReservationCalendar'
import { ReservationConfirmation } from './ReservationConfirmation'
import { cn } from '@/lib/utils'
import { Accommodation, amenityIcons } from '@/data/accommodations'

interface AccommodationDetailProps {
  accommodation: Accommodation
}

export function AccommodationDetail({ accommodation }: AccommodationDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)
  const [guests, setGuests] = useState(2)
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Simuler plusieurs images pour la galerie
  const images = [
    accommodation.image,
    accommodation.image.replace('400x300', '800x600'),
    accommodation.image.replace('400x300', '600x400'),
    accommodation.image.replace('400x300', '700x500'),
  ]

  const handleReservation = () => {
    if (!checkIn || !checkOut) {
      // Effet de tremblement sur le calendrier
      const calendar = document.querySelector('.reservation-calendar')
      if (calendar) {
        calendar.classList.add('animate-shake')
        setTimeout(() => calendar.classList.remove('animate-shake'), 500)
      }
      return
    }
    
    // Ouvrir la modal de confirmation
    setShowConfirmation(true)
  }

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const calculateTotalPrice = () => {
    return calculateNights() * accommodation.price
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header simple avec retour */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-outline-variant">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-on-surface hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            Retour aux hébergements
          </Link>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Galerie d'images */}
            <AnimatedBox animation="fadeIn">
              <div className="space-y-4">
                {/* Image principale */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src={images[selectedImage]}
                    alt={accommodation.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {accommodation.isPopular && (
                    <div className="absolute top-4 left-4 bg-primary text-on-primary px-4 py-2 rounded-full text-sm font-medium">
                      Populaire
                    </div>
                  )}
                </div>

                {/* Miniatures */}
                <div className="grid grid-cols-4 gap-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        "relative aspect-[4/3] overflow-hidden rounded-lg transition-all",
                        selectedImage === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                      )}
                    >
                      <Image
                        src={image}
                        alt={`Vue ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedBox>

            {/* Informations principales */}
            <AnimatedBox animation="slideUp" delay={100}>
              <div className="space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-on-surface mb-2">{accommodation.name}</h1>
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                      {accommodation.location}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={cn(
                            "material-symbols-outlined text-sm",
                            i < Math.floor(accommodation.rating) ? "text-yellow-500" : "text-on-surface-variant/30"
                          )}
                        >
                          star
                        </span>
                      ))}
                      <span className="ml-1">{accommodation.rating}</span>
                    </div>
                  </div>
                </div>

                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {accommodation.description}
                </p>
              </div>
            </AnimatedBox>

            {/* Équipements */}
            <AnimatedBox animation="slideUp" delay={200}>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-on-surface">Équipements</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {accommodation.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary">
                        {amenityIcons[amenity] || 'check_circle'}
                      </span>
                      <span className="capitalize">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedBox>

            {/* Règles de la maison */}
            <AnimatedBox animation="slideUp" delay={300}>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-on-surface">Règles de la maison</h2>
                <div className="space-y-2 text-on-surface-variant">
                  <p>• Arrivée : 15h00 - 22h00</p>
                  <p>• Départ : avant 11h00</p>
                  <p>• Non-fumeur</p>
                  <p>• Animaux acceptés sur demande</p>
                  <p>• Fêtes/événements non autorisés</p>
                </div>
              </div>
            </AnimatedBox>
          </div>

          {/* Colonne de réservation (1/3) */}
          <div className="lg:col-span-1">
            <AnimatedBox 
              className="sticky top-24 bg-surface-container rounded-2xl p-6 border border-outline-variant shadow-lg"
              animation="slideLeft"
              delay={100}
            >
              <div className="space-y-6">
                {/* Prix */}
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-bold text-on-surface">{accommodation.price}€</span>
                    <span className="text-on-surface-variant ml-2">/ nuit</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "material-symbols-outlined text-xs",
                          i < Math.floor(accommodation.rating) ? "text-yellow-500" : "text-on-surface-variant/30"
                        )}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>

                {/* Calendrier */}
                <ReservationCalendar
                  checkIn={checkIn}
                  checkOut={checkOut}
                  onCheckInChange={setCheckIn}
                  onCheckOutChange={setCheckOut}
                />

                {/* Nombre de voyageurs */}
                <div>
                  <label className="text-sm font-medium text-on-surface-variant">Voyageurs</label>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                    >
                      <span className="material-symbols-outlined">remove</span>
                    </button>
                    <span className="text-lg font-medium text-on-surface w-12 text-center">{guests}</span>
                    <button
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                    >
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>

                {/* Récapitulatif */}
                {checkIn && checkOut && (
                  <div className="space-y-2 pt-4 border-t border-outline-variant">
                    <div className="flex justify-between text-on-surface-variant">
                      <span>{accommodation.price}€ x {calculateNights()} nuits</span>
                      <span>{accommodation.price * calculateNights()}€</span>
                    </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Frais de service</span>
                      <span>{Math.round(accommodation.price * calculateNights() * 0.1)}€</span>
                    </div>
                    <div className="flex justify-between font-semibold text-on-surface pt-2 border-t border-outline-variant">
                      <span>Total</span>
                      <span>{calculateTotalPrice() + Math.round(calculateTotalPrice() * 0.1)}€</span>
                    </div>
                  </div>
                )}

                {/* Bouton de réservation */}
                <Button
                  variant="filled"
                  size="large"
                  className="w-full"
                  onClick={handleReservation}
                >
                  Réserver
                </Button>

                {/* Note */}
                <p className="text-xs text-center text-on-surface-variant">
                  Aucun montant ne sera débité pour le moment
                </p>
              </div>
            </AnimatedBox>
          </div>
        </div>
      </main>

      {/* Modal de confirmation */}
      <ReservationConfirmation
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        accommodationName={accommodation.name}
        checkIn={checkIn!}
        checkOut={checkOut!}
        guests={guests}
        totalPrice={calculateTotalPrice() + Math.round(calculateTotalPrice() * 0.1)}
      />
    </div>
  )
}
