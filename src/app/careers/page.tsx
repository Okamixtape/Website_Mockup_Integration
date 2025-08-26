'use client'

import { AnimatedBox } from '@/components/ui/AnimatedBox'
import { Button } from '@/components/ui/Button'

const jobOpenings = [
  {
    title: 'Développeur Full-Stack (React/Node.js)',
    location: 'Paris, France',
    type: 'Temps plein',
    description: 'Rejoignez notre équipe technique pour construire et améliorer la plateforme Reservia. Vous travaillerez sur des fonctionnalités innovantes et contribuerez à notre architecture microservices.'
  },
  {
    title: 'Responsable Partenariats Hôteliers',
    location: 'Télétravail',
    type: 'Temps plein',
    description: 'Développez notre réseau de partenaires en identifiant et en intégrant de nouveaux hébergements de qualité sur notre plateforme.'
  },
  {
    title: 'Spécialiste du Support Client',
    location: 'Lyon, France',
    type: 'Temps partiel',
    description: 'Devenez la voix de Reservia en aidant nos utilisateurs et en garantissant une expérience client exceptionnelle.'
  }
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <AnimatedBox animation="fadeIn">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Rejoignez l'aventure Reservia</h1>
            <p className="text-xl text-on-surface-variant max-w-3xl mx-auto">
              Nous construisons le futur du voyage. Si vous êtes passionné, innovant et prêt à relever des défis, 
              découvrez nos opportunités de carrière.
            </p>
          </div>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-surface-container border border-outline-variant rounded-2xl p-6 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:shadow-md transition-shadow duration-300">
                <div>
                  <h2 className="text-2xl font-semibold text-on-surface">{job.title}</h2>
                  <div className="flex items-center gap-4 text-on-surface-variant mt-1">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span>{job.location}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">work</span>{job.type}</span>
                  </div>
                  <p className="mt-3 text-on-surface-variant max-w-2xl">{job.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <Button variant="filled">Postuler</Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 bg-surface-container-high p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-on-surface mb-2">Aucune offre ne vous correspond ?</h3>
            <p className="text-on-surface-variant mb-4">Envoyez-nous votre candidature spontanée. Nous sommes toujours à la recherche de talents.</p>
            <Button variant="tonal">Candidature Spontanée</Button>
          </div>
        </AnimatedBox>
      </main>
    </div>
  )
}
