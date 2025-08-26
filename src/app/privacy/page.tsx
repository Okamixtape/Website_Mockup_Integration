'use client'

import { AnimatedBox } from '@/components/ui/AnimatedBox'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <AnimatedBox animation="fadeIn">
          <h1 className="text-4xl font-bold text-primary mb-6">Politique de Confidentialité</h1>
          <div className="space-y-6 text-on-surface-variant leading-relaxed prose prose-invert max-w-none">
            <p>Dernière mise à jour : 26 août 2025</p>

            <p>
              Reservia ("nous", "notre" ou "nos") s'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, 
              utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre site web.
            </p>

            <h2 className="text-2xl font-semibold text-on-surface">1. Collecte de l'information</h2>
            <p>
              Nous collectons des informations vous concernant de plusieurs manières, notamment : les informations que vous nous fournissez directement 
              (nom, email, etc.), les informations collectées automatiquement (adresse IP, type de navigateur) et les informations provenant de tiers.
            </p>

            <h2 className="text-2xl font-semibold text-on-surface">2. Utilisation de vos informations</h2>
            <p>
              Nous utilisons les informations collectées pour : fournir, exploiter et maintenir notre site ; améliorer, personnaliser et étendre notre site ; 
              comprendre et analyser comment vous utilisez notre site ; développer de nouveaux produits, services et fonctionnalités ; communiquer avec vous, 
              notamment pour le service client, et pour vous envoyer des informations marketing et promotionnelles.
            </p>

            <h2 className="text-2xl font-semibold text-on-surface">3. Partage de vos informations</h2>
            <p>
              Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants : pour nous conformer à la loi, 
              pour protéger nos droits, ou avec votre consentement.
            </p>

            <h2 className="text-2xl font-semibold text-on-surface">4. Sécurité de vos informations</h2>
            <p>
              Nous utilisons des mesures de sécurité administratives, techniques et physiques pour protéger vos informations personnelles. 
              Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée.
            </p>

            <h2 className="text-2xl font-semibold text-on-surface">5. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles. 
              Pour exercer ces droits, veuillez nous contacter à l'adresse <a href="mailto:privacy@reservia.com" className="text-primary hover:underline">privacy@reservia.com</a>.
            </p>
          </div>
        </AnimatedBox>
      </main>
    </div>
  )
}
