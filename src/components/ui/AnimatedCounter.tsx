'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function AnimatedCounter({ 
  value, 
  duration = 1000,
  className,
  prefix = '',
  suffix = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const endValue = value

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * endValue)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [value, duration])

  return (
    <span className={cn("tabular-nums", className)}>
      {prefix}{count}{suffix}
    </span>
  )
}
