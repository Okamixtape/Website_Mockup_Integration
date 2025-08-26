'use client'

import { AnimatedBox } from '@/components/ui/AnimatedBox'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Alice Dubois',
    role: 'CEO & Fondatrice',
    imageUrl: '/images/team/member1.jpg',
    bio: 'Passionnée de voyages, Alice a fondé Reservia pour transformer la location de vacances en une expérience simple et mémorable.'
  },
  {
    name: 'Bruno Lefebvre',
    role: 'CTO',
    imageUrl: '/images/team/member2.jpg',
    bio: 'Architecte de notre plateforme, Bruno allie innovation technologique et expérience utilisateur pour un service sans faille.'
  },
  {
    name: 'Chloé Martin',
    role: 'Responsable des Opérations',
    imageUrl: '/images/team/member3.jpg',
    bio: 'Chloé veille à ce que chaque séjour soit parfait, en coordonnant nos équipes et en assurant la qualité de nos services.'
  },
  {
    name: 'David Garcia',
    role: 'Responsable Marketing',
    imageUrl: '/images/team/member4.jpg',
    bio: 'David raconte l\'histoire de Reservia et fait découvrir nos hébergements d\'exception au monde entier.'
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="container mx-auto px-4 py-12">
        <AnimatedBox animation="fadeIn">
          <h1 className="text-4xl font-bold text-primary mb-4 text-center">Notre Équipe</h1>
          <p className="text-xl text-on-surface-variant mb-12 text-center max-w-3xl mx-auto">
            Découvrez les visages derrière Reservia, une équipe de passionnés dédiés à faire de votre séjour une réussite.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-surface-container rounded-2xl p-6 text-center border border-outline-variant hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.imageUrl}
                    alt={`Portrait de ${member.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h2 className="text-xl font-semibold text-on-surface">{member.name}</h2>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-on-surface-variant text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </AnimatedBox>
      </main>
    </div>
  )
}
