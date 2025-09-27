import React from "react";
import headshot from "../assets/projects/Uday_Headshot.png";   // your headshot
import resumePDF from "../assets/projects/Uday_Gupta_Resume.pdf"; // your resume

export default function About() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>About Me</h1>

      <img
        src={headshot}
        alt="My Headshot"
        style={{ width: "180px", borderRadius: "50%", margin: "20px auto" }}
      />

      <p style={{ fontSize: "18px", maxWidth: "700px", margin: "20px auto" }}>
        Hi, I’m <strong>Uday Veer</strong>, a web developer and technology enthusiast. I enjoy
        building creative, responsive, and user-friendly web applications using React and other
        modern tools. My passion lies in solving problems through clean and efficient code.
      </p>

      <a
        href={resumePDF}
        download="UdayVeer-Resume.pdf"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#28a745",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        📄 Download My Resume
      </a>
    </div>
  );
}
