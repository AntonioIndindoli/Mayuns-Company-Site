import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const About = () => {
  return (
    <div className="LandingPage01 info-page-shell">
      <Header />

      <main className="info-page-content">
        <h1 className="info-page-title">About Us</h1>
        <p className="info-page-lead">We are a small independent studio building games, creator tools, and original media.</p>

        <section className="info-page-section">
          <h2>Who We Are</h2>
          <p>
            <strong>Mayuns Games/Studios</strong> is run by a small team of passionate artists and developers.
            Our works spans various genres and domains, from games to music to developer tools.
          </p>
        </section>

        <section className="info-page-section">
          <h2>Get In Touch</h2>
          <p>
            Have an idea or want to collaborate? Email us at
            <a href="mailto:support@mayuns.com"> support@mayuns.com</a>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
