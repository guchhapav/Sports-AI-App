import React from 'react';

type SportsSelectorProps = {
  selectedSports: string[];
  toggleSport: (sport: string) => void;
};

const availableSports = ["nfl", "nba", "mlb", "nhl", "soccer"];

const SportsSelector: React.FC<SportsSelectorProps> = ({
  selectedSports,
  toggleSport
}) => {
  return (
    <div>
      <h2>Select Sports</h2>
      {availableSports.map(sport => (
        <label key={sport} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={selectedSports.includes(sport)}
            onChange={() => toggleSport(sport)}
          />
          {sport.toUpperCase()}
        </label>
      ))}
    </div>
  );
};

export default SportsSelector;
