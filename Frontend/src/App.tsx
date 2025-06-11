import React, { useState } from 'react';
import Selection from './components/Selection'

const App: React.FC = () => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [headlines, setHeadlines] = useState<string[]>([]);

  const toggleSport = (sport: string) => {
    setSelectedSports(prev =>
      prev.includes(sport)
        ? prev.filter(s => s !== sport)
        : [...prev, sport]
    );
  };

  const fetchHeadlines = async () => {
    try {
      const res = await fetch("http://localhost:8000/headlines", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sports: selectedSports }),
      });
      const data = await res.json();
      console.log("Response from backend:", data);
      setHeadlines(data.headlines);
    } catch (err) {
      console.error(err);
      setHeadlines(["Failed to fetch headlines"]);
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <Selection
        selectedSports={selectedSports}
        toggleSport={toggleSport}
      />
      <button onClick={fetchHeadlines} style={{ marginTop: "1rem" }}>
        Fetch Headlines
      </button>

      <section style={{ marginTop: "2rem" }}>
        <h2>Headlines</h2>
        <ul>
          {headlines.map((title, idx) => (
            <li key={idx}>{title}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
