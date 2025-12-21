import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./DestructibleStructureBuilder.css";
import { Link } from "react-router-dom";

const DSBWebDemo = () => (
    <div className="LandingPage01 dsb-page">
        <Header />
        <main className="dsb-demo-content">
            <section className="dsb-demo-hero">
                <div>
                    <p className="dsb-label">Interactive Preview</p>
                    <h1>DSB Web Demo</h1>
                    <p>
                        Try a browser-based preview of the Destructible Structure Builder demo. For the best experience, try the standalone Unity editor package once
                        you are done experimenting.
                    </p>
                    <div className="dsb-hero-actions">
                        <Link className="dsb-button secondary" to="/destructible-structure-builder">
                            ← Back to product overview
                        </Link>
                    </div>
                </div>
            </section>

            <section className="dsb-demo-player" id="demo-player">
                <div className="dsb-embed-frame">
                    <iframe
                        src="/unity_build/index.html"
                        title="Destructible Structure Builder Web Demo"
                        allowFullScreen
                        loading="lazy"
                    />

                </div>
                <div className="dsb-controls">
                    <p className="dsb-controls-text">Controls: WASD to move, Space to jump, Mouse to look, Left Click to shoot, Tab to access settings menu</p>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);

export default DSBWebDemo;
