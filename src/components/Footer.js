import React from 'react';
import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaYoutube
} from 'react-icons/fa';
import logo from '../logo.png';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Showcase', href: '/showcase' },
    { label: 'Careers', href: '/careers' }
  ];

  const products = [
    { label: 'Destructible Structure Builder', href: '/destructible-structure-builder' },
    { label: 'Backrooms: Unseen Tapes', href: '/backrooms-unseen-tapes' },
    { label: 'Copyright Adventure', href: '/copyright-adventure' },
    { label: 'Coming Soon', href: '/coming-soon' }
  ];

  const resources = [
    { label: 'Support Center', href: '/support' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Press Kit', href: '/press' }
  ];

  const socialLinks = [
    { icon: <FaDiscord />, label: 'Discord', href: 'https://discord.com' },
    { icon: <FaYoutube />, label: 'YouTube', href: 'https://youtube.com' },
    { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com' },
    { icon: <FaFacebookF />, label: 'Facebook', href: 'https://facebook.com' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com' }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-main-grid">
          <section className="footer-brand-column">
            <a href="/" className="footer-brand" aria-label="MayunsGames home">
              <img src={logo} alt="MayunsGames logo" className="footer-logo" />
              <div className="footer-brand-text">
                <h3>MayunsGames</h3>
                <p>Crafting immersive experiences, one project at a time.</p>
              </div>
            </a>
            <p className="footer-contact">
              Contact us: <a href="mailto:support@mayuns.com">support@mayuns.com</a>
            </p>
            <p className="footer-contact">Mon–Fri, 9:00 AM to 6:00 PM (EST)</p>
          </section>

          <section className="footer-links-column" aria-label="Quick links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-links-column" aria-label="Products">
            <h4>Products</h4>
            <ul>
              {products.map((product) => (
                <li key={product.label}>
                  <a href={product.href}>{product.label}</a>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-links-column" aria-label="Resources">
            <h4>Resources</h4>
            <ul>
              {resources.map((resource) => (
                <li key={resource.label}>
                  <a href={resource.href}>{resource.label}</a>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-newsletter-column" aria-label="Newsletter sign-up">
            <h4>Stay in the Loop</h4>
            <p>Get product updates, patch notes, and release announcements.</p>
            <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input id="footer-email" type="email" placeholder="Enter your email" />
              <button type="submit" aria-label="Subscribe">
                <FaPaperPlane />
              </button>
            </form>
            <small>By subscribing, you agree to receive occasional emails from MayunsGames.</small>
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
