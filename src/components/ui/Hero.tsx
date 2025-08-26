'use client'

import Image from 'next/image'
import { AnimatedBox } from './AnimatedBox'
import EnhancedSearchForm from './EnhancedSearchForm'
import { useI18n } from '@/lib/i18n/context'

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=1080&fit=crop"
        alt="France - Destinations de rêve"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      
      {/* Content */}
      <AnimatedBox 
        className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center"
        animation="fadeIn"
        delay={100}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          {t.hero.subtitle}
        </p>
        
        {/* Enhanced Search Form */}
        <EnhancedSearchForm />
      </AnimatedBox>
    </section>
  )
}
