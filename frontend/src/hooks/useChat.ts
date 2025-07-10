import { useState } from 'react'
import { ChatMessage } from '../types'
import { MOCK_CHAT_MESSAGES } from '../data/mockData'

/**
 * Hook for managing chat functionality
 * Handles sending messages and maintaining chat history
 */
export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(MOCK_CHAT_MESSAGES)
  const [loading, setLoading] = useState(false)

  const sendMessage = async (content: string, relatedArticleId?: string) => {
    // Add user message immediately
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date().toISOString(),
      relatedArticleId
    }
    
    setMessages(prev => [...prev, userMessage])
    setLoading(true)

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Generate mock AI response
      const aiResponse = generateMockResponse(content)
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        isUser: false,
        timestamp: new Date().toISOString(),
        relatedArticleId
      }
      
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Chat error:', error)
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date().toISOString()
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  const clearChat = () => {
    setMessages([])
  }

  return { messages, loading, sendMessage, clearChat }
}

/**
 * Generate mock AI responses based on user input
 */
const generateMockResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase()
  
  if (lowerMessage.includes('offside')) {
    return 'Offside in soccer occurs when a player is nearer to the opponent\'s goal line than both the ball and the second-last opponent when the ball is played by a teammate. The player must be actively involved in play to be called offside.'
  }
  
  if (lowerMessage.includes('overtime')) {
    return 'Overtime rules vary by sport. In basketball, it\'s a 5-minute extra period. In football, it\'s sudden death in playoffs. In hockey, it\'s 3-on-3 for 5 minutes, then a shootout.'
  }
  
  if (lowerMessage.includes('hat trick')) {
    return 'A hat trick is scoring three goals in a single game, most commonly used in hockey and soccer. The term originated from cricket and fans traditionally throw hats onto the ice/field in celebration.'
  }
  
  if (lowerMessage.includes('trade') || lowerMessage.includes('transfer')) {
    return 'Player trades and transfers are complex processes involving contracts, salary caps, and league rules. Teams often trade players to improve their roster or manage their salary cap situation.'
  }
  
  // Default response
  return 'That\'s an interesting question about sports! While I don\'t have specific information about that topic right now, I\'d recommend checking the latest news articles or official league sources for the most up-to-date information.'
}