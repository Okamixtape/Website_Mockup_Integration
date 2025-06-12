import { Header } from '@/components/ui/Header'
import { Hero } from '@/components/ui/Hero'
import { Accommodations } from '@/components/ui/Accommodations'
import { Activities } from '@/components/ui/Activities'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="pt-16">
        <Header />
        
        <Hero />
        
        {/* Accommodations et Activities - Below-the-fold */}
        <Accommodations />
        
        <Activities />
        
        {/* Placeholder for upcoming sections */}
        <section className="py-16 bg-surface-container">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-on-surface mb-4">
                Plus de fonctionnalités à venir
              </h2>
              <p className="text-on-surface-variant">
                Restez connectés pour découvrir de nouvelles sections passionnantes !
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
