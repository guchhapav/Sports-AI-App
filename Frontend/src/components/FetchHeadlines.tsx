import React from 'react';
import sportOptions from '../assets/sportOptions';

type FetchHeadlinesProps = {
  selectedSports: string[];
  setSummary: (summary: string) => void;
};

const FetchHeadlines: React.FC<FetchHeadlinesProps> = ({ selectedSports, setSummary }) => {
  const fetchHeadlines = async () => {
    try {
      const backendSports = selectedSports.map(s => sportOptions[s]);

      const res = await fetch("http://localhost:8000/summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sports: backendSports }),
      });

      const data = await res.json();
      setSummary(data.summary);
    } catch (err) {
      console.error(err);
      setSummary("Failed to fetch headlines");
    }
  };

  return (
    <button onClick={fetchHeadlines} style={{ marginTop: "1rem" }}>
      Fetch Headlines
    </button>
  );
};

export default FetchHeadlines;
