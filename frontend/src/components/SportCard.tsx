import React from 'react'
import { Check } from 'lucide-react'
import { Sport } from '../types'
import { clsx } from 'clsx'

interface SportCardProps {
  sport: Sport
  isSelected: boolean
  onToggle: (sportId: string) => void
  variant?: 'following' | 'learning'
}

const SportCard: React.FC<SportCardProps> = ({ 
  sport, 
  isSelected, 
  onToggle, 
  variant = 'following' 
}) => {
  const handleClick = () => {
    onToggle(sport.id)
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'relative p-4 rounded-xl border-2 transition-all duration-200 text-left w-full',
        'hover:scale-105 hover:shadow-md',
        isSelected
          ? variant === 'following'
            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
            : 'border-green-500 bg-green-50 dark:bg-green-900/20'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
      )}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className={clsx(
          'absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center',
          variant === 'following'
            ? 'bg-primary-500'
            : 'bg-green-500'
        )}>
          <Check className="w-4 h-4 text-white" />
        </div>
      )}

      {/* Sport icon and name */}
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{sport.icon}</div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {sport.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
            {sport.category}
          </p>
        </div>
      </div>
    </button>
  )
}

export default SportCard