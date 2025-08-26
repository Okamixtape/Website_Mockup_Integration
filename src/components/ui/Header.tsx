'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from './Button'
import { AnimatedBox } from './AnimatedBox'
import { Navigation } from './Navigation'
import { LanguageSelector } from './LanguageSelector'
import { useI18n } from '@/lib/i18n/context'
import { useAuth } from '@/hooks/useAuth'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useI18n()
  const { isLoggedIn, login, logout } = useAuth()
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

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
            {isLoggedIn ? (
              <div className="relative">
                <div className="flex items-center gap-4">
                  <Button variant="tonal" size="small" onClick={() => window.location.href='/reservations'}>
                    Mes réservations
                  </Button>
                  <button 
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} 
                    className="rounded-full w-10 h-10 bg-primary/10 flex items-center justify-center text-primary"
                  >
                    <span className="material-symbols-outlined">person</span>
                  </button>
                </div>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-surface-container rounded-lg shadow-lg py-1 z-10">
                    <button 
                      onClick={logout} 
                      className="w-full text-left px-4 py-2 text-sm text-on-surface-variant hover:bg-primary/10"
                    >
                      Déconnexion
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                variant="filled"
                onClick={login}
              >
                Connexion
              </Button>
            )}
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
            <div className="mt-4 pt-4 border-t border-outline-variant">
              {isLoggedIn ? (
                <div className="space-y-4">
                  <Button variant="tonal" size="small" onClick={() => window.location.href='/reservations'} className="w-full">
                    Mes réservations
                  </Button>
                  <Button variant="outlined" size="small" onClick={logout} className="w-full">
                    Déconnexion
                  </Button>
                </div>
              ) : (
                <Button variant="filled" onClick={login} className="w-full">
                  Connexion
                </Button>
              )}
              <div className="mt-4 pt-4 border-t border-outline-variant">
                <LanguageSelector />
              </div>
            </div>
          </AnimatedBox>
        )}
      </header>
    </AnimatedBox>
  )
}
