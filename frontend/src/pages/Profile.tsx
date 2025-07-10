import React, { useState } from 'react'
import { Save, User as UserIcon } from 'lucide-react'
import { useUser } from '../contexts/UserContext'
import { getSportsByCategory } from '../data/sports'
import SportCard from '../components/SportCard'
import { UserPreferences } from '../types'

const Profile: React.FC = () => {
  const { user, updatePreferences } = useUser()
  const [preferences, setPreferences] = useState<UserPreferences>(
    user?.preferences || { followedSports: [], learningSports: [] }
  )
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

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

  const handleSave = async () => {
    setIsSaving(true)
    setSaveMessage('')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      updatePreferences(preferences)
      setSaveMessage('Preferences saved successfully!')
      
      setTimeout(() => setSaveMessage(''), 3000)
    } catch (error) {
      setSaveMessage('Failed to save preferences. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const hasChanges = () => {
    if (!user?.preferences) return true
    
    return (
      JSON.stringify(preferences.followedSports.sort()) !== 
      JSON.stringify(user.preferences.followedSports.sort()) ||
      JSON.stringify(preferences.learningSports.sort()) !== 
      JSON.stringify(user.preferences.learningSports.sort())
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
            <UserIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Profile Settings
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage your sports preferences and interests
            </p>
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={!hasChanges() || isSaving}
          className="flex items-center space-x-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save className="w-4 h-4" />
          <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
        </button>
      </div>

      {/* Save Message */}
      {saveMessage && (
        <div className={`mb-6 p-4 rounded-lg ${
          saveMessage.includes('successfully')
            ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
            : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
        }`}>
          {saveMessage}
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Following
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {preferences.followedSports.length} sports selected
              </p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {preferences.learningSports.length} sports selected
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sports I Follow */}
      <div className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Sports I Follow
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get regular updates and news for these sports
          </p>
        </div>

        {['major', 'popular', 'niche'].map(category => {
          const categorySports = getSportsByCategory(category as any)
          return (
            <div key={category} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                {category} Sports
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Sports I Want to Learn */}
      <div className="mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Sports I Want to Learn
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get explainers and educational content for these sports
          </p>
        </div>

        {['major', 'popular', 'niche'].map(category => {
          const categorySports = getSportsByCategory(category as any)
          return (
            <div key={category} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                {category} Sports
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  )
}

export default Profile