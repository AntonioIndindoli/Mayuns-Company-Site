import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaDiscord,
  FaRedditAlien,
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

  const socialLinks = [
    { icon: <FaDiscord />, label: 'Discord', href: 'https://discord.com' },
    { icon: <FaYoutube />, label: 'YouTube', href: 'https://www.youtube.com/@mayunsco' },
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
        <div className="footer-main-grid">
          <section className="footer-brand-column">
            <FooterLink href="/" className="footer-brand" aria-label="MayunsGames home">
              <img src={logo} alt="MayunsGames logo" className="footer-logo" />
              <div className="footer-brand-text">
                <h3>MayunsGames</h3>
              </div>
            </FooterLink>
            <p className="footer-contact">
              Contact us: <a href="mailto:support@mayuns.com">support@mayuns.com</a>
            </p>
          </section>

          <section className="footer-links-column" aria-label="Products">
            <h4>Products</h4>
            <ul>
              {products.map((product) => (
                <li key={product.label}>
                  <FooterLink href={product.href}>{product.label}</FooterLink>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-links-column" aria-label="Quick links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-links-column" aria-label="Resources">
            <h4>Resources</h4>
            <ul>
              {resources.map((resource) => (
                <li key={resource.label}>
                  <FooterLink href={resource.href}>{resource.label}</FooterLink>
                </li>
              ))}
            </ul>
          </section>

        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} MayunsGames. Website created by <a href="https://antonioindindoli.com" target="_blank" rel="noopener noreferrer">Antonio Indindoli</a>.</p>
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
