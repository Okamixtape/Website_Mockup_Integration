import { Metadata } from 'next'
import { Hero } from '@/components/ui/Hero'
import { Accommodations } from '@/components/ui/Accommodations'
import { Activities } from '@/components/ui/Activities'
import { GlobalFilters } from '@/components/ui/GlobalFilters'

// Métadonnées SEO optimisées pour la page d'accueil
export const metadata: Metadata = {
  title: 'Reservia - Trouvez votre hébergement et activités pour des vacances de rêve',
  description: 'Découvrez et réservez les meilleurs hébergements et activités en France. Marseille, Paris, Nice, Lyon et plus encore. Réservez en toute confiance.',
  keywords: [
    'réservation hébergement',
    'hôtel France',
    'vacances',
    'activités touristiques',
    'voyage',
    'Marseille',
    'Paris',
    'Nice',
    'Lyon',
    'Bordeaux'
  ],
  openGraph: {
    title: 'Reservia - Trouvez votre hébergement pour des vacances de rêve',
    description: 'Découvrez et réservez les meilleurs hébergements et activités en France.',
    type: 'website',
    siteName: 'Reservia',
    locale: 'fr_FR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reservia - Hébergements et Activités en France',
    description: 'Découvrez et réservez les meilleurs hébergements et activités en France.'
  },
  alternates: {
    canonical: '/'
  }
}

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
