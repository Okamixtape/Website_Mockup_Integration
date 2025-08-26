'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './Button'

interface ReservationConfirmationProps {
  isOpen: boolean
  onClose: () => void
  accommodationName: string
  checkIn: Date
  checkOut: Date
  guests: number
  totalPrice: number
}

export function ReservationConfirmation({
  isOpen,
  onClose,
  accommodationName,
  checkIn,
  checkOut,
  guests,
  totalPrice
}: ReservationConfirmationProps) {
  const router = useRouter()
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-scrim/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-surface-container-high rounded-3xl p-8 max-w-md w-full shadow-2xl">
              {/* Success Icon Animation */}
              <div
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <span
                  className="material-symbols-outlined text-primary text-4xl"
                >
                  check_circle
                </span>
              </div>

              {/* Content */}
              <div
                className="text-center space-y-4"
              >
                <h2 className="text-2xl font-bold text-on-surface">
                  Réservation confirmée !
                </h2>
                
                <p className="text-on-surface-variant">
                  Votre séjour est confirmé. Vous recevrez un email de confirmation.
                </p>

                {/* Reservation Details */}
                <div className="bg-surface-container rounded-2xl p-4 mt-6 space-y-3 text-left">
                  <div>
                    <p className="text-sm text-on-surface-variant">Hébergement</p>
                    <p className="font-medium text-on-surface">{accommodationName}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm text-on-surface-variant">Arrivée</p>
                      <p className="font-medium text-on-surface">{formatDate(checkIn)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-on-surface-variant">Départ</p>
                      <p className="font-medium text-on-surface">{formatDate(checkOut)}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-outline-variant">
                    <div>
                      <p className="text-sm text-on-surface-variant">Voyageurs</p>
                      <p className="font-medium text-on-surface">{guests} {guests > 1 ? 'personnes' : 'personne'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-on-surface-variant">Total</p>
                      <p className="text-xl font-bold text-primary">{totalPrice}€</p>
                    </div>
                  </div>
                </div>

                {/* Booking ID */}
                <div
                  className="bg-primary/5 rounded-xl p-3"
                >
                  <p className="text-xs text-on-surface-variant">Numéro de réservation</p>
                  <p className="font-mono text-sm font-medium text-primary">
                    RSV-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div
                className="mt-8 space-y-3"
              >
                <Button
                  variant="filled"
                  size="large"
                  className="w-full"
                  onClick={() => router.push('/reservations')}
                >
                  Voir mes réservations
                </Button>
                
                <Button
                  variant="text"
                  size="large"
                  className="w-full"
                  onClick={onClose}
                >
                  Fermer
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
