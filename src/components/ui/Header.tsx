'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button'
import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const navigationItems = [
    { label: 'Hébergements', href: '#hebergements', icon: 'hotel' },
    { label: 'Activités', href: '#activites', icon: 'local_activity' },
  ]

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant',
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-xl">
                travel_explore
              </span>
            </div>
            <h1 className="text-2xl font-bold text-primary">Reservia</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors duration-200 font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-symbols-outlined text-lg">
                  {item.icon}
                </span>
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <motion.div 
            className="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-2 border border-outline-variant min-w-[300px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="material-symbols-outlined text-on-surface-variant mr-3">
              location_on
            </span>
            <input
              type="text"
              placeholder="Marseille, France"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-on-surface placeholder:text-on-surface-variant outline-none"
            />
            <Button
              variant="filled"
              size="small"
              icon="search"
              className="ml-2"
            >
              Rechercher
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-surface-container transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="material-symbols-outlined text-on-surface">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </motion.button>
        </div>

        {/* Mobile Search Bar */}
        <motion.div 
          className="lg:hidden pb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center bg-surface-container rounded-full px-4 py-3 border border-outline-variant">
            <span className="material-symbols-outlined text-on-surface-variant mr-3">
              location_on
            </span>
            <input
              type="text"
              placeholder="Marseille, France"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-on-surface placeholder:text-on-surface-variant outline-none"
            />
            <Button
              variant="filled"
              size="small"
              icon="search"
              className="ml-2"
            >
              Rechercher
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-surface-container border-t border-outline-variant"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-high transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="material-symbols-outlined text-primary">
                      {item.icon}
                    </span>
                    <span className="text-on-surface font-medium">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
