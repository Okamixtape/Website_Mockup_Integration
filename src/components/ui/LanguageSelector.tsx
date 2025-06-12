'use client'

import { useState, useRef, useEffect } from 'react'
import { useI18n } from '@/lib/i18n/context'
import { locales, localeNames, localeFlags } from '@/lib/i18n/config'
import { AnimatedBox } from './AnimatedBox'

export function LanguageSelector() {
  const { locale, setLocale } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-on-surface hover:bg-surface-container-high rounded-full transition-colors"
        aria-label="Select language"
      >
        <span className="text-lg">{localeFlags[locale]}</span>
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <span className="material-symbols-outlined text-sm">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </button>

      {isOpen && (
        <AnimatedBox
          animation="fadeIn"
          className="absolute right-0 mt-2 w-48 bg-surface-container rounded-lg shadow-lg overflow-hidden z-50"
        >
          <ul className="py-1">
            {locales.map((lang) => (
              <li key={lang}>
                <button
                  onClick={() => {
                    setLocale(lang)
                    setIsOpen(false)
                  }}
                  className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-surface-container-high transition-colors ${
                    locale === lang ? 'bg-primary/10 text-primary' : 'text-on-surface'
                  }`}
                >
                  <span className="text-lg">{localeFlags[lang]}</span>
                  <span className="text-sm font-medium">{localeNames[lang]}</span>
                  {locale === lang && (
                    <span className="material-symbols-outlined text-sm ml-auto">
                      check
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </AnimatedBox>
      )}
    </div>
  )
}
