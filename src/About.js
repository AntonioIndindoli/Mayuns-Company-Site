import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const About = () => {
  return (
    <div className="LandingPage01 info-page-shell">
      <Header />

      <main className="info-page-content">
        <h1 className="info-page-title">About Us</h1>
        <p className="info-page-lead">Building games and production-grade tools for creators.</p>

        <section className="info-page-section">
          <h2>Who We Are</h2>
          <p>
            <strong>Mayuns Technologies</strong> is a focused game development studio and
            software tools provider.
          </p>
        </section>

        <section className="info-page-section">
          <h2>What We Build</h2>
          <ul>
            <li>Interactive games and web experiences</li>
            <li>Unity editor tools like Destructible Structure Builder</li>
            <li>Open-source projects and learning resources</li>
          </ul>
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
