import { notFound } from 'next/navigation'
import { AccommodationDetail } from '@/components/ui/AccommodationDetail'
import { accommodations } from '@/data/accommodations'

interface PageProps {
  params: {
    id: string
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
    id: accommodation.id.toString(), // Convertir l'ID en string
  }))
}
