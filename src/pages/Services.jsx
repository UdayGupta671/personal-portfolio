import React from "react";
import servicesImage from "../assets/projects/services.jpg";

export default function Services() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>My Services</h1>

      <img
        src={servicesImage}
        alt="Services"
        style={{ width: "500px", margin: "20px auto", borderRadius: "8px" }}
      />

      <ul style={{ listStyleType: "none", padding: 0, fontSize: "18px" }}>
        <li>🌐 Web Development</li>
        <li>📱 Mobile App Development</li>
        <li>💻 General Programming (Python, C#, JavaScript)</li>
        <li>🎨 UI/UX Design</li>
      </ul>
    </div>
  );
}
