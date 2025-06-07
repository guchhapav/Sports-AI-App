import { useEffect, useState } from 'react'

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
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;
