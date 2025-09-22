import React from "react";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <main style={{ padding: "20px" }}>
        <h1>Welcome to My Portfolio</h1>
        <p>This is just a test render to confirm React is working.</p>
      </main>
    </div>
  );
}
