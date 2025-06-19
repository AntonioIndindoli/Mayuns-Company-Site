import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const StructureBuilder = () => {
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
          View Unity Demo
        </button>
      </div>

      <div style={{ width: "100%", minHeight: "80vh" }}>
        <iframe
          title="DSB Manual"
          src="/dsb-manual.html"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default StructureBuilder;
