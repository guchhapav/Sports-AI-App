import React from 'react';
import sportOptions from '../assets/sportOptions';

type SportsSelectorProps = {
  selectedSports: string[];
  toggleSport: (sport: string) => void;
};

const SportsSelector: React.FC<SportsSelectorProps> = ({
  selectedSports,
  toggleSport
}) => {
  return (
    <div>
      <h2>Select Sports</h2>
      {Object.keys(sportOptions).map(sport => (
        <label key={sport} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={selectedSports.includes(sport)}
            onChange={() => toggleSport(sport)}
          />
          {sport}
        </label>
      ))}
    </div>
  );
};

export default SportsSelector;
