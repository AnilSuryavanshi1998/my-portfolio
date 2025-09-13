import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Anil Suryavanshi. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/AnilSuryavanshi1998" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/anilsuryavanshi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;



