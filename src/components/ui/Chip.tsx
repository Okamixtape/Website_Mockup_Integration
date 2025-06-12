'use client'

import { cn } from '@/lib/utils'

interface ChipProps {
  label: string
  icon?: string
  selected?: boolean
  onClick?: () => void
  className?: string
}

export function Chip({
  label,
  icon,
  selected = false,
  onClick,
  className
}: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full',
        'text-sm font-medium transition-all duration-200',
        selected
          ? 'bg-primary text-on-primary'
          : 'bg-surface-container text-on-surface hover:bg-surface-container-high',
        className
      )}
    >
      {icon && (
        <span className="material-symbols-outlined text-[18px]">
          {icon}
        </span>
      )}
      {label}
    </button>
  )
}
