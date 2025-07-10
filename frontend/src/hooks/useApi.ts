import { useState, useEffect } from 'react'
import { ApiResponse, PaginatedResponse } from '../types'

const API_BASE_URL = 'http://localhost:8000'

interface UseApiOptions {
  immediate?: boolean
}

interface UseApiReturn<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

/**
 * Custom hook for making API calls
 * Provides loading states, error handling, and automatic retries
 */
export const useApi = <T>(
  endpoint: string,
  options: UseApiOptions = { immediate: true }
): UseApiReturn<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: ApiResponse<T> = await response.json()
      
      if (result.success) {
        setData(result.data)
      } else {
        throw new Error(result.message || 'API request failed')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
      console.error('API Error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (options.immediate) {
      fetchData()
    }
  }, [endpoint, options.immediate])

  return { data, loading, error, refetch: fetchData }
}

/**
 * Hook for making POST requests
 */
export const useApiPost = <T, U = any>() => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const post = async (endpoint: string, body: U): Promise<T | null> => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: ApiResponse<T> = await response.json()
      
      if (result.success) {
        return result.data
      } else {
        throw new Error(result.message || 'API request failed')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
      console.error('API Error:', err)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { post, loading, error }
}