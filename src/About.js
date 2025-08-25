import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "./images/HomeLogo.png";

const About = () => {
  return (
    <div className="LandingPage01" style={{ width: "100%", background: "white" }}>
      <Header />

      <div className="hero-banner">
        <img src={logo} alt="About us" className="hero-img" />
      </div>

      <div className="DSB-Home-Message">About Us</div>
      <div className="center-divider"></div>
      <div className="Home-Message-Subtext-nonItalic">
        Exploring playful technology and interactive experiments.
      </div>

      <section
        className="package-details"
        style={{
          padding: "2rem 1rem",
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        <h2>Who We Are</h2>
        <p>
          MayunsGames is a small team of developers building prototypes,
          tooling, and creative demos. We enjoy experimenting and sharing our
          work with the community.
        </p>

        <h2>What We Build</h2>
        <ul>
          <li>Interactive games and web experiences</li>
          <li>Unity editor tools like Destructible Structure Builder</li>
          <li>Open-source projects and learning resources</li>
        </ul>

        <h2>Get In Touch</h2>
        <p>
          Have an idea or want to collaborate? Email us at
          <a href="mailto:support@mayuns.com"> support@mayuns.com</a>.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default About;
