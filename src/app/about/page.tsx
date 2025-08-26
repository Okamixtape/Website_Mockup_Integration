'use client'

import { AnimatedBox } from '@/components/ui/AnimatedBox'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <AnimatedBox animation="fadeIn">
          <h1 className="text-4xl font-bold text-primary mb-6">À propos de Reservia</h1>
          <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed">
            <p>
              Bienvenue chez Reservia, votre partenaire de confiance pour trouver des hébergements de rêve en France. 
              Fondée en 2025, notre mission est de simplifier la recherche de locations de vacances et de vous offrir des expériences inoubliables.
            </p>
            <p>
              Nous croyons que chaque voyage commence par un lieu de séjour exceptionnel. C'est pourquoi nous sélectionnons avec soin chaque propriété, 
              des appartements urbains modernes aux villas luxueuses en bord de mer, pour garantir confort, qualité et authenticité.
            </p>
            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant">
              <h2 className="text-2xl font-semibold text-on-surface mb-4">Notre Vision</h2>
              <p>
                Devenir la plateforme de référence pour la location de vacances en Europe, reconnue pour la qualité de ses offres, 
                son innovation technologique et son engagement envers la satisfaction client. Nous aspirons à créer une communauté de voyageurs 
                et de propriétaires partageant la même passion pour l'hospitalité et la découverte.
              </p>
            </div>
            <p>
              Notre équipe est composée d'experts du voyage et de la technologie, tous dédiés à rendre votre expérience de réservation 
              aussi fluide et agréable que possible. Merci de faire confiance à Reservia pour vos prochaines aventures.
            </p>
          </div>
        </AnimatedBox>
      </main>
    </div>
  )
}
