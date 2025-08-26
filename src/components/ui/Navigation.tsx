'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useI18n } from '@/lib/i18n/context'

interface NavigationProps {
  mobile?: boolean
  className?: string
}

export function Navigation({ mobile = false, className }: NavigationProps) {
  const pathname = usePathname()
  const { t } = useI18n()
  const router = useRouter()

  const navItems = [
    {
      label: t.navigation.accommodations, 
      href: '/#accommodations',
      basePath: '/accommodation',
      icon: 'hotel',
      sectionId: 'accommodations'
    },
    {
      label: t.navigation.activities, 
      href: '/#activities',
      basePath: '/activity',
      icon: 'local_activity',
      sectionId: 'activities'
    }
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#' + sectionId);
    }
  };

  return (
    <nav className={cn(
      mobile ? 'flex flex-col space-y-2' : 'flex items-center gap-6',
      className
    )}>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleNavClick(e, item.sectionId)}
          className={cn(
            'flex items-center gap-2 font-medium transition-colors cursor-pointer',
            mobile 
              ? 'px-4 py-2 rounded-lg hover:bg-surface-container' 
              : 'hover:text-primary',
            pathname.startsWith(item.basePath) ? 'text-primary' : 'text-on-surface-variant'
          )}
        >
          <span className="material-symbols-outlined text-lg">
            {item.icon}
          </span>
          {item.label}
        </a>
      ))}
    </nav>
  )
}