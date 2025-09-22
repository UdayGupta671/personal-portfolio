// src/components/NavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

/*
  NavBar with NavLink so active route gets an 'active' class.
  Styling is lightweight inline for now (you can move to app.css later).
*/
export default function NavBar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "#fff",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: 6,
    background: isActive ? "#164f6b" : "transparent",
  });

  return (
    <header style={{ background: "#226aa3", padding: "10px" }}>
      <nav style={{ display: "flex", gap: "12px", alignItems: "center", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ fontWeight: 700, color: "#fff", marginRight: 12 }}>UV</div>
        <NavLink to="/" end style={linkStyle}>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
        <NavLink to="/services" style={linkStyle}>Services</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </nav>
    </header>
  );
}
