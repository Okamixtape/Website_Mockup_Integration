// Fonction utilitaire pour interpoler les variables dans les chaînes de traduction
export function interpolate(template: string, values: Record<string, string | number>): string {
  return template.replace(/{(\w+)}/g, (match, key) => {
    return values[key]?.toString() || match
  })
}

// Type helper pour extraire les clés de traduction
export type TFunction = (path: string, values?: Record<string, string | number>) => string

// Fonction pour accéder aux traductions imbriquées
export function getNestedTranslation(obj: any, path: string): string {
  return path.split('.').reduce((acc, key) => acc?.[key] || path, obj)
}
