'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  id: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, label, id, ...props }, ref) => {
  return (
    <div>
      {label && <label htmlFor={id} className="block text-sm font-medium text-on-surface-variant mb-1">{label}</label>}
      <textarea
        id={id}
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-outline bg-surface px-3 py-2 text-sm text-on-surface',
          'ring-offset-background placeholder:text-on-surface-variant/50 focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
