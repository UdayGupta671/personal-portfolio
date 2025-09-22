// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Hello — I’m Uday Veer</h1>
      <p style={{ color: "#444", marginBottom: 12 }}>
        I build clean, accessible web apps and help businesses scale with pragmatic engineering.
      </p>
      <blockquote style={{ color: "#666", fontStyle: "italic" }}>
        Mission: Ship maintainable web experiences that delight users and solve real problems.
      </blockquote>
    </div>
  );
}
