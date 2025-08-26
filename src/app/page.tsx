import { Hero } from '@/components/ui/Hero'
import { Accommodations } from '@/components/ui/Accommodations'
import { Activities } from '@/components/ui/Activities'
import { GlobalFilters } from '@/components/ui/GlobalFilters'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface">
      <main>
        
        <Hero />
        
        {/* Filtres globaux pour la destination */}
        <GlobalFilters />
        
        {/* Accommodations et Activities - Below-the-fold */}
        <section id="accommodations">
          <Accommodations />
        </section>
        
        <section id="activities">
          <Activities />
        </section>
      </main>
    </div>
  )
}
