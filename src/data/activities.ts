export interface Activity {
  id: string
  name: string
  category: 'culture' | 'nature' | 'sport' | 'gastronomy' | 'entertainment'
  location: string
  duration: string
  rating: number
  reviewCount: number
  image: string
  description: string
  highlights: string[]
  price?: number
  isFree?: boolean
  isPopular?: boolean
  badge?: string
}

export const activities: Activity[] = [
  {
    id: '1',
    name: 'Vieux-Port de Marseille',
    category: 'culture',
    location: 'Centre historique',
    duration: '2-3h',
    rating: 4.6,
    reviewCount: 2847,
    image: '/images/activites/vieux-port.jpg',
    description: 'Le cœur historique de Marseille avec ses marchés aux poissons, restaurants et animations',
    highlights: ['Port historique', 'Marché aux poissons', 'Restaurants traditionnels', 'Animation permanente'],
    isFree: true,
    isPopular: true,
    badge: 'Incontournable'
  },
  {
    id: '2',
    name: 'Basilique Notre-Dame de la Garde',
    category: 'culture',
    location: 'Colline de la Garde',
    duration: '1-2h',
    rating: 4.8,
    reviewCount: 3521,
    image: '/images/activites/notre-dame-garde.jpg',
    description: 'Monument emblématique offrant une vue panoramique exceptionnelle sur Marseille',
    highlights: ['Vue panoramique', 'Architecture byzantine', 'Site religieux', 'Accessible en bus'],
    isFree: true,
    isPopular: true,
    badge: 'Vue imprenable'
  },
  {
    id: '3',
    name: 'Parc National des Calanques',
    category: 'nature',
    location: 'Massif des Calanques',
    duration: 'Journée',
    rating: 4.9,
    reviewCount: 1876,
    image: '/images/activites/parc-calanques.jpg',
    description: 'Parc national unique avec ses criques turquoise et falaises blanches spectaculaires',
    highlights: ['Randonnées', 'Criques sauvages', 'Eaux turquoise', 'Biodiversité'],
    price: 15,
    isPopular: true,
    badge: 'Nature'
  },
  {
    id: '4',
    name: 'Château d\'If',
    category: 'culture',
    location: 'Îles du Frioul',
    duration: '3-4h',
    rating: 4.4,
    reviewCount: 1654,
    image: '/images/activites/chateau-if.jpg',
    description: 'Forteresse historique rendue célèbre par le Comte de Monte-Cristo',
    highlights: ['Histoire maritime', 'Littérature française', 'Traversée en bateau', 'Architecture militaire'],
    price: 25,
    badge: 'Historique'
  },
  {
    id: '5',
    name: 'Quartier du Panier',
    category: 'culture',
    location: 'Centre historique',
    duration: '2-3h',
    rating: 4.3,
    reviewCount: 987,
    image: '/images/activites/quartier-panier.jpg',
    description: 'Quartier le plus ancien de France avec ses ruelles colorées et son art de rue',
    highlights: ['Art de rue', 'Architecture provençale', 'Artisans locaux', 'Cafés authentiques'],
    isFree: true,
    badge: 'Authentique'
  },
  {
    id: '6',
    name: 'Plages du Prado',
    category: 'sport',
    location: 'Avenue du Prado',
    duration: 'Demi-journée',
    rating: 4.2,
    reviewCount: 756,
    image: '/images/activites/plages-prado.jpg',
    description: 'Plages artificielles aménagées parfaites pour la détente et les sports nautiques',
    highlights: ['Sports nautiques', 'Plage urbaine', 'Restaurants', 'Activités familiales'],
    isFree: true,
    isPopular: true
  },
  {
    id: '7',
    name: 'MuCEM',
    category: 'culture',
    location: 'Fort Saint-Jean',
    duration: '2-3h',
    rating: 4.5,
    reviewCount: 1432,
    image: '/images/activites/mucem.jpg',
    description: 'Musée des civilisations de l\'Europe et de la Méditerranée avec architecture moderne',
    highlights: ['Expositions temporaires', 'Architecture contemporaine', 'Vue sur mer', 'Passerelle historique'],
    price: 12,
    badge: 'Moderne'
  },
  {
    id: '8',
    name: 'Cours Julien',
    category: 'entertainment',
    location: 'Quartier bohème',
    duration: 'Soirée',
    rating: 4.1,
    reviewCount: 623,
    image: '/images/activites/cours-julien.jpg',
    description: 'Quartier artistique animé avec ses bars, restaurants et street art',
    highlights: ['Vie nocturne', 'Street art', 'Bars à thème', 'Restaurants du monde'],
    isFree: true,
    badge: 'Noctamne'
  }
]

export const categoryLabels: Record<string, string> = {
  culture: 'Culture & Histoire',
  nature: 'Nature & Paysages', 
  sport: 'Sport & Détente',
  gastronomy: 'Gastronomie',
  entertainment: 'Divertissement'
}

export const categoryIcons: Record<string, string> = {
  culture: 'museum',
  nature: 'park',
  sport: 'sports',
  gastronomy: 'restaurant',
  entertainment: 'celebration'
}

export const durationLabels: Record<string, string> = {
  '1-2h': 'Court',
  '2-3h': 'Moyen',
  '3-4h': 'Long',
  'Demi-journée': 'Demi-journée',
  'Journée': 'Journée complète',
  'Soirée': 'Soirée'
}
