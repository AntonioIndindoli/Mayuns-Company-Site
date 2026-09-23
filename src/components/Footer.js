import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaDiscord,
  FaRedditAlien,
  FaSpotify,
  FaYoutube
} from 'react-icons/fa';
import logo from '../images/logo.png';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
  ];

  const products = [
    { label: 'Destructible Structure Builder', href: '/destructible-structure-builder' },
    { label: 'Backrooms: Unseen Tapes', href: '/backrooms-unseen-tapes' },
    { label: 'Copyright Adventure', href: '/copyright-adventure' },
  ];

  const resources = [
    { label: 'Support Center', href: '/support-center' },
    { label: 'Legal', href: '/legal' },
  ];

  const extras = [
    { label: 'Mayunz Music', href: '/mayunz-music' },
  ];

  const socialLinks = [
    { icon: <FaSpotify />, label: 'Spotify', href: 'https://open.spotify.com/artist/6PQTHgm1vyLOmJPTwYzr4I?si=3G9UstlrTma1AxakT1nIKg' },
    { icon: <FaYoutube />, label: 'YouTube', href: 'https://www.youtube.com/@mayuns_yt' },
    { icon: <FaRedditAlien />, label: 'Reddit', href: 'https://www.reddit.com/r/Mayuns' },
  ];

  const isExternalLink = (href) => /^([a-z][a-z\d+\-.]*:)?\/\//i.test(href) || href.startsWith('mailto:');

  const FooterLink = ({ href, children, ...rest }) => {
    if (isExternalLink(href)) {
      return (
        <a href={href} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} MayunsGames.</p>
          <div className="social-links" aria-label="Social media links">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
