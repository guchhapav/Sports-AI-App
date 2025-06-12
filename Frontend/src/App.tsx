import React, { useState } from 'react';
import SportsSelector from './components/SportsSelector'
import sportOptions from './assets/sportOptions';
import Summary from './components/Summary';
import FetchHeadlines from './components/FetchHeadlines';
import { useSportSelection } from './hooks/useSportSelection';


const App: React.FC = () => {
  const { selectedSports, toggleSport } = useSportSelection();
  const [summary, setSummary] = useState<string>("");

  return (
    <main style={{ padding: "2rem" }}>
      <SportsSelector selectedSports={selectedSports} toggleSport={toggleSport} />
      <FetchHeadlines selectedSports={selectedSports} setSummary={setSummary} />
      <Summary summary={summary} />
    </main>
  );
};

export default App;
