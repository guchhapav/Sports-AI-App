import React, { createContext, useContext, useState, useEffect } from 'react'
import { User, UserPreferences } from '../types'

interface UserContextType {
  user: User | null
  updateUser: (userData: Partial<User>) => void
  updatePreferences: (preferences: UserPreferences) => void
  completeOnboarding: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

interface UserProviderProps {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  const updateUser = (userData: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...userData } : null)
  }

  const updatePreferences = (preferences: UserPreferences) => {
    setUser(prev => prev ? { ...prev, preferences } : null)
  }

  const completeOnboarding = () => {
    setUser(prev => prev ? { ...prev, isOnboarded: true } : null)
  }

  return (
    <UserContext.Provider value={{ user, updateUser, updatePreferences, completeOnboarding }}>
      {children}
    </UserContext.Provider>
  )
}