import { Sport } from '../types'

export const SPORTS_DATA: Sport[] = [
  // Major Sports
  { id: 'nfl', name: 'NFL', icon: '🏈', category: 'major' },
  { id: 'nba', name: 'NBA', icon: '🏀', category: 'major' },
  { id: 'mlb', name: 'MLB', icon: '⚾', category: 'major' },
  { id: 'nhl', name: 'NHL', icon: '🏒', category: 'major' },
  { id: 'soccer', name: 'Soccer', icon: '⚽', category: 'major' },
  
  // Popular Sports
  { id: 'tennis', name: 'Tennis', icon: '🎾', category: 'popular' },
  { id: 'golf', name: 'Golf', icon: '⛳', category: 'popular' },
  { id: 'boxing', name: 'Boxing', icon: '🥊', category: 'popular' },
  { id: 'mma', name: 'MMA', icon: '🥋', category: 'popular' },
  { id: 'racing', name: 'Auto Racing', icon: '🏎️', category: 'popular' },
  { id: 'olympics', name: 'Olympics', icon: '🏅', category: 'popular' },
  
  // Niche Sports
  { id: 'cricket', name: 'Cricket', icon: '🏏', category: 'niche' },
  { id: 'rugby', name: 'Rugby', icon: '🏉', category: 'niche' },
  { id: 'cycling', name: 'Cycling', icon: '🚴', category: 'niche' },
  { id: 'swimming', name: 'Swimming', icon: '🏊', category: 'niche' },
  { id: 'track', name: 'Track & Field', icon: '🏃', category: 'niche' },
  { id: 'volleyball', name: 'Volleyball', icon: '🏐', category: 'niche' },
]

export const getSportById = (id: string): Sport | undefined => {
  return SPORTS_DATA.find(sport => sport.id === id)
}

export const getSportsByCategory = (category: Sport['category']): Sport[] => {
  return SPORTS_DATA.filter(sport => sport.category === category)
}