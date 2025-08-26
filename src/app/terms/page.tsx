'use client'

import { AnimatedBox } from '@/components/ui/AnimatedBox'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <AnimatedBox animation="fadeIn">
          <h1 className="text-4xl font-bold text-primary mb-6">Conditions Générales d'Utilisation</h1>
          <div className="space-y-6 text-on-surface-variant leading-relaxed prose prose-invert max-w-none">
            <p>Dernière mise à jour : 26 août 2025</p>

            <p>
              Veuillez lire attentivement ces Conditions Générales d'Utilisation ("CGU") avant d'utiliser le site web Reservia (le "Service") exploité par Reservia.
            </p>

            <h2 className="text-2xl font-semibold text-on-surface">1. Acceptation des conditions</h2>
            <p>
              En accédant à notre Service ou en l'utilisant, vous acceptez d'être lié par ces CGU. Si vous n'êtes pas d'accord avec une partie des conditions, 
              vous ne pouvez pas accéder au Service.
            </p>

            <h2 className="text-2xl font-semibold text-on-surface">2. Réservations et Paiements</h2>
            <p>
              En effectuant une réservation via notre Service, vous garantissez que vous avez au moins 18 ans et que les informations de paiement que vous fournissez sont exactes. 
              Toutes les réservations sont soumises aux conditions d'annulation de l'hôte, qui sont affichées sur la page de l'annonce.
            </p>

            <h2 className="text-2xl font-semibold text-on-surface">3. Conduite de l'utilisateur</h2>
            <p>
              Vous acceptez de ne pas utiliser le Service à des fins illégales ou interdites par ces CGU. Vous êtes responsable de toutes vos activités en relation avec le Service.
            </p>

            <h2 className="text-2xl font-semibold text-on-surface">4. Propriété Intellectuelle</h2>
            <p>
              Le Service et son contenu original, ses caractéristiques et ses fonctionnalités sont et resteront la propriété exclusive de Reservia et de ses concédants de licence.
            </p>

            <h2 className="text-2xl font-semibold text-on-surface">5. Limitation de responsabilité</h2>
            <p>
              En aucun cas Reservia, ni ses directeurs, employés, partenaires, agents, fournisseurs ou affiliés, ne pourront être tenus responsables de tout dommage indirect, 
              accessoire, spécial, consécutif ou punitif.
            </p>

             <h2 className="text-2xl font-semibold text-on-surface">6. Modification des CGU</h2>
            <p>
              Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces CGU à tout moment. Nous vous informerons de tout changement en publiant les nouvelles CGU sur cette page.
            </p>
          </div>
        </AnimatedBox>
      </main>
    </div>
  )
}
