'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-scrim/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-surface-container-high rounded-3xl p-8 max-w-md w-full shadow-2xl">
              {/* Success Icon Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 15 }}
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring", damping: 10 }}
                  className="material-symbols-outlined text-primary text-4xl"
                >
                  check_circle
                </motion.span>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
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
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-primary/5 rounded-xl p-3"
                >
                  <p className="text-xs text-on-surface-variant">Numéro de réservation</p>
                  <p className="font-mono text-sm font-medium text-primary">
                    RSV-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                </motion.div>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 space-y-3"
              >
                <Button
                  variant="filled"
                  size="large"
                  className="w-full"
                  onClick={onClose}
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
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
