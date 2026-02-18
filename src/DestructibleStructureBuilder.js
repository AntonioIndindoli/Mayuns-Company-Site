import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import heroShot from "./images/DSB_Hero.png";
import "./DestructibleStructureBuilder.css";
import { FiExternalLink, FiFileText , FiDownload } from "react-icons/fi";

const keyStats = [
    { label: "Unity (LTS)", value: "6, 2022, 2021" },
    { label: "Render Pipelines", value: "Built-in, URP, HDRP" },
];

const DestructibleStructureBuilder = () => {
    const heroBackgroundStyle = {
        backgroundImage: `linear-gradient(110deg, rgba(2, 6, 10, 0.95) 0%, rgba(0, 0, 0, 0.9) 10%, rgba(10, 27, 49, 0.4) 100%, rgba(15, 31, 51, 0) 100%), url(${heroShot})`,
    };

    return (
        <div className="LandingPage01 dsb-page">
            <Header />

            <main className="dsb-content">
                <section className="dsb-hero" style={heroBackgroundStyle}>
                    <div className="dsb-hero-copy">
                        <p className="dsb-label">Unity Editor Toolkit</p>
                        <h1>Destructible Structure Builder</h1>
                        <div className="dsb-hero-actions">
                            <Link className="dsb-button primary" to="/destructible-structure-builder">
                                Asset Store  <FiExternalLink className="dsb-icon" />
                            </Link>

                            <a className="dsb-button secondary" href="/DSB_Demo.zip" target="_blank" rel="noreferrer">
                                Demo  <FiDownload className="dsb-icon" />
                            </a>

                            <a className="dsb-button secondary" href="/Manual.pdf" target="_blank" rel="noreferrer">
                                Manual  <FiFileText  className="dsb-icon" />
                            </a>
                        </div>

                        <ul className="dsb-key-stats">
                            {keyStats.map((stat) => (
                                <li key={stat.label}>
                                    <span>{stat.label}</span>
                                    <strong>{stat.value}</strong>
                                </li>
                            ))}
                        </ul>

                    </div>
                </section>

                <section className="dsb-section">
                    <div className="dsb-container">
                        <h2>Author Complex Structures Directly in the Unity Editor</h2>
                        <p>
                            Destructible Structure Builder provides a dedicated editor workflow for constructing
                            stress-aware, voxel-driven buildings. All authoring is performed inside the Unity Editor —
                            no runtime construction tools required.
                        </p>

                        <div className="dsb-feature-grid">
                            <div className="dsb-feature">
                                <h3>Build Modes</h3>
                                <p>Create structures using Grid, Free, Wall, Stair, and Slope build tools with live ghost previews and snapping.</p>
                            </div>

                            <div className="dsb-feature">
                                <h3>Stress Propagation</h3>
                                <p>Grounded connections propagate structural support. Overstressed members fail dynamically.</p>
                            </div>

                            <div className="dsb-feature">
                                <h3>Wall Design System</h3>
                                <p>Custom grid-based wall layouts with editable cell types and design reuse.</p>
                            </div>

                            <div className="dsb-feature">
                                <h3>Mesh Cache Workflow</h3>
                                <p>Generated meshes are cached for fast prefab creation and reliable scene reopening.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default DestructibleStructureBuilder;
