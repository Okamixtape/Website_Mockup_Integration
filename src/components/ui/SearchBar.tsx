'use client'

interface SearchBarProps {
  placeholder?: string
  size?: 'medium' | 'large'
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export function SearchBar({ 
  placeholder = "Rechercher...", 
  size = 'medium',
  className = '',
  value,
  onChange
}: SearchBarProps) {
  const handleSearch = (searchValue: string) => {
    // Déclencher un événement global de recherche
    window.dispatchEvent(new CustomEvent('searchUpdated', { detail: searchValue }))
    if (onChange) {
      onChange(searchValue)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder}
        className={`w-full pl-12 pr-4 bg-surface-container rounded-xl border border-outline-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
          size === 'large' ? 'py-4 text-lg' : 'py-3'
        }`}
      />
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
        search
      </span>
    </div>
  )
}
