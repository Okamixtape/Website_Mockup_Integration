/**
 * Taxonomie géographique pour lier hébergements et activités
 * Permet de créer un parcours utilisateur cohérent
 */

export interface Neighborhood {
  id: string
  name: string
  city: string
  description: string
  coords?: [number, number] // [latitude, longitude]
}

/**
 * Quartiers par ville
 * Structure hiérarchique : ville -> quartier
 */
export const neighborhoods: Record<string, Record<string, Neighborhood>> = {
  marseille: {
    'vieux-port': {
      id: 'vieux-port',
      name: 'Vieux-Port',
      city: 'Marseille',
      description: 'Le cœur historique de Marseille avec son port emblématique',
      coords: [43.2965, 5.3698]
    },
    'calanques': {
      id: 'calanques',
      name: 'Calanques',
      city: 'Marseille',
      description: 'Parc national avec criques et falaises calcaires',
      coords: [43.2108, 5.4461]
    },
    'prado': {
      id: 'prado',
      name: 'Plage du Prado',
      city: 'Marseille',
      description: 'Front de mer avec plages et activités balnéaires',
      coords: [43.2583, 5.3792]
    },
    'joliette': {
      id: 'joliette',
      name: 'La Joliette',
      city: 'Marseille',
      description: 'Quartier moderne du port avec architecture contemporaine',
      coords: [43.3067, 5.3647]
    },
    'frioul': {
      id: 'frioul',
      name: 'Îles du Frioul',
      city: 'Marseille',
      description: 'Archipel préservé pour plongée et nature',
      coords: [43.2792, 5.3050]
    },
    'borély': {
      id: 'borély',
      name: 'Parc Borély',
      city: 'Marseille',
      description: 'Parc verdoyant et zone résidentielle prisée',
      coords: [43.2558, 5.3794]
    }
  },
  paris: {
    'montmartre': {
      id: 'montmartre',
      name: 'Montmartre',
      city: 'Paris',
      description: 'Quartier bohème avec le Sacré-Cœur',
      coords: [48.8867, 2.3431]
    },
    'champs-elysees': {
      id: 'champs-elysees',
      name: 'Champs-Élysées',
      city: 'Paris',
      description: 'Avenue prestigieuse et quartier huppé',
      coords: [48.8698, 2.3078]
    },
    'marais': {
      id: 'marais',
      name: 'Le Marais',
      city: 'Paris',
      description: 'Quartier historique avec musées et galeries',
      coords: [48.8566, 2.3522]
    },
    'tour-eiffel': {
      id: 'tour-eiffel',
      name: 'Tour Eiffel / Champ de Mars',
      city: 'Paris',
      description: 'Zone emblématique autour de la Tour Eiffel',
      coords: [48.8584, 2.2945]
    },
    'seine': {
      id: 'seine',
      name: 'Bords de Seine',
      city: 'Paris',
      description: 'Quais de la Seine et croisières',
      coords: [48.8566, 2.3522]
    }
  },
  nice: {
    'promenade-anglais': {
      id: 'promenade-anglais',
      name: 'Promenade des Anglais',
      city: 'Nice',
      description: 'Baie des Anges et front de mer iconique',
      coords: [43.6952, 7.2653]
    },
    'vieux-nice': {
      id: 'vieux-nice',
      name: 'Vieux Nice',
      city: 'Nice',
      description: 'Centre historique avec ruelles colorées',
      coords: [43.6961, 7.2750]
    }
  },
  lyon: {
    'vieux-lyon': {
      id: 'vieux-lyon',
      name: 'Vieux Lyon',
      city: 'Lyon',
      description: 'Quartier Renaissance avec traboules',
      coords: [45.7640, 4.8270]
    },
    'tete-or': {
      id: 'tete-or',
      name: 'Parc de la Tête d\'Or',
      city: 'Lyon',
      description: 'Grand parc urbain avec zoo et lac',
      coords: [45.7772, 4.8545]
    }
  },
  bordeaux: {
    'saint-pierre': {
      id: 'saint-pierre',
      name: 'Saint-Pierre',
      city: 'Bordeaux',
      description: 'Quartier historique bordelais',
      coords: [44.8378, -0.5792]
    },
    'chartrons': {
      id: 'chartrons',
      name: 'Les Chartrons',
      city: 'Bordeaux',
      description: 'Quartier des vins et antiquaires',
      coords: [44.8534, -0.5724]
    },
    'bourse': {
      id: 'bourse',
      name: 'Place de la Bourse',
      city: 'Bordeaux',
      description: 'Place emblématique avec miroir d\'eau',
      coords: [44.8412, -0.5698]
    }
  },
  annecy: {
    'lac': {
      id: 'lac',
      name: 'Bord du Lac',
      city: 'Annecy',
      description: 'Front de lac avec vue sur les montagnes',
      coords: [45.8992, 6.1294]
    },
    'vieille-ville': {
      id: 'vieille-ville',
      name: 'Vieille Ville',
      city: 'Annecy',
      description: 'Centre médiéval avec canaux',
      coords: [45.8990, 6.1294]
    }
  },
  biarritz: {
    'grande-plage': {
      id: 'grande-plage',
      name: 'Grande Plage',
      city: 'Biarritz',
      description: 'Plage principale pour surf et baignade',
      coords: [43.4832, -1.5586]
    }
  }
}

/**
 * Helper pour obtenir un quartier par son ID et sa ville
 */
export function getNeighborhood(city: string, neighborhoodId: string): Neighborhood | undefined {
  const cityKey = city.toLowerCase().replace(/\s+/g, '-')
  return neighborhoods[cityKey]?.[neighborhoodId]
}

/**
 * Helper pour obtenir tous les quartiers d'une ville
 */
export function getCityNeighborhoods(city: string): Neighborhood[] {
  const cityKey = city.toLowerCase().replace(/\s+/g, '-')
  const cityNeighborhoods = neighborhoods[cityKey]
  return cityNeighborhoods ? Object.values(cityNeighborhoods) : []
}

/**
 * Helper pour obtenir le nom formaté d'un quartier
 */
export function getNeighborhoodName(city: string, neighborhoodId: string): string {
  const neighborhood = getNeighborhood(city, neighborhoodId)
  return neighborhood ? neighborhood.name : neighborhoodId
}
