'use client'

import { useState, useEffect, useCallback } from 'react'

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedAuthState = localStorage.getItem('isLoggedIn')
    if (storedAuthState === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const login = useCallback(() => {
    localStorage.setItem('isLoggedIn', 'true')
    setIsLoggedIn(true)
    window.dispatchEvent(new Event('authChange'))
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
    window.dispatchEvent(new Event('authChange'))
  }, [])

  return { isLoggedIn, login, logout }
}
