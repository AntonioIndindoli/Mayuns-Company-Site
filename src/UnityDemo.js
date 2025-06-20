import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./UnityDemo.css";
/**
 * Responsive full-page wrapper for the WebGL build.
 */
const UnityDemo = () => {
  return (
    <div className="page-wrapper">
      {/* site header */}
      <Header />

      {/* main section grows/shrinks so footer stays at the bottom */}
      <main className="unity-frame-wrapper">
        <iframe
          title="Unity WebGL Demo"
          src="/unity_build/index.html"
          className="unity-frame"
          allowFullScreen
        />
      </main>

      {/* site footer */}
      <Footer />
    </div>
  );
};

export default UnityDemo;