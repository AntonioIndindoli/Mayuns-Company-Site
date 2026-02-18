// In src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} MayunsGames. Website created by{" "}
          <a href="https://antonioindindoli.com" target="_blank" rel="noopener noreferrer">
            Antonio Indindoli
          </a>.
        </p>
        <div className="social-links">
          <p>Contact us at support@mayuns.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
