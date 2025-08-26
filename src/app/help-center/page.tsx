'use client'

import { useState } from 'react'
import { AnimatedBox } from '@/components/ui/AnimatedBox'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FaqItemType {
  question: string;
  answer: string;
}

const faqItems: FaqItemType[] = [
  {
    question: 'Comment puis-je réserver un hébergement ?',
    answer: 'Pour réserver, recherchez votre destination, sélectionnez vos dates et le nombre de voyageurs. Une fois que vous avez trouvé l\'hébergement idéal, cliquez sur "Réserver" et suivez les instructions pour finaliser votre paiement.'
  },
  {
    question: 'Quelles sont les méthodes de paiement acceptées ?',
    answer: 'Nous acceptons les principales cartes de crédit (Visa, MasterCard, American Express) ainsi que les paiements via PayPal. Toutes les transactions sont sécurisées.'
  },
  {
    question: 'Puis-je annuler ou modifier ma réservation ?',
    answer: 'Les conditions d\'annulation et de modification varient en fonction de l\'hébergement. Vous pouvez consulter les conditions spécifiques sur la page de détail de chaque annonce avant de réserver. Vos réservations et leurs conditions sont également visibles dans la section "Mes réservations".'
  },
  {
    question: 'Comment contacter le propriétaire de l\'hébergement ?',
    answer: 'Une fois votre réservation confirmée, vous recevrez les coordonnées du propriétaire pour organiser votre arrivée. Pour des questions avant la réservation, vous pouvez utiliser notre système de messagerie sécurisé.'
  },
  {
    question: 'Que faire si j\'ai un problème pendant mon séjour ?',
    answer: 'En cas de problème, contactez d\'abord le propriétaire. Si vous ne parvenez pas à trouver une solution, notre service client est disponible 24/7 pour vous assister. Vous pouvez nous contacter via la page Contact.'
  }
]

const FaqItem = ({ item }: { item: FaqItemType }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-outline-variant">
      <button
        className="w-full flex justify-between items-center text-left py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-on-surface">{item.question}</span>
        <span className={cn('material-symbols-outlined transition-transform', { 'rotate-180': isOpen })}>expand_more</span>
      </button>
      {isOpen && (
        <div className="pb-4 text-on-surface-variant">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="container mx-auto px-4 py-12">
        <AnimatedBox animation="fadeIn">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Centre d'aide</h1>
            <p className="text-xl text-on-surface-variant max-w-3xl mx-auto">
              Besoin d'aide ? Trouvez les réponses à vos questions les plus fréquentes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <FaqItem key={index} item={item} />
            ))}
          </div>

          <div className="text-center mt-16 bg-surface-container p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-on-surface mb-2">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-on-surface-variant mb-4">Notre équipe est là pour vous aider. Contactez-nous directement.</p>
            <Link href="/contact">
              <Button variant="filled">Nous Contacter</Button>
            </Link>
          </div>
        </AnimatedBox>
      </main>
    </div>
  )
}
