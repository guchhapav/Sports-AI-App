import React from 'react';
import { useApp } from '../context/AppContext';
import SportCard from '../components/SportCard';
import { Settings, Info } from 'lucide-react';

const Preferences: React.FC = () => {
  const { sports, updateSportPreference } = useApp();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="d-flex align-items-center mb-3">
            <Settings className="text-primary me-2" size={32} />
            <h1 className="display-5 fw-bold mb-0">Sports Preferences</h1>
          </div>
          <p className="lead text-muted">
            Choose the sports you follow and those you're curious to learn about
          </p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <div className="alert alert-info d-flex align-items-start">
            <Info className="me-2 mt-1" size={20} />
            <div>
              <strong>How it works:</strong>
              <ul className="mb-0 mt-2">
                <li>Click once to <strong>follow</strong> a sport (get regular news updates)</li>
                <li>Click again to mark as <strong>curious</strong> (get educational content)</li>
                <li>Click a third time to <strong>remove</strong> from your interests</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {sports.map(sport => (
          <SportCard
            key={sport.id}
            sport={sport}
            onSelect={updateSportPreference}
          />
        ))}
      </div>
    </div>
  );
};

export default Preferences;