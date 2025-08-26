import React, { useEffect, useState } from "react";
import { fetchNews, fetchSummary } from "../api";

const Dashboard: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews()
      .then(data => setArticles(data.articles))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Example: Summarize the first article on click
  const handleSummarize = async (content: string) => {
    try {
      const { summary } = await fetchSummary(content);
      alert(summary);
    } catch (e) {
      alert("Failed to summarize");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Sports News</h2>
      {articles.map((a, i) => (
        <div key={i} style={{ marginBottom: 16 }}>
          <h4>{a.title}</h4>
          <p>{a.summary || a.content}</p>
          <button onClick={() => handleSummarize(a.content)}>
            Summarize with AI
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;