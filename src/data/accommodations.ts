export interface Accommodation {
  id: number
  name: string
  type: 'Hôtel' | 'Appartement'
  city: string
  region: string
  country: string
  location: string
  description: string
  price: number
  rating: number
  reviewCount: number
  image: string
  images: string[]
  amenities: string[]
  capacity: number
  bedrooms: number
  bathrooms: number
  isPopular: boolean
}

// Destinations disponibles
export const destinations = {
  france: {
    name: 'France',
    regions: {
      'provence-alpes-cote-azur': {
        name: 'Provence-Alpes-Côte d\'Azur',
        cities: ['Marseille', 'Nice', 'Cannes', 'Aix-en-Provence', 'Avignon']
      },
      'ile-de-france': {
        name: 'Île-de-France',
        cities: ['Paris', 'Versailles', 'Fontainebleau']
      },
      'nouvelle-aquitaine': {
        name: 'Nouvelle-Aquitaine',
        cities: ['Bordeaux', 'Biarritz', 'La Rochelle']
      },
      'bretagne': {
        name: 'Bretagne',
        cities: ['Rennes', 'Saint-Malo', 'Quimper']
      },
      'auvergne-rhone-alpes': {
        name: 'Auvergne-Rhône-Alpes',
        cities: ['Lyon', 'Annecy', 'Chamonix']
      }
    }
  }
}

export const accommodations: Accommodation[] = [
  // Marseille
  {
    id: 1,
    name: 'Auberge La Canebière',
    type: 'Hôtel',
    city: 'Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
    country: 'France',
    location: 'Vieux-Port, Marseille',
    description: 'Auberge conviviale au cœur du Vieux-Port avec vue sur la mer',
    price: 25,
    rating: 4.0,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop'
    ],
    amenities: ['Wifi', 'Breakfast', 'Parking'],
    capacity: 4,
    bedrooms: 1,
    bathrooms: 1,
    isPopular: true
  },
  {
    id: 2,
    name: 'Hôtel de la Plage',
    type: 'Hôtel',
    city: 'Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
    country: 'France',
    location: 'Plage du Prado, Marseille',
    description: 'Hôtel moderne avec accès direct à la plage et piscine',
    price: 128,
    rating: 4.8,
    reviewCount: 1234,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
    ],
    amenities: ['Wifi', 'Pool', 'Beach', 'Spa', 'Restaurant', 'Fitness'],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    isPopular: true
  },
  {
    id: 3,
    name: 'Les Terrasses du Port',
    type: 'Appartement',
    city: 'Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
    country: 'France',
    location: 'La Joliette, Marseille',
    description: 'Appartement moderne avec terrasse panoramique sur le port',
    price: 95,
    rating: 4.6,
    reviewCount: 567,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&h=600&fit=crop'
    ],
    amenities: ['Wifi', 'Kitchen', 'Parking', 'Terrace', 'AirConditioning'],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    isPopular: false
  },
  
  // Paris
  {
    id: 4,
    name: 'Hôtel Montmartre',
    type: 'Hôtel',
    city: 'Paris',
    region: 'Île-de-France',
    country: 'France',
    location: 'Montmartre, Paris',
    description: 'Charmant hôtel au pied du Sacré-Cœur avec vue sur tout Paris',
    price: 156,
    rating: 4.7,
    reviewCount: 2341,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop'
    ],
    amenities: ['Wifi', 'Breakfast', 'Bar', 'CityView', 'Concierge'],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    isPopular: true
  },
  {
    id: 5,
    name: 'Studio Champs-Élysées',
    type: 'Appartement',
    city: 'Paris',
    region: 'Île-de-France',
    country: 'France',
    location: 'Champs-Élysées, Paris',
    description: 'Studio élégant à deux pas des Champs-Élysées',
    price: 185,
    rating: 4.5,
    reviewCount: 892,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&h=600&fit=crop'
    ],
    amenities: ['Wifi', 'Kitchen', 'AirConditioning', 'Washer'],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    isPopular: false
  },
  
  // Nice
  {
    id: 6,
    name: 'Villa Azur',
    type: 'Hôtel',
    city: 'Nice',
    region: 'Provence-Alpes-Côte d\'Azur',
    country: 'France',
    location: 'Promenade des Anglais, Nice',
    description: 'Hôtel luxueux face à la Baie des Anges',
    price: 245,
    rating: 4.9,
    reviewCount: 1567,
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&h=600&fit=crop'
    ],
    amenities: ['Wifi', 'Pool', 'Beach', 'Spa', 'Restaurant', 'Bar', 'Fitness'],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    isPopular: true
  },
  
  // Lyon
  {
    id: 7,
    name: 'Bouchon Lyonnais',
    type: 'Hôtel',
    city: 'Lyon',
    region: 'Auvergne-Rhône-Alpes',
    country: 'France',
    location: 'Vieux Lyon',
    description: 'Hôtel traditionnel au cœur du vieux Lyon',
    price: 89,
    rating: 4.4,
    reviewCount: 678,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop'
    ],
    amenities: ['Wifi', 'Breakfast', 'Restaurant'],
    capacity: 3,
    bedrooms: 1,
    bathrooms: 1,
    isPopular: false
  },
  
  // Bordeaux
  {
    id: 8,
    name: 'Château des Vignes',
    type: 'Appartement',
    city: 'Bordeaux',
    region: 'Nouvelle-Aquitaine',
    country: 'France',
    location: 'Saint-Pierre, Bordeaux',
    description: 'Appartement de charme dans le quartier historique',
    price: 112,
    rating: 4.6,
    reviewCount: 432,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    ],
    amenities: ['Wifi', 'Kitchen', 'Parking', 'Terrace'],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    isPopular: true
  },
  
  // Annecy
  {
    id: 9,
    name: 'Lac d\'Annecy Resort',
    type: 'Hôtel',
    city: 'Annecy',
    region: 'Auvergne-Rhône-Alpes',
    country: 'France',
    location: 'Bord du lac, Annecy',
    description: 'Resort 5 étoiles avec vue imprenable sur le lac',
    price: 289,
    rating: 4.9,
    reviewCount: 1890,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&h=600&fit=crop'
    ],
    amenities: ['Wifi', 'Pool', 'Spa', 'Restaurant', 'Bar', 'Fitness', 'LakeView', 'PrivateBeach'],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    isPopular: true
  },
  
  // Biarritz
  {
    id: 10,
    name: 'Surf House Biarritz',
    type: 'Appartement',
    city: 'Biarritz',
    region: 'Nouvelle-Aquitaine',
    country: 'France',
    location: 'Grande Plage, Biarritz',
    description: 'Appartement surfer-friendly à 50m de la plage',
    price: 135,
    rating: 4.7,
    reviewCount: 567,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
    ],
    amenities: ['Wifi', 'Kitchen', 'Beach', 'SurfEquipment', 'Balcony'],
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    isPopular: false
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
  concierge: 'concierge',
  kitchen: 'kitchen',
  balcony: 'balcony',
  surfEquipment: 'surfing',
  lakeView: 'lake',
  privateBeach: 'beach_access'
}

export const typeLabels: Record<string, string> = {
  'Hôtel': 'Hôtel',
  'Appartement': 'Appartement'
}
