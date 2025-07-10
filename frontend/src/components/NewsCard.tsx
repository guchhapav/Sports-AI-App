import React from 'react'
import { Clock, ExternalLink, BookOpen } from 'lucide-react'
import { NewsArticle } from '../types'
import { getSportById } from '../data/sports'
import { formatDistanceToNow } from '../utils/dateUtils'

interface NewsCardProps {
  article: NewsArticle
  onReadMore?: (article: NewsArticle) => void
}

const NewsCard: React.FC<NewsCardProps> = ({ article, onReadMore }) => {
  const sport = getSportById(article.sport)
  
  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore(article)
    } else {
      window.open(article.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <article className="card p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          {sport && (
            <span className="text-lg" title={sport.name}>
              {sport.icon}
            </span>
          )}
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
            {sport?.name || article.sport.toUpperCase()}
          </span>
          {article.isExplainer && (
            <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 dark:bg-green-900/20 rounded-full">
              <BookOpen className="w-3 h-3 text-green-600 dark:text-green-400" />
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                Explainer
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
          <Clock className="w-4 h-4" />
          <span className="text-sm">
            {formatDistanceToNow(new Date(article.publishedAt))} ago
          </span>
        </div>
      </div>

      {/* Image */}
      {article.imageUrl && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
          {article.title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {article.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {article.source}
          </span>
          
          <button
            onClick={handleReadMore}
            className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-200"
          >
            <span>Read more</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default NewsCard