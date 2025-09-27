// src/pages/Contact.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // No data handling, just redirect
    navigate("/");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Me</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="text" name="lastName" placeholder="Last Name" required />
        <input type="tel" name="contactNumber" placeholder="Contact Number" />
        <input type="email" name="email" placeholder="Email Address" required />
        <textarea name="message" placeholder="Your Message" rows="4" required />

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#0077cc",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
