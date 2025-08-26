import React from 'react';
import { Sport } from '../types';

interface SportCardProps {
  sport: Sport;
  onSelect: (sportId: string, category: 'following' | 'curious' | null) => void;
}

const SportCard: React.FC<SportCardProps> = ({ sport, onSelect }) => {
  const getCardClass = () => {
    let baseClass = 'card sport-card h-100';
    if (sport.category === 'following') {
      baseClass += ' selected';
    } else if (sport.category === 'curious') {
      baseClass += ' curious';
    }
    return baseClass;
  };

  const handleClick = () => {
    let newCategory: 'following' | 'curious' | null = null;
    
    if (sport.category === null) {
      newCategory = 'following';
    } else if (sport.category === 'following') {
      newCategory = 'curious';
    } else {
      newCategory = null;
    }
    
    onSelect(sport.id, newCategory);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className={getCardClass()} onClick={handleClick}>
        <div className="card-body text-center">
          <div className="display-4 mb-3">{sport.icon}</div>
          <h5 className="card-title">{sport.name}</h5>
          <div className="mt-3">
            {sport.category === 'following' && (
              <span className="badge bg-primary sport-badge">Following</span>
            )}
            {sport.category === 'curious' && (
              <span className="badge bg-info sport-badge">Curious</span>
            )}
            {sport.category === null && (
              <span className="badge bg-secondary sport-badge">Not Selected</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportCard;