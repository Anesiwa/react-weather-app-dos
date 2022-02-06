import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div id="contact">
        <span> Open-sourced code by Amelia Arku </span>
        <a
          href="https://github.com/Anesiwa/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          on GitHub
        </a>
        <span> and hosted on </span>
        <a
          href="https://jolly-murdock-051a58.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </div>
    </div>
  );
}
