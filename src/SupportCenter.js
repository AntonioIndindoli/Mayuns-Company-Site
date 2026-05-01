import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const SupportCenter = () => {
  return (
    <div className="LandingPage01 info-page-shell">
      <Header />

      <main className="info-page-content">
        <h1 className="info-page-title">Support Center</h1>

        <section className="info-page-section">
          <h2>Contact Support</h2>
          <p>
            Email us at <a href="mailto:support@mayuns.com">support@mayuns.com</a> and
            include details like your platform, product name, and the issue you&apos;re facing.
          </p>
        </section>

        <section className="info-page-section">
          <h2>Helpful Details to Include</h2>
          <ul>
            <li>Product name and version</li>
            <li>Your device and operating system</li>
            <li>Steps to reproduce the issue</li>
            <li>Screenshots or error messages (if available)</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportCenter;
