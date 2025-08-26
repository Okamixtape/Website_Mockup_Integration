'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'

interface Reservation {
  id: string
  accommodationId: number
  accommodationName: string
  accommodationImage: string
  checkIn: string
  checkOut: string
  guests: number
  totalPrice: number
  bookingDate: string
}

export default function ReservationsPage() {
  const router = useRouter()
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem('reservations') || '[]')
    // Sort by most recent booking date
    storedReservations.sort((a: Reservation, b: Reservation) => new Date(b.bookingDate).getTime() - new Date(a.bookingDate).getTime())
    setReservations(storedReservations)
    setIsLoading(false)
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-on-surface-variant">Chargement des réservations...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-on-surface mb-8">Mes réservations</h1>
        {reservations.length === 0 ? (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant/50 mb-4">luggage</span>
            <h2 className="text-2xl font-semibold text-on-surface mb-2">Aucune réservation pour le moment</h2>
            <p className="text-on-surface-variant mb-6">Il est temps de planifier votre prochaine aventure !</p>
            <Button variant="filled" onClick={() => router.push('/')}>
              Explorer les hébergements
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reservations.map(res => (
              <div key={res.id} className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={res.accommodationImage}
                    alt={res.accommodationName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg text-on-surface mb-2">{res.accommodationName}</h3>
                  <div className="text-sm text-on-surface-variant space-y-2 mt-auto">
                    <div className="flex justify-between">
                      <span>Arrivée:</span>
                      <span className="font-medium text-on-surface">{formatDate(res.checkIn)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Départ:</span>
                      <span className="font-medium text-on-surface">{formatDate(res.checkOut)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Voyageurs:</span>
                      <span className="font-medium text-on-surface">{res.guests}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-outline-variant flex justify-between items-baseline">
                    <span className="text-on-surface-variant">Prix total:</span>
                    <span className="text-xl font-bold text-primary">{res.totalPrice}€</span>
                  </div>
                  <Button 
                    variant='outlined' 
                    className='w-full mt-4' 
                    onClick={() => router.push(`/accommodation/${res.accommodationId}`)}>
                    Voir l'hébergement
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
