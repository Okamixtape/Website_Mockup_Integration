'use client'

import { AnimatedBox } from '@/components/ui/AnimatedBox'

const securityFeatures = [
  {
    icon: 'verified_user',
    title: 'Vérification des Profils',
    description: 'Nous vérifions l\'identité de nos hôtes et de nos voyageurs pour construire une communauté de confiance.'
  },
  {
    icon: 'credit_card',
    title: 'Paiements Sécurisés',
    description: 'Toutes les transactions sont cryptées et traitées via notre plateforme sécurisée pour protéger vos informations financières.'
  },
  {
    icon: 'health_and_safety',
    title: 'Normes de Sécurité et de Propreté',
    description: 'Nous encourageons nos hôtes à suivre des protocoles de propreté stricts et à équiper leurs logements des dispositifs de sécurité essentiels.'
  },
  {
    icon: 'support_agent',
    title: 'Assistance 24/7',
    description: 'Notre équipe d\'assistance est disponible à tout moment pour vous aider en cas d\'urgence ou de problème pendant votre séjour.'
  },
  {
    icon: 'policy',
    title: 'Protection des Données',
    description: 'Votre vie privée est notre priorité. Nous nous conformons aux normes les plus élevées en matière de protection des données (RGPD).'
  },
  {
    icon: 'reviews',
    title: 'Évaluations Fiables',
    description: 'Les évaluations mutuelles après chaque séjour permettent à nos membres de partager leurs expériences en toute transparence.'
  }
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="container mx-auto px-4 py-12">
        <AnimatedBox animation="fadeIn">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Votre sécurité, notre priorité</h1>
            <p className="text-xl text-on-surface-variant max-w-3xl mx-auto">
              Chez Reservia, nous nous engageons à garantir la sécurité et la tranquillité d'esprit de notre communauté à chaque étape de votre voyage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-surface-container border border-outline-variant rounded-2xl p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">{feature.icon}</span>
                <h2 className="text-xl font-semibold text-on-surface mb-2">{feature.title}</h2>
                <p className="text-on-surface-variant">{feature.description}</p>
              </div>
            ))}
          </div>
        </AnimatedBox>
      </main>
    </div>
  )
}
