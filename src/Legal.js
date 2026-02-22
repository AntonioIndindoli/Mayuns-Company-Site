import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Legal = () => {
  return (
    <div className="LandingPage01 info-page-shell">
      <Header />

      <main className="info-page-content">
        <h1 className="info-page-title">Legal</h1>
        <p className="info-page-lead">
          This page outlines general legal information for Mayuns products and services.
        </p>

        <section className="info-page-section">
          <h2>Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and materials on this site are owned by or licensed
            to Mayuns unless otherwise stated.
          </p>
        </section>

        <section className="info-page-section">
          <h2>Terms and Fair Use</h2>
          <p>
            By using our products and website, you agree to use them lawfully and respectfully.
            Unauthorized redistribution or commercial use of protected assets is prohibited.
          </p>
        </section>

        <section className="info-page-section">
          <h2>Questions</h2>
          <p>
            For legal questions, contact <a href="mailto:support@mayuns.com">support@mayuns.com</a>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
