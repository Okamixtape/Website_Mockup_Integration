import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { AccommodationDetail } from '@/components/ui/AccommodationDetail'
import { accommodations } from '@/data/accommodations'

interface PageProps {
  params: {
    id: string
  }
}

// Générer les métadonnées SEO dynamiques
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const accommodation = accommodations.find(acc => acc.id.toString() === params.id)

  if (!accommodation) {
    return {
      title: 'Hébergement introuvable - Reservia',
      description: 'L\'hébergement que vous recherchez n\'existe pas ou n\'est plus disponible.'
    }
  }

  const { name, type, location, description, price, rating, image } = accommodation

  // Description optimisée pour SEO (max 160 caractères)
  const metaDescription = description
    ? description.slice(0, 157) + '...'
    : `Réservez ${type} ${name} à ${location}. À partir de ${price}€/nuit. Note: ${rating}/5.`

  return {
    title: `${name} - ${type} à ${location} | Reservia`,
    description: metaDescription,
    keywords: [
      name,
      type,
      location,
      'hébergement',
      'réservation',
      'vacances',
      'voyage',
      'hôtel',
      'auberge'
    ],
    openGraph: {
      title: `${name} - ${type} à ${location}`,
      description: metaDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 900,
          alt: `${name} à ${location}`
        }
      ],
      type: 'website',
      siteName: 'Reservia'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} - ${type} à ${location}`,
      description: metaDescription,
      images: [image]
    },
    alternates: {
      canonical: `/accommodation/${params.id}`
    }
  }
}

export default function AccommodationDetailPage({ params }: PageProps) {
  const accommodation = accommodations.find(acc => acc.id.toString() === params.id)

  if (!accommodation) {
    notFound()
  }

  return <AccommodationDetail accommodation={accommodation} />
}

// Générer les routes statiques pour toutes les accommodations
export async function generateStaticParams() {
  return accommodations.map((accommodation) => ({
    id: accommodation.id.toString(),
  }))
}
