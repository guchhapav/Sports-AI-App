import React, { useState, useEffect } from 'react'
import { RefreshCw, TrendingUp, BookOpen, Clock } from 'lucide-react'
import { useUser } from '../contexts/UserContext'
import { useNews, useNewsSummary } from '../hooks/useNews'
import { getSportById } from '../data/sports'
import NewsCard from '../components/NewsCard'
import LoadingSpinner from '../components/LoadingSpinner'

const Dashboard: React.FC = () => {
  const { user } = useUser()
  const [activeTab, setActiveTab] = useState<'following' | 'learning'>('following')
  
  const followedSports = user?.preferences.followedSports || []
  const learningSports = user?.preferences.learningSports || []
  
  const { 
    articles: followedArticles, 
    loading: followedLoading, 
    refetch: refetchFollowed 
  } = useNews(followedSports)
  
  const { 
    articles: learningArticles, 
    loading: learningLoading, 
    refetch: refetchLearning 
  } = useNews(learningSports)
  
  const { 
    summary, 
    loading: summaryLoading, 
    fetchSummary 
  } = useNewsSummary(followedSports)

  useEffect(() => {
    if (followedSports.length > 0) {
      fetchSummary()
    }
  }, [followedSports.join(',')])

  const handleRefresh = () => {
    if (activeTab === 'following') {
      refetchFollowed()
    } else {
      refetchLearning()
    }
    if (followedSports.length > 0) {
      fetchSummary()
    }
  }

  const currentArticles = activeTab === 'following' ? followedArticles : learningArticles
  const currentLoading = activeTab === 'following' ? followedLoading : learningLoading
  const currentSports = activeTab === 'following' ? followedSports : learningSports

  // Filter articles for learning tab to show more explainers
  const displayArticles = activeTab === 'learning' 
    ? currentArticles.filter(article => article.isExplainer || learningSports.includes(article.sport))
    : currentArticles

  if (!user?.isOnboarded) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome! Please complete your onboarding first.
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Your Sports Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Stay updated with personalized sports news and insights
          </p>
        </div>
        
        <button
          onClick={handleRefresh}
          disabled={currentLoading}
          className="flex items-center space-x-2 btn-secondary"
        >
          <RefreshCw className={`w-4 h-4 ${currentLoading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Summary Section */}
      {followedSports.length > 0 && (
        <div className="card p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Today's Sports Summary
            </h2>
          </div>
          
          {summaryLoading ? (
            <div className="flex items-center justify-center py-8">
              <LoadingSpinner />
              <span className="ml-3 text-gray-600 dark:text-gray-300">
                Generating your personalized summary...
              </span>
            </div>
          ) : summary ? (
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {summary}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No summary available. Try refreshing or check your followed sports.
            </p>
          )}
        </div>
      )}

      {/* Sports Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('following')}
          className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
            activeTab === 'following'
              ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Following ({followedSports.length})</span>
        </button>
        
        <button
          onClick={() => setActiveTab('learning')}
          className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
            activeTab === 'learning'
              ? 'bg-white dark:bg-gray-700 text-green-600 dark:text-green-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Learning ({learningSports.length})</span>
        </button>
      </div>

      {/* Sports List */}
      {currentSports.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {currentSports.map(sportId => {
              const sport = getSportById(sportId)
              return sport ? (
                <div
                  key={sportId}
                  className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${
                    activeTab === 'following'
                      ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                  }`}
                >
                  <span>{sport.icon}</span>
                  <span>{sport.name}</span>
                </div>
              ) : null
            })}
          </div>
        </div>
      )}

      {/* Content */}
      {currentSports.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            {activeTab === 'following' ? (
              <TrendingUp className="w-8 h-8 text-gray-400" />
            ) : (
              <BookOpen className="w-8 h-8 text-gray-400" />
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {activeTab === 'following' 
              ? 'No sports selected to follow' 
              : 'No sports selected to learn'
            }
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {activeTab === 'following'
              ? 'Add some sports you follow to see personalized news and updates.'
              : 'Add some sports you want to learn about to see helpful explainers and guides.'
            }
          </p>
          <button
            onClick={() => window.location.href = '/profile'}
            className="btn-primary"
          >
            Update Preferences
          </button>
        </div>
      ) : currentLoading ? (
        <div className="flex items-center justify-center py-12">
          <LoadingSpinner size="lg" />
          <span className="ml-4 text-lg text-gray-600 dark:text-gray-300">
            Loading your sports news...
          </span>
        </div>
      ) : displayArticles.length === 0 ? (
        <div className="text-center py-12">
          <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No articles available
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Check back later for the latest sports news and updates.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {displayArticles.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard