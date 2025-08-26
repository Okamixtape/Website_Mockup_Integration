'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from './Button'
import { useRouter } from 'next/navigation'

export default function EnhancedSearchForm() {
  const router = useRouter()
  const [destination, setDestination] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;

    // Dispatch events for other components to listen to
    window.dispatchEvent(new CustomEvent('searchUpdated', { detail: destination }));
    window.dispatchEvent(new CustomEvent('destinationUpdated', { detail: destination }));

    // Store in local storage for persistence
    localStorage.setItem('selectedDestination', destination);

    // Scroll to the accommodations section
    const section = document.getElementById('accommodations');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6">
        <div className="flex items-center gap-3">
          {/* Destination */}
          <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
                            placeholder="Où allez-vous ? (ex: Nice, Marseille, Paris...)"
                            className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Submit Button */}
                    <Button
            type="submit"
            variant="filled"
            size="large"
            className="px-8"
            disabled={!destination.trim()}
          >
                      Rechercher
          </Button>
        </div>
      </div>
    </form>
  )
}
