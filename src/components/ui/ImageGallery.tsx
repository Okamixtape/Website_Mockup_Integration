'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { AnimatedBox } from './AnimatedBox'

interface ImageGalleryProps {
  images: string[]
  alt: string
  className?: string
  aspectRatio?: string
}

/**
 * Galerie d'images avec lightbox professionnel
 * Features:
 * - Modal plein écran
 * - Navigation clavier (←/→/Esc)
 * - Swipe tactile sur mobile
 * - Zoom
 * - Compteur d'images
 * - Thumbnails cliquables
 */
export function ImageGallery({
  images,
  alt,
  className,
  aspectRatio = 'aspect-[4/3]'
}: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Navigation
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsZoomed(false)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsZoomed(false)
  }, [images.length])

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsZoomed(false)
  }, [])

  const toggleZoom = useCallback(() => {
    setIsZoomed(prev => !prev)
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
    setIsZoomed(false)
  }, [])

  // Navigation clavier
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
        case 'Escape':
          closeLightbox()
          break
        case ' ':
          e.preventDefault()
          toggleZoom()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, goToNext, goToPrevious, closeLightbox, toggleZoom])

  // Bloquer le scroll quand le lightbox est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Gestion du swipe tactile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }
  }

  if (images.length === 0) {
    return (
      <div className={cn('bg-surface-container rounded-2xl flex items-center justify-center', aspectRatio, className)}>
        <span className="text-on-surface-variant">Aucune image disponible</span>
      </div>
    )
  }

  return (
    <>
      {/* Grille de thumbnails */}
      <div className={className}>
        {/* Image principale */}
        <div
          className={cn('relative overflow-hidden rounded-2xl cursor-pointer group', aspectRatio)}
          onClick={() => {
            setCurrentIndex(0)
            setIsOpen(true)
          }}
        >
          <Image
            src={images[0]}
            alt={`${alt} - image principale`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            priority
          />

          {/* Overlay hover avec icône zoom */}
          <div className="absolute inset-0 bg-scrim/0 group-hover:bg-scrim/30 transition-colors duration-300 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              zoom_in
            </span>
          </div>

          {/* Badge nombre d'images */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-scrim/70 backdrop-blur-sm text-white rounded-full text-sm font-medium">
              <span className="material-symbols-outlined text-sm mr-1 align-text-bottom">
                photo_library
              </span>
              {images.length} photos
            </div>
          )}
        </div>

        {/* Grille de thumbnails (si plus d'une image) */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2 mt-2">
            {images.slice(1, 5).map((image, index) => (
              <button
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group border-2 border-transparent hover:border-primary transition-colors"
                onClick={() => {
                  setCurrentIndex(index + 1)
                  setIsOpen(true)
                }}
              >
                <Image
                  src={image}
                  alt={`${alt} - vue ${index + 2}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 25vw, 150px"
                />

                {/* Overlay sur dernière image si plus de 5 images */}
                {index === 3 && images.length > 5 && (
                  <div className="absolute inset-0 bg-scrim/60 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      +{images.length - 5}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Conteneur principal */}
          <div
            className="relative w-full h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-4">
                {/* Compteur */}
                <div className="text-white font-medium">
                  {currentIndex + 1} / {images.length}
                </div>

                {/* Instructions */}
                <div className="hidden md:flex items-center gap-4 text-white/60 text-sm">
                  <span>← → Navigation</span>
                  <span>Espace: Zoom</span>
                  <span>Échap: Fermer</span>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleZoom}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                  aria-label={isZoomed ? "Dézoomer" : "Zoomer"}
                >
                  <span className="material-symbols-outlined">
                    {isZoomed ? 'zoom_out' : 'zoom_in'}
                  </span>
                </button>

                <button
                  onClick={closeLightbox}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                  aria-label="Fermer"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>

            {/* Image principale */}
            <div
              className="flex-1 flex items-center justify-center p-4 md:p-8 overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={cn(
                  'relative w-full h-full transition-transform duration-300 cursor-zoom-in',
                  isZoomed && 'scale-150 cursor-zoom-out'
                )}
                onClick={toggleZoom}
              >
                <Image
                  src={images[currentIndex]}
                  alt={`${alt} - vue ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            {/* Boutons de navigation (gauche/droite) */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:scale-110"
                  aria-label="Image précédente"
                >
                  <span className="material-symbols-outlined text-3xl">chevron_left</span>
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:scale-110"
                  aria-label="Image suivante"
                >
                  <span className="material-symbols-outlined text-3xl">chevron_right</span>
                </button>
              </>
            )}

            {/* Thumbnails en bas */}
            {images.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={cn(
                        'relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all',
                        currentIndex === index
                          ? 'border-white scale-105'
                          : 'border-white/20 hover:border-white/50'
                      )}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

/**
 * Version simple sans thumbnails (pour pages où l'espace est limité)
 */
export function SimpleImageGallery({
  images,
  alt,
  className,
  aspectRatio = 'aspect-[4/3]'
}: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (images.length === 0) return null

  return (
    <>
      <div
        className={cn('relative overflow-hidden rounded-2xl cursor-pointer group', aspectRatio, className)}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        <div className="absolute inset-0 bg-scrim/0 group-hover:bg-scrim/30 transition-colors duration-300 flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-6xl opacity-0 group-hover:opacity-100 transition-opacity">
            zoom_in
          </span>
        </div>
      </div>

      {isOpen && (
        <ImageGallery
          images={images}
          alt={alt}
          className="hidden"
        />
      )}
    </>
  )
}
