export interface Accommodation {
  id: string
  name: string
  type: 'hotel' | 'apartment' | 'guesthouse' | 'hostel'
  location: string
  price: number
  rating: number
  reviewCount: number
  image: string
  amenities: string[]
  description: string
  isPopular?: boolean
  badge?: string
}

export const accommodations: Accommodation[] = [
  {
    id: '1',
    name: 'Auberge La Canebière',
    type: 'guesthouse',
    location: 'Vieux-Port, Marseille',
    price: 25,
    rating: 4.0,
    reviewCount: 128,
    image: '/images/hebergements/auberge-la-canebiere.jpg',
    amenities: ['wifi', 'breakfast', 'parking'],
    description: 'Auberge conviviale au cœur du Vieux-Port avec vue sur la mer',
    isPopular: true
  },
  {
    id: '2',
    name: 'Hôtel du Port',
    type: 'hotel',
    location: 'Centre-ville, Marseille',
    price: 52,
    rating: 4.5,
    reviewCount: 89,
    image: '/images/hebergements/hotel-du-port.jpg',
    amenities: ['wifi', 'air_conditioning', 'room_service', 'gym'],
    description: 'Hôtel moderne avec vue panoramique sur le port',
    isPopular: true
  },
  {
    id: '3',
    name: 'Hôtel Les Mouettes',
    type: 'hotel',
    location: 'Corniche, Marseille',
    price: 76,
    rating: 4.3,
    reviewCount: 156,
    image: '/images/hebergements/hotel-les-mouettes.jpg',
    amenities: ['wifi', 'pool', 'spa', 'restaurant'],
    description: 'Hôtel de charme face à la Méditerranée',
    badge: 'Vue mer'
  },
  {
    id: '4',
    name: 'Hôtel de la Mer',
    type: 'hotel',
    location: 'Plage du Prado, Marseille',
    price: 46,
    rating: 4.1,
    reviewCount: 203,
    image: '/images/hebergements/hotel-de-la-mer.jpg',
    amenities: ['wifi', 'breakfast', 'beach_access'],
    description: 'Hôtel familial à deux pas de la plage'
  },
  {
    id: '5',
    name: 'Auberge Le Panier',
    type: 'guesthouse',
    location: 'Le Panier, Marseille',
    price: 23,
    rating: 4.4,
    reviewCount: 99,
    image: '/images/hebergements/auberge-le-panier.jpg',
    amenities: ['wifi', 'breakfast', 'terrace'],
    description: 'Auberge authentique dans le quartier historique'
  },
  {
    id: '6',
    name: 'Hôtel chez Amina',
    type: 'hotel',
    location: 'République, Marseille',
    price: 96,
    rating: 4.6,
    reviewCount: 167,
    image: '/images/hebergements/hotel-chez-amina.jpg',
    amenities: ['wifi', 'spa', 'restaurant', 'concierge'],
    description: 'Hôtel boutique raffiné au design contemporain',
    badge: 'Luxe'
  }
]

export const amenityIcons: Record<string, string> = {
  wifi: 'wifi',
  breakfast: 'restaurant',
  parking: 'local_parking',
  air_conditioning: 'ac_unit',
  room_service: 'room_service',
  gym: 'fitness_center',
  pool: 'pool',
  spa: 'spa',
  restaurant: 'restaurant_menu',
  beach_access: 'beach_access',
  terrace: 'deck',
  concierge: 'concierge'
}

export const typeLabels: Record<string, string> = {
  hotel: 'Hôtel',
  apartment: 'Appartement',
  guesthouse: 'Auberge',
  hostel: 'Auberge de jeunesse'
}
