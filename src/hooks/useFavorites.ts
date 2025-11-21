'use client'

import { useState, useEffect, useCallback } from 'react'

type FavoriteType = 'accommodation' | 'activity'

interface Favorite {
  id: number | string
  type: FavoriteType
  addedAt: string
}

const STORAGE_KEY = 'reservia_favorites'

/**
 * Hook pour gérer les favoris avec persistance localStorage
 * Supporte à la fois les hébergements et les activités
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Charger les favoris depuis localStorage au montage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setFavorites(JSON.parse(stored))
      }
    } catch (error) {
      console.error('Error loading favorites:', error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
        // Dispatch event pour synchroniser entre composants
        window.dispatchEvent(new CustomEvent('favoritesUpdated', { detail: favorites }))
      } catch (error) {
        console.error('Error saving favorites:', error)
      }
    }
  }, [favorites, isLoaded])

  // Vérifier si un item est favori
  const isFavorite = useCallback((id: number | string, type: FavoriteType): boolean => {
    return favorites.some(fav => fav.id === id && fav.type === type)
  }, [favorites])

  // Ajouter aux favoris
  const addFavorite = useCallback((id: number | string, type: FavoriteType) => {
    setFavorites(prev => {
      // Éviter les doublons
      if (prev.some(fav => fav.id === id && fav.type === type)) {
        return prev
      }
      return [...prev, { id, type, addedAt: new Date().toISOString() }]
    })
  }, [])

  // Retirer des favoris
  const removeFavorite = useCallback((id: number | string, type: FavoriteType) => {
    setFavorites(prev => prev.filter(fav => !(fav.id === id && fav.type === type)))
  }, [])

  // Toggle favori
  const toggleFavorite = useCallback((id: number | string, type: FavoriteType) => {
    if (isFavorite(id, type)) {
      removeFavorite(id, type)
    } else {
      addFavorite(id, type)
    }
  }, [isFavorite, addFavorite, removeFavorite])

  // Récupérer tous les favoris d'un type
  const getFavoritesByType = useCallback((type: FavoriteType): Favorite[] => {
    return favorites.filter(fav => fav.type === type)
  }, [favorites])

  // Nombre total de favoris
  const totalCount = favorites.length

  // Nombre de favoris par type
  const accommodationCount = favorites.filter(f => f.type === 'accommodation').length
  const activityCount = favorites.filter(f => f.type === 'activity').length

  // Vider tous les favoris
  const clearAllFavorites = useCallback(() => {
    setFavorites([])
  }, [])

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    getFavoritesByType,
    totalCount,
    accommodationCount,
    activityCount,
    clearAllFavorites,
    isLoaded
  }
}

/**
 * Hook simplifié pour un item spécifique
 */
export function useFavoriteItem(id: number | string, type: FavoriteType) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites()

  const isFav = isFavorite(id, type)
  const toggle = useCallback(() => {
    toggleFavorite(id, type)
  }, [id, type, toggleFavorite])

  return {
    isFavorite: isFav,
    toggleFavorite: toggle,
    isLoaded
  }
}
