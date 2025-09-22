import React from "react";

export default function Logo({ className = "logo-svg" }) {
  return (
    <div className={className} aria-hidden="true" title="Site logo">
      <svg viewBox="0 0 100 100" width="44" height="44" xmlns="http://www.w3.org/2000/svg" role="img">
        <polygon points="50,6 90,26 90,74 50,94 10,74 10,26" fill="#226aa3" />
        <text x="50" y="60" fontSize="32" textAnchor="middle" fill="#fff" fontFamily="Arial" fontWeight="700">
          UV
        </text>
      </svg>
    </div>
  );
}
JSX
