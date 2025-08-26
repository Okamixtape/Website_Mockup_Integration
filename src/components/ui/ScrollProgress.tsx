'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrollProgress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className={cn("fixed top-0 left-0 right-0 h-1 bg-surface-container z-50", className)}>
      <div 
        className="h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] transition-all duration-300 ease-out"
        style={{ 
          width: `${progress}%`,
          backgroundPosition: `${progress}% 0`
        }}
      />
    </div>
  )
}
