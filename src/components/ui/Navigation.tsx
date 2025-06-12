'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useI18n } from '@/lib/i18n/context'

interface NavigationProps {
  mobile?: boolean
  className?: string
}

export function Navigation({ mobile = false, className }: NavigationProps) {
  const pathname = usePathname()
  const { t } = useI18n()

  const navItems = [
    { 
      label: t.navigation.accommodations, 
      href: '#hebergements',
      icon: 'hotel'
    },
    { 
      label: t.navigation.activities, 
      href: '#activites',
      icon: 'local_activity'
    }
  ]

  return (
    <nav className={cn(
      mobile ? 'flex flex-col space-y-2' : 'flex items-center gap-6',
      className
    )}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'flex items-center gap-2 font-medium transition-colors',
            mobile 
              ? 'px-4 py-2 rounded-lg hover:bg-surface-container' 
              : 'hover:text-primary',
            pathname === item.href ? 'text-primary' : 'text-on-surface-variant'
          )}
        >
          <span className="material-symbols-outlined text-lg">
            {item.icon}
          </span>
          {item.label}
        </Link>
      ))}
    </nav>
  )
}