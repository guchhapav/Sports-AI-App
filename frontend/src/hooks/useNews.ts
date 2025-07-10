import { useState, useEffect } from 'react'
import { NewsArticle } from '../types'
import { MOCK_ARTICLES } from '../data/mockData'

/**
 * Hook for fetching and managing news articles
 * Currently uses mock data, but ready for backend integration
 */
export const useNews = (sports?: string[]) => {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchNews = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Filter articles by sports if provided
      let filteredArticles = MOCK_ARTICLES
      if (sports && sports.length > 0) {
        filteredArticles = MOCK_ARTICLES.filter(article => 
          sports.includes(article.sport)
        )
      }
      
      setArticles(filteredArticles)
    } catch (err) {
      setError('Failed to fetch news articles')
      console.error('News fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [sports?.join(',')])

  return { articles, loading, error, refetch: fetchNews }
}

/**
 * Hook for fetching personalized news summary
 */
export const useNewsSummary = (sports: string[]) => {
  const [summary, setSummary] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSummary = async () => {
    if (sports.length === 0) return
    
    setLoading(true)
    setError(null)
    
    try {
      // Simulate API call to backend
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock summary based on selected sports
      const mockSummary = `Here's your personalized sports update for ${sports.join(', ')}:\n\n• Major games and standout performances from your followed sports\n• Key player movements and trade rumors\n• Upcoming matchups you won't want to miss\n• Breaking news and injury updates`
      
      setSummary(mockSummary)
    } catch (err) {
      setError('Failed to generate summary')
      console.error('Summary fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  return { summary, loading, error, fetchSummary }
}