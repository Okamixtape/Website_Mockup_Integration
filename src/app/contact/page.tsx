'use client'

import { AnimatedBox } from '@/components/ui/AnimatedBox'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.')
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <AnimatedBox animation="fadeIn">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Contactez-nous</h1>
            <p className="text-xl text-on-surface-variant max-w-3xl mx-auto">
              Une question, une suggestion ou besoin d'aide ? Remplissez le formulaire ci-dessous et notre équipe vous répondra rapidement.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-surface-container p-8 rounded-2xl border border-outline-variant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="name"
                label="Nom complet"
                placeholder="Votre nom"
                required
              />
              <Input
                id="email"
                type="email"
                label="Adresse e-mail"
                placeholder="votre.email@example.com"
                required
              />
              <Input
                id="subject"
                label="Sujet"
                placeholder="Sujet de votre message"
                required
              />
              <Textarea
                id="message"
                label="Votre message"
                placeholder="Écrivez votre message ici..."
                rows={6}
                required
              />
              <Button type="submit" variant="filled" className="w-full">Envoyer le message</Button>
            </form>
          </div>
        </AnimatedBox>
      </main>
    </div>
  )
}
