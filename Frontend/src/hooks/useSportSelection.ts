import { useState } from 'react';

export const useSportSelection = () => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  const toggleSport = (sport: string) => {
    setSelectedSports(prev =>
      prev.includes(sport)
        ? prev.filter(s => s !== sport)
        : [...prev, sport]
    );
  };

  return { selectedSports, toggleSport };
};
