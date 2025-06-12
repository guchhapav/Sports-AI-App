import React, { useState } from 'react';
import SportsSelector from './components/SportsSelector'
import sportOptions from './assets/sportOptions';

const App: React.FC = () => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [summary, setSummary] = useState<string>("");

  const toggleSport = (sport: string) => {
    setSelectedSports(prev =>
      prev.includes(sport)
        ? prev.filter(s => s !== sport)
        : [...prev, sport]
    );
  };

  const fetchHeadlines = async () => {
    try {
      const backendSports = selectedSports.map(sport => sportOptions[sport]);

      const res = await fetch("http://localhost:8000/summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sports: backendSports }),
      });

      const data = await res.json();
      console.log("Response from backend:", data);
      setSummary(data.summary);
    } catch (err) {
      console.error(err);
      setSummary("Failed to fetch headlines");
    }
  };


  return (
    <main style={{ padding: "2rem" }}>
      <SportsSelector
        selectedSports={selectedSports}
        toggleSport={toggleSport}
      />
      <button onClick={fetchHeadlines} style={{ marginTop: "1rem" }}>
        Fetch Headlines
      </button>

      <section style={{ marginTop: "2rem" }}>
        <h2>Daily Update</h2>
        <p>
          {summary}
        </p>
      </section>
    </main>
  );
};

export default App;
