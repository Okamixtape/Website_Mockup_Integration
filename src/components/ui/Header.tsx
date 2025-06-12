'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from './Button'
import { AnimatedBox } from './AnimatedBox'
import { Navigation } from './Navigation'
import { LanguageSelector } from './LanguageSelector'
import { useI18n } from '@/lib/i18n/context'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useI18n()

  return (
    <AnimatedBox
      animation="fadeIn"
      className="sticky top-0 z-50 bg-surface/95 backdrop-blur-lg border-b border-outline-variant"
    >
      <header className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-105 transition-transform">
              Reservia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Navigation />
            <LanguageSelector />
            <Button
              variant="text"
              className="text-primary font-semibold"
            >
              {t.navigation.signUp}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-surface-container transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <AnimatedBox
            animation="slideDown"
            className="md:hidden py-4 border-t border-outline-variant"
          >
            <Navigation mobile />
            <div className="mt-4 pt-4 border-t border-outline-variant flex items-center justify-between">
              <Button
                variant="text"
                className="text-primary font-semibold"
              >
                {t.navigation.signUp}
              </Button>
              <LanguageSelector />
            </div>
          </AnimatedBox>
        )}
      </header>
    </AnimatedBox>
  )
}
