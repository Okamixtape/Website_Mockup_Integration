import { notFound } from 'next/navigation'
import { ActivityDetail } from '@/components/ui/ActivityDetail'
import { activities } from '@/data/activities'

interface PageProps {
  params: {
    id: string
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
