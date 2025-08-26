'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'

interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
  onClose?: () => void
}

export function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const icons = {
    success: 'check_circle',
    error: 'error',
    info: 'info'
  }

  const colors = {
    success: 'bg-tertiary text-on-tertiary',
    error: 'bg-error text-on-error',
    info: 'bg-primary text-on-primary'
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className={cn(
            'fixed bottom-8 right-8 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md z-50',
            colors[type]
          )}
        >
          <span className="material-symbols-outlined fill">{icons[type]}</span>
          <span className="font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
