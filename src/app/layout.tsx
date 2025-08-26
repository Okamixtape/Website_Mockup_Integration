import type { Metadata } from 'next'
import { inter, materialSymbolsCSS } from './fonts'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Suspense } from 'react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import './globals.css'
import { I18nProvider } from '@/lib/i18n/context'

// Optimisation des fonts avec next/font
const interVariable = inter.variable

export const metadata: Metadata = {
  title: 'Reservia M3 | Trouvez votre hébergement de rêve',
  description: 'Découvrez les meilleurs hébergements et activités avec Reservia. Interface moderne basée sur Material Design 3 pour une expérience utilisateur exceptionnelle.',
  keywords: ['hébergement', 'hôtel', 'vacances', 'activités', 'tourisme', 'réservation'],
  authors: [{ name: 'Reservia Team' }],
  creator: 'Reservia',
  publisher: 'Reservia',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://reservia-m3.vercel.app',
    title: 'Reservia M3 | Trouvez votre hébergement de rêve',
    description: 'Découvrez les meilleurs hébergements et activités avec Reservia.',
    siteName: 'Reservia M3',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reservia M3 | Trouvez votre hébergement de rêve',
    description: 'Découvrez les meilleurs hébergements et activités avec Reservia.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={interVariable}>
      <head>
        {/* Material Symbols Font */}
        <style dangerouslySetInnerHTML={{ __html: materialSymbolsCSS }} />
        
        {/* Préconnexions DNS pour améliorer les performances */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider defaultTheme="system">
          <I18nProvider>
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse text-on-surface-variant">
                  Chargement...
                </div>
              </div>
            }>
              <div className="flex flex-col min-h-screen">
                <ScrollProgress />
                <Header />
                <main className="flex-grow pt-16 md:pt-20">
                  {children}
                </main>
                <Footer />
              </div>
            </Suspense>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
