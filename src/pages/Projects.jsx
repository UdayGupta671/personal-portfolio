// src/pages/Projects.jsx
import React from "react";
import project1logo from "../assets/projects/project1logo.png";
import project2logo from "../assets/projects/project2logo.png";


export default function Projects() {
  return (
    <div style={{ padding: 24, maxWidth: 1000, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 20 }}>Projects</h2>
      
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {/* Project 1 */}
          <tr style={{ borderBottom: "1px solid #ccc" }}>
            <td style={{ width: "200px", padding: "12px" }}>
              <img 
                src={project1logo}
                alt="Project 1"
                style={{ width: "100%", borderRadius: 8 }}
              />
            </td>
            <td style={{ padding: "12px", verticalAlign: "top" }}>
              <h3>Portfolio Website</h3>
              <p>
                A personal portfolio built with React and Vite showcasing navigation, routing, 
                and multiple pages.
              </p>
            </td>
          </tr>

          {/* Project 2 */}
          <tr style={{ borderBottom: "1px solid #ccc" }}>
            <td style={{ width: "200px", padding: "12px" }}>
              <img 
                src={project2logo} 
                alt="Project 2"
                style={{ width: "100%", borderRadius: 8 }}
              />
            </td>
            <td style={{ padding: "12px", verticalAlign: "top" }}>
              <h3>E-Commerce UI</h3>
              <p>
                Frontend prototype for an e-commerce shop with a product listing page, 
                shopping cart, and responsive design.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
