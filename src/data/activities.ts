export interface Activity {
  id: string
  name: string
  category: 'culture' | 'nature' | 'sport' | 'gastronomy' | 'entertainment'
  location: string
  city: string
  region: string
  country: string
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
  // Marseille
  {
    id: '1',
    name: 'Notre-Dame de la Garde',
    category: 'culture',
    location: 'Rue Fort du Sanctuaire',
    city: 'Marseille',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    duration: '2-3 heures',
    rating: 4.7,
    reviewCount: 8456,
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&h=300&fit=crop',
    description: 'Basilique emblématique offrant une vue panoramique sur Marseille et la Méditerranée.',
    highlights: ['Vue à 360°', 'Architecture remarquable', 'Musée maritime'],
    isFree: true,
    isPopular: true,
    badge: 'Incontournable'
  },
  {
    id: '2',
    name: 'Visite du Vieux-Port',
    category: 'culture',
    location: 'Vieux-Port',
    city: 'Marseille',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    duration: '3-4 heures',
    rating: 4.5,
    reviewCount: 6234,
    image: 'https://images.unsplash.com/photo-1592859600972-1b0834d83747?w=400&h=300&fit=crop',
    description: 'Découvrez le cœur historique de Marseille avec son marché aux poissons et ses cafés.',
    highlights: ['Marché aux poissons', 'Bars historiques', 'Fort Saint-Jean'],
    price: 15,
    isPopular: true
  },
  {
    id: '3',
    name: 'Randonnée dans les Calanques',
    category: 'nature',
    location: 'Parc National des Calanques',
    city: 'Marseille',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    duration: 'Journée complète',
    rating: 4.9,
    reviewCount: 4567,
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&h=300&fit=crop',
    description: 'Explorez les magnifiques criques et falaises calcaires du parc national.',
    highlights: ['Eaux turquoise', 'Randonnée', 'Baignade possible'],
    price: 35,
    badge: 'Incontournable'
  },
  {
    id: '4',
    name: 'Musée MuCEM',
    category: 'culture',
    location: 'Esplanade J4',
    city: 'Marseille',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    duration: '2-3 heures',
    rating: 4.6,
    reviewCount: 3890,
    image: 'https://images.unsplash.com/photo-1565799228461-d08db6c36deb?w=400&h=300&fit=crop',
    description: 'Musée des civilisations de l\'Europe et de la Méditerranée avec architecture moderne.',
    highlights: ['Architecture unique', 'Expositions temporaires', 'Terrasse panoramique'],
    price: 11
  },
  {
    id: '5',
    name: 'Plongée sous-marine',
    category: 'sport',
    location: 'Îles du Frioul',
    city: 'Marseille',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    duration: 'Demi-journée',
    rating: 4.8,
    reviewCount: 1234,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    description: 'Découvrez les fonds marins préservés autour des îles du Frioul.',
    highlights: ['Équipement fourni', 'Instructeur certifié', 'Faune marine'],
    price: 85
  },
  {
    id: '6',
    name: 'Dégustation de bouillabaisse',
    category: 'gastronomy',
    location: 'Restaurant Chez Fonfon',
    city: 'Marseille',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    duration: '2 heures',
    rating: 4.7,
    reviewCount: 2456,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
    description: 'Savourez l\'authentique bouillabaisse marseillaise dans un restaurant traditionnel.',
    highlights: ['Recette traditionnelle', 'Vue sur mer', 'Chef renommé'],
    price: 55
  },
  {
    id: '7',
    name: 'Spectacle au Silo',
    category: 'entertainment',
    location: 'Le Silo',
    city: 'Marseille',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    duration: '2-3 heures',
    rating: 4.4,
    reviewCount: 876,
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop',
    description: 'Salle de spectacle dans un ancien silo à grains avec programmation éclectique.',
    highlights: ['Concerts live', 'Architecture industrielle', 'Bar panoramique'],
    price: 25
  },
  {
    id: '8',
    name: 'Cours de pétanque',
    category: 'sport',
    location: 'Parc Borély',
    city: 'Marseille',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    duration: '2 heures',
    rating: 4.3,
    reviewCount: 456,
    image: 'https://images.unsplash.com/photo-1597400473366-371a80b251eb?w=400&h=300&fit=crop',
    description: 'Initiez-vous au sport national provençal avec des joueurs locaux.',
    highlights: ['Matériel fourni', 'Apéritif inclus', 'Ambiance conviviale'],
    price: 20
  },

  // Paris
  {
    id: '9',
    name: 'Tour Eiffel',
    category: 'culture',
    location: 'Champ de Mars',
    city: 'Paris',
    region: 'Île-de-France',
    country: 'France',
    duration: '2-3 heures',
    rating: 4.8,
    reviewCount: 45678,
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop',
    description: 'Monument emblématique de Paris offrant une vue spectaculaire sur la ville.',
    highlights: ['Vue panoramique', 'Restaurant étoilé', 'Illuminations nocturnes'],
    price: 28,
    isPopular: true,
    badge: 'Incontournable'
  },
  {
    id: '10',
    name: 'Musée du Louvre',
    category: 'culture',
    location: 'Rue de Rivoli',
    city: 'Paris',
    region: 'Île-de-France',
    country: 'France',
    duration: 'Journée complète',
    rating: 4.9,
    reviewCount: 34567,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop',
    description: 'Le plus grand musée d\'art du monde avec des œuvres inestimables.',
    highlights: ['La Joconde', 'Vénus de Milo', 'Antiquités égyptiennes'],
    price: 17,
    isPopular: true
  },
  {
    id: '11',
    name: 'Croisière sur la Seine',
    category: 'entertainment',
    location: 'Port de la Bourdonnais',
    city: 'Paris',
    region: 'Île-de-France',
    country: 'France',
    duration: '1 heure',
    rating: 4.6,
    reviewCount: 12345,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop',
    description: 'Découvrez Paris depuis la Seine avec commentaires audio.',
    highlights: ['Monuments illuminés', 'Commentaires multilingues', 'Bar à bord'],
    price: 15
  },

  // Nice
  {
    id: '12',
    name: 'Promenade des Anglais',
    category: 'nature',
    location: 'Promenade des Anglais',
    city: 'Nice',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    duration: '2 heures',
    rating: 4.7,
    reviewCount: 8901,
    image: 'https://images.unsplash.com/photo-1534258478096-58c56d325b28?w=400&h=300&fit=crop',
    description: 'Balade iconique le long de la Baie des Anges.',
    highlights: ['Vue mer', 'Plages', 'Architecture Belle Époque'],
    isFree: true,
    isPopular: true
  },
  {
    id: '13',
    name: 'Vieux Nice',
    category: 'culture',
    location: 'Vieille Ville',
    city: 'Nice',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    duration: '3 heures',
    rating: 4.8,
    reviewCount: 6789,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
    description: 'Explorez les ruelles colorées et le marché aux fleurs.',
    highlights: ['Marché aux fleurs', 'Architecture baroque', 'Cuisine niçoise'],
    price: 20
  },

  // Lyon
  {
    id: '14',
    name: 'Vieux Lyon',
    category: 'culture',
    location: 'Quartier Saint-Jean',
    city: 'Lyon',
    region: 'Auvergne-Rhône-Alpes',
    country: 'France',
    duration: '3 heures',
    rating: 4.8,
    reviewCount: 5678,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=300&fit=crop',
    description: 'Quartier Renaissance avec ses traboules secrètes.',
    highlights: ['Traboules', 'Architecture Renaissance', 'Musée Gadagne'],
    price: 12,
    badge: 'Incontournable'
  },
  {
    id: '15',
    name: 'Parc de la Tête d\'Or',
    category: 'nature',
    location: 'Boulevard des Belges',
    city: 'Lyon',
    region: 'Auvergne-Rhône-Alpes',
    country: 'France',
    duration: '2-3 heures',
    rating: 4.6,
    reviewCount: 3456,
    image: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=400&h=300&fit=crop',
    description: 'Le plus grand parc urbain de France avec zoo et jardin botanique.',
    highlights: ['Zoo gratuit', 'Jardin botanique', 'Lac avec pédalos'],
    isFree: true
  },

  // Bordeaux
  {
    id: '16',
    name: 'Cité du Vin',
    category: 'culture',
    location: 'Esplanade de Pontac',
    city: 'Bordeaux',
    region: 'Nouvelle-Aquitaine',
    country: 'France',
    duration: '3-4 heures',
    rating: 4.7,
    reviewCount: 4567,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description: 'Musée interactif dédié aux civilisations du vin.',
    highlights: ['Parcours interactif', 'Dégustation panoramique', 'Architecture unique'],
    price: 21
  },
  {
    id: '17',
    name: 'Miroir d\'eau',
    category: 'entertainment',
    location: 'Place de la Bourse',
    city: 'Bordeaux',
    region: 'Nouvelle-Aquitaine',
    country: 'France',
    duration: '1 heure',
    rating: 4.5,
    reviewCount: 7890,
    image: 'https://images.unsplash.com/photo-1569163139394-de4b5c1e4e3e?w=400&h=300&fit=crop',
    description: 'Le plus grand miroir d\'eau du monde face à la place de la Bourse.',
    highlights: ['Jeux d\'eau', 'Reflets spectaculaires', 'Animations nocturnes'],
    isFree: true,
    isPopular: true
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
