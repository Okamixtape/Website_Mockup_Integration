'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from './Button'
import { useTheme } from '@/components/providers/ThemeProvider'

export interface NavigationItem {
  label: string
  href: string
  icon?: string
  badge?: number
}

export interface NavigationProps {
  items: NavigationItem[]
  logo?: React.ReactNode
  actions?: React.ReactNode
  variant?: 'top' | 'side' | 'bottom'
  className?: string
}

export function Navigation({
  items,
  logo,
  actions,
  variant = 'top',
  className,
}: NavigationProps) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect for top navigation
  useEffect(() => {
    if (variant !== 'top') return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [variant])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  // Top Navigation (Header)
  if (variant === 'top') {
    return (
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-surface/95 backdrop-blur-md shadow-elevation-2' 
            : 'bg-transparent',
          className
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container mx-auto">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Logo */}
            {logo && (
              <Link href="/" className="flex items-center gap-2">
                {logo}
              </Link>
            )}

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {items.map((item) => (
                <NavigationLink
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  isActive={isActive(item.href)}
                  badge={item.badge}
                >
                  {item.label}
                </NavigationLink>
              ))}
            </div>

            {/* Actions & Theme Toggle */}
            <div className="flex items-center gap-2">
              {actions}
              <Button
                variant="text"
                size="small"
                icon={theme === 'dark' ? 'light_mode' : 'dark_mode'}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
              />
              
              {/* Mobile Menu Button */}
              <Button
                variant="text"
                size="small"
                icon={isMobileMenuOpen ? 'close' : 'menu'}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-4 py-4 bg-surface-container border-t border-outline-variant">
                  {items.map((item) => (
                    <MobileNavigationLink
                      key={item.href}
                      href={item.href}
                      icon={item.icon}
                      isActive={isActive(item.href)}
                      badge={item.badge}
                    >
                      {item.label}
                    </MobileNavigationLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    )
  }

  // Bottom Navigation (Mobile)
  if (variant === 'bottom') {
    return (
      <motion.nav
        className={cn(
          'fixed bottom-0 left-0 right-0 z-50',
          'bg-surface-container border-t border-outline-variant',
          'md:hidden', // Only show on mobile
          className
        )}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-around px-2 py-2">
          {items.slice(0, 5).map((item) => ( // Limit to 5 items for mobile
            <BottomNavigationItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={isActive(item.href)}
              badge={item.badge}
            />
          ))}
        </div>
      </motion.nav>
    )
  }

  // Side Navigation (Desktop)
  return (
    <motion.aside
      className={cn(
        'fixed left-0 top-0 h-full w-64 z-40',
        'bg-surface-container border-r border-outline-variant',
        'hidden lg:flex flex-col',
        className
      )}
      initial={{ x: -264 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      {logo && (
        <div className="flex items-center gap-2 p-6 border-b border-outline-variant">
          {logo}
        </div>
      )}

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2">
        {items.map((item) => (
          <SideNavigationLink
            key={item.href}
            href={item.href}
            icon={item.icon}
            isActive={isActive(item.href)}
            badge={item.badge}
          >
            {item.label}
          </SideNavigationLink>
        ))}
      </nav>

      {/* Actions */}
      {actions && (
        <div className="p-4 border-t border-outline-variant">
          {actions}
        </div>
      )}
    </motion.aside>
  )
}

// Navigation Link Components
function NavigationLink({
  href,
  children,
  icon,
  isActive,
  badge,
}: {
  href: string
  children: React.ReactNode
  icon?: string
  isActive: boolean
  badge?: number
}) {
  return (
    <Link href={href}>
      <motion.div
        className={cn(
          'relative flex items-center gap-2 px-3 py-2 rounded-full',
          'text-sm font-medium transition-colors',
          isActive
            ? 'bg-secondary-container text-on-secondary-container'
            : 'text-on-surface hover:bg-surface-container'
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon && (
          <span className="material-symbols-outlined text-lg">
            {icon}
          </span>
        )}
        {children}
        {badge && badge > 0 && (
          <span className="bg-error text-on-error text-xs rounded-full min-w-[16px] h-4 flex items-center justify-center px-1">
            {badge > 99 ? '99+' : badge}
          </span>
        )}
      </motion.div>
    </Link>
  )
}

function MobileNavigationLink({
  href,
  children,
  icon,
  isActive,
  badge,
}: {
  href: string
  children: React.ReactNode
  icon?: string
  isActive: boolean
  badge?: number
}) {
  return (
    <Link href={href}>
      <motion.div
        className={cn(
          'flex items-center gap-3 px-3 py-3 rounded-lg mb-1',
          'text-base font-medium transition-colors',
          isActive
            ? 'bg-secondary-container text-on-secondary-container'
            : 'text-on-surface hover:bg-surface-container'
        )}
        whileTap={{ scale: 0.98 }}
      >
        {icon && (
          <span className="material-symbols-outlined text-xl">
            {icon}
          </span>
        )}
        <span className="flex-1">{children}</span>
        {badge && badge > 0 && (
          <span className="bg-error text-on-error text-xs rounded-full min-w-[18px] h-5 flex items-center justify-center px-2">
            {badge > 99 ? '99+' : badge}
          </span>
        )}
      </motion.div>
    </Link>
  )
}

function SideNavigationLink({
  href,
  children,
  icon,
  isActive,
  badge,
}: {
  href: string
  children: React.ReactNode
  icon?: string
  isActive: boolean
  badge?: number
}) {
  return (
    <Link href={href}>
      <motion.div
        className={cn(
          'relative flex items-center gap-3 px-3 py-3 rounded-lg',
          'text-sm font-medium transition-colors',
          isActive
            ? 'bg-secondary-container text-on-secondary-container'
            : 'text-on-surface hover:bg-surface-container'
        )}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
      >
        {icon && (
          <span className="material-symbols-outlined text-xl">
            {icon}
          </span>
        )}
        <span className="flex-1">{children}</span>
        {badge && badge > 0 && (
          <span className="bg-error text-on-error text-xs rounded-full min-w-[18px] h-5 flex items-center justify-center px-2">
            {badge > 99 ? '99+' : badge}
          </span>
        )}
      </motion.div>
    </Link>
  )
}

function BottomNavigationItem({
  href,
  icon,
  label,
  isActive,
  badge,
}: {
  href: string
  icon?: string
  label: string
  isActive: boolean
  badge?: number
}) {
  return (
    <Link href={href}>
      <motion.div
        className={cn(
          'relative flex flex-col items-center gap-1 px-3 py-2 rounded-lg min-w-[64px]',
          'text-xs font-medium transition-colors',
          isActive
            ? 'text-on-secondary-container'
            : 'text-on-surface-variant'
        )}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          {icon && (
            <span className={cn(
              'material-symbols-outlined text-2xl',
              isActive && 'text-on-secondary-container'
            )}>
              {icon}
            </span>
          )}
          {badge && badge > 0 && (
            <span className="absolute -top-1 -right-1 bg-error text-on-error text-xs rounded-full min-w-[16px] h-4 flex items-center justify-center px-1">
              {badge > 9 ? '9+' : badge}
            </span>
          )}
        </div>
        <span className="truncate max-w-full">
          {label}
        </span>
        {isActive && (
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary-container rounded-full"
            layoutId="bottomNavIndicator"
          />
        )}
      </motion.div>
    </Link>
  )
}
