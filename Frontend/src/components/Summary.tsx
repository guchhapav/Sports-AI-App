import React from "react";

type SummaryProps = {
  summary: string;
};

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section style={{ marginTop: "2rem" }}>
      <div style={{ padding: "2rem" }}>
        <h2>Daily Update</h2>
        {summary
          .split("\n")
          .filter(Boolean)
          .map((point, index) => (
            <p key={index}>{point.trim()}</p>
          ))}
      </div>
    </section>
  );
};

export default Summary;
