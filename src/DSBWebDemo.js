import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./DestructibleStructureBuilder.css";

const DSBWebDemo = () => (
    <div className="LandingPage01 dsb-page">
        <Header />
        <main className="dsb-demo-content">
            <section className="dsb-demo-hero">
                <div>
                    <p className="dsb-label">Interactive Preview</p>
                    <h1>DSB Web Demo</h1>
                    <p>
                        Try a browser-based preview of the Destructible Structure Builder demo. Load
                        the scene, trigger collapses, and explore stress overlays directly in your
                        browser.
                    </p>
                    <div className="dsb-hero-actions">
                        <a
                            className="dsb-button primary"
                            href="/unity_build/index.html"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Open demo in a new tab
                        </a>
                        <a className="dsb-button secondary" href="#demo-player">
                            Play inline below
                        </a>
                    </div>
                    <ul className="dsb-demo-tips">
                        <li>
                            Let the loader finish before interacting. If performance dips, click the
                            "quality" button in the bottom right.
                        </li>
                        <li>
                            Use the on-screen controls to toggle stress overlays, spawn impacts, and
                            trigger collapse events.
                        </li>
                        <li>
                            For the best experience, try the standalone Unity editor package once
                            you are done experimenting.
                        </li>
                    </ul>
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
                <div className="dsb-demo-callouts">
                    <article>
                        <h3>What&apos;s included</h3>
                        <p>
                            The web demo shows the sample structure, debris pooling, stress overlays,
                            and collapse triggers so you can get a feel for runtime behavior.
                        </p>
                    </article>
                    <article>
                        <h3>Need the full toolkit?</h3>
                        <p>
                            The downloadable package contains the Unity Editor tools, prefabs,
                            destructible wall authoring, and the complete manual.
                        </p>
                    </article>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);

export default DSBWebDemo;
