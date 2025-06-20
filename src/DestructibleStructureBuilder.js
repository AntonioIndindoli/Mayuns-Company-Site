import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const DestructibleStructureBuilder = () => {
  return (
    <div className="LandingPage01" style={{ width: "100%", background: "white" }}>
      <Header />
      <div className="background-gradient-color"></div>
      <div className="background-gradient"></div>

      <div className="Home-Message">Destructible Structure Builder</div>
      <div className="Home-Message-Subtext">
        Unity editor toolkit for collapsible structures
      </div>

      <div className="button-container">
        <button
          onClick={() => (window.location.href = "/unity-demo")}
          className="downloadButton"
        >
          Play Demo In Browser Now
        </button>

        {/* Discord Server Button */}
        <a
          href="https://discord.gg/73GaMeP6JF"
          target="_blank"
          rel="noopener noreferrer"
          className="downloadButton"
        >
          Join Discord
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default DestructibleStructureBuilder;
