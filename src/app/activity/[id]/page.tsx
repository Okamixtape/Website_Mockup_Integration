import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ActivityDetail } from '@/components/ui/ActivityDetail'
import { activities } from '@/data/activities'

interface PageProps {
  params: {
    id: string
  }
}

// Générer les métadonnées SEO dynamiques pour les activités
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const activity = activities.find(act => act.id.toString() === params.id)

  if (!activity) {
    return {
      title: 'Activité introuvable - Reservia',
      description: 'L\'activité que vous recherchez n\'existe pas ou n\'est plus disponible.'
    }
  }

  const { name, city, description, category, rating, image, isFree, price } = activity

  // Description optimisée pour SEO (max 160 caractères)
  const priceInfo = isFree ? 'Gratuit' : `${price}€`
  const metaDescription = description
    ? description.slice(0, 157) + '...'
    : `Découvrez ${name} à ${city}. ${category}. ${priceInfo}. Note: ${rating}/5.`

  return {
    title: `${name} - Activité à ${city} | Reservia`,
    description: metaDescription,
    keywords: [
      name,
      city,
      category,
      'activité',
      'loisirs',
      'tourisme',
      'vacances',
      'voyage',
      isFree ? 'gratuit' : 'payant'
    ],
    openGraph: {
      title: `${name} - Activité à ${city}`,
      description: metaDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 900,
          alt: `${name} à ${city}`
        }
      ],
      type: 'website',
      siteName: 'Reservia'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} - Activité à ${city}`,
      description: metaDescription,
      images: [image]
    },
    alternates: {
      canonical: `/activity/${params.id}`
    }
  }
}

export default function ActivityDetailPage({ params }: PageProps) {
  const activity = activities.find(act => act.id.toString() === params.id)

  if (!activity) {
    notFound()
  }

  return <ActivityDetail activity={activity} />
}

export async function generateStaticParams() {
  return activities.map((activity) => ({
    id: activity.id.toString(),
  }))
}
