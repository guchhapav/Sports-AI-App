import React, { useEffect, useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8000/greet")
      .then(res => res.json())
      .then(data => setGreeting(data.message))
      .catch(() => setGreeting("Error loading greeting."));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <p>{greeting}</p>
    </div>
  );
}

export default App;
