import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Reservia M3 - Portfolio Moderne',
    template: '%s | Reservia M3'
  },
  description: 'Portfolio professionnel moderne basé sur Material Design 3. Découvrez mes projets et compétences en développement web.',
  keywords: ['portfolio', 'développeur web', 'Material Design 3', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Votre Nom' }],
  creator: 'Votre Nom',
  publisher: 'Reservia M3',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Reservia M3',
    title: 'Reservia M3 - Portfolio Moderne',
    description: 'Portfolio professionnel moderne basé sur Material Design 3',
    url: '/',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Reservia M3 Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reservia M3 - Portfolio Moderne',
    description: 'Portfolio professionnel moderne basé sur Material Design 3',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div id="root" className="min-h-screen bg-surface text-on-surface">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
