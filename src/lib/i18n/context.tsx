'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale, defaultLocale } from './config'
import { translations, TranslationKeys } from './translations'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    // Charger la langue depuis le localStorage au démarrage
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && translations[savedLocale]) {
      setLocaleState(savedLocale)
    } else {
      // Détecter la langue du navigateur
      const browserLang = navigator.language.split('-')[0]
      if (browserLang in translations) {
        setLocaleState(browserLang as Locale)
      }
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
    // Optionnel : mettre à jour l'attribut lang du document
    document.documentElement.lang = newLocale
  }

  const value: I18nContextType = {
    locale,
    setLocale,
    t: translations[locale]
  }

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
