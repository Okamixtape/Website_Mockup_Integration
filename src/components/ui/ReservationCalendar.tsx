'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ReservationCalendarProps {
  checkIn: Date | null
  checkOut: Date | null
  onCheckInChange: (date: Date | null) => void
  onCheckOutChange: (date: Date | null) => void
}

export function ReservationCalendar({
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange
}: ReservationCalendarProps) {
  const [selectingCheckOut, setSelectingCheckOut] = useState(false)
  
  // Obtenir le mois actuel
  const [currentMonth, setCurrentMonth] = useState(new Date())
  
  // Formater les dates pour l'affichage
  const formatDate = (date: Date | null) => {
    if (!date) return 'Sélectionner'
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'short' 
    })
  }
  
  // Générer les jours du mois
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Jours vides du début
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Jours du mois
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    
    return days
  }
  
  const days = getDaysInMonth(currentMonth)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const isDateDisabled = (date: Date) => {
    return date < today
  }
  
  const isDateInRange = (date: Date) => {
    if (!checkIn || !checkOut) return false
    return date >= checkIn && date <= checkOut
  }
  
  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return
    
    if (!checkIn || (checkIn && checkOut) || date < checkIn) {
      // Première sélection ou reset
      onCheckInChange(date)
      onCheckOutChange(null)
      setSelectingCheckOut(true)
    } else {
      // Deuxième sélection
      onCheckOutChange(date)
      setSelectingCheckOut(false)
    }
  }
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth)
    newMonth.setMonth(currentMonth.getMonth() + (direction === 'next' ? 1 : -1))
    setCurrentMonth(newMonth)
  }
  
  const monthYear = currentMonth.toLocaleDateString('fr-FR', { 
    month: 'long', 
    year: 'numeric' 
  })

  return (
    <div className="space-y-4">
      {/* Sélection des dates */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-on-surface-variant">Arrivée</label>
          <div className={cn(
            "px-3 py-2 border rounded-lg cursor-pointer transition-colors",
            !selectingCheckOut ? "border-primary bg-primary/5" : "border-outline-variant hover:border-outline"
          )}>
            <p className="text-sm font-medium text-on-surface">{formatDate(checkIn)}</p>
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-on-surface-variant">Départ</label>
          <div className={cn(
            "px-3 py-2 border rounded-lg cursor-pointer transition-colors",
            selectingCheckOut ? "border-primary bg-primary/5" : "border-outline-variant hover:border-outline"
          )}>
            <p className="text-sm font-medium text-on-surface">{formatDate(checkOut)}</p>
          </div>
        </div>
      </div>
      
      {/* Calendrier */}
      <div className="bg-surface-container-low rounded-xl p-4">
        {/* En-tête du calendrier */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-1 rounded-lg hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <h3 className="text-lg font-medium text-on-surface capitalize">{monthYear}</h3>
          <button
            onClick={() => navigateMonth('next')}
            className="p-1 rounded-lg hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        
        {/* Jours de la semaine */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, index) => (
            <div key={index} className="text-center text-xs font-medium text-on-surface-variant py-1">
              {day}
            </div>
          ))}
        </div>
        
        {/* Jours du mois */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((date, index) => {
            if (!date) {
              return <div key={index} />
            }
            
            const isDisabled = isDateDisabled(date)
            const isSelected = (checkIn && date.getTime() === checkIn.getTime()) || 
                             (checkOut && date.getTime() === checkOut.getTime())
            const isInRange = isDateInRange(date)
            const isToday = date.getTime() === today.getTime()
            
            return (
              <button
                key={index}
                onClick={() => handleDateClick(date)}
                disabled={isDisabled}
                className={cn(
                  "aspect-square rounded-lg text-sm font-medium transition-all",
                  isDisabled && "text-on-surface-variant/30 cursor-not-allowed",
                  !isDisabled && !isSelected && !isInRange && "hover:bg-surface-container",
                  isSelected && "bg-primary text-on-primary",
                  isInRange && !isSelected && "bg-primary/20 text-primary",
                  isToday && !isSelected && "ring-1 ring-primary"
                )}
              >
                {date.getDate()}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
