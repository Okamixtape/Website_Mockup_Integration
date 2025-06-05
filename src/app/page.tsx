'use client'

import { Header } from '@/components/ui/Header'
import { Hero } from '@/components/ui/Hero'
import { Accommodations } from '@/components/ui/Accommodations'
import { Activities } from '@/components/ui/Activities'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="pt-16">
        <Hero />
        <Accommodations />
        <Activities />
        
        {/* Placeholder for upcoming sections */}
        <section className="py-16 bg-surface-container">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-on-surface mb-4">
              Prochaines sections à venir
            </h3>
            <p className="text-on-surface-variant">
              Hébergements • Activités • Plus populaires
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
