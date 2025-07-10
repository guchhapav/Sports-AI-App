export interface Sport {
  id: string
  name: string
  icon: string
  category: 'major' | 'popular' | 'niche'
}

export interface UserPreferences {
  followedSports: string[]
  learningSports: string[]
}

export interface User {
  id: string
  name?: string
  email?: string
  preferences: UserPreferences
  isOnboarded: boolean
  createdAt: string
}

export interface NewsArticle {
  id: string
  title: string
  summary: string
  content: string
  sport: string
  publishedAt: string
  source: string
  url: string
  imageUrl?: string
  isExplainer?: boolean
}

export interface ChatMessage {
  id: string
  content: string
  isUser: boolean
  timestamp: string
  relatedArticleId?: string
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}