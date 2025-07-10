import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useUser } from '../contexts/UserContext'
import { SPORTS_DATA, getSportsByCategory } from '../data/sports'
import SportCard from '../components/SportCard'
import { UserPreferences } from '../types'

const Onboarding: React.FC = () => {
  const navigate = useNavigate()
  const { updateUser, completeOnboarding } = useUser()
  const [currentStep, setCurrentStep] = useState(0)
  const [preferences, setPreferences] = useState<UserPreferences>({
    followedSports: [],
    learningSports: []
  })

  const steps = [
    {
      title: 'Welcome to Sports News!',
      subtitle: 'Get personalized sports updates tailored just for you',
      content: 'welcome'
    },
    {
      title: 'What sports do you follow?',
      subtitle: 'Select the sports you\'re already passionate about',
      content: 'following'
    },
    {
      title: 'What would you like to learn?',
      subtitle: 'Choose sports you\'d like to understand better',
      content: 'learning'
    }
  ]

  const handleSportToggle = (sportId: string, type: 'following' | 'learning') => {
    setPreferences(prev => {
      const key = type === 'following' ? 'followedSports' : 'learningSports'
      const currentSports = prev[key]
      
      return {
        ...prev,
        [key]: currentSports.includes(sportId)
          ? currentSports.filter(id => id !== sportId)
          : [...currentSports, sportId]
      }
    })
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    const newUser = {
      id: Date.now().toString(),
      preferences,
      isOnboarded: true,
      createdAt: new Date().toISOString()
    }
    
    updateUser(newUser)
    completeOnboarding()
    navigate('/dashboard')
  }

  const canProceed = () => {
    if (currentStep === 1) {
      return preferences.followedSports.length > 0
    }
    return true
  }

  const renderStepContent = () => {
    const step = steps[currentStep]

    switch (step.content) {
      case 'welcome':
        return (
          <div className="text-center space-y-6">
            <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-4xl text-white">🏆</span>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Stay up-to-date with your favorite sports and discover new ones with personalized news summaries and explanations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📰</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Personalized Feed</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Get news tailored to your interests
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Ask questions about sports rules and terms
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Learn & Grow</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Discover new sports with helpful explainers
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'following':
        return (
          <div className="space-y-6">
            {['major', 'popular', 'niche'].map(category => {
              const categorySports = getSportsByCategory(category as any)
              return (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 capitalize">
                    {category} Sports
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {categorySports.map(sport => (
                      <SportCard
                        key={sport.id}
                        sport={sport}
                        isSelected={preferences.followedSports.includes(sport.id)}
                        onToggle={(sportId) => handleSportToggle(sportId, 'following')}
                        variant="following"
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )

      case 'learning':
        return (
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="text-green-800 dark:text-green-200 text-sm">
                💡 <strong>Tip:</strong> Select sports you'd like to learn about. We'll provide helpful explainers and context for news in these sports.
              </p>
            </div>
            
            {['major', 'popular', 'niche'].map(category => {
              const categorySports = getSportsByCategory(category as any)
              return (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 capitalize">
                    {category} Sports
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {categorySports.map(sport => (
                      <SportCard
                        key={sport.id}
                        sport={sport}
                        isSelected={preferences.learningSports.includes(sport.id)}
                        onToggle={(sportId) => handleSportToggle(sportId, 'learning')}
                        variant="learning"
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% complete
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="card p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {steps[currentStep].title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {steps[currentStep].subtitle}
            </p>
          </div>

          <div className="mb-8">
            {renderStepContent()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className="flex items-center space-x-2 px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex items-center space-x-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>
                {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding