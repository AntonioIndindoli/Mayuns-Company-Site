import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import heroShot from "./images/DSB_Hero.png";
import buildModesShot from "./images/DSB Gallery/Build Modes_DSB.png";
import stressPropagationShot from "./images/DSB Gallery/Stress Propagation_DSB.png";
import wallDesignShot from "./images/DSB Gallery/Wall Design System_DSB.png";
import meshCacheShot from "./images/DSB Gallery/Mesh Cache Workflow_DSB.png";
import "./DestructibleStructureBuilder.css";
import { FiExternalLink, FiFileText, FiDownload } from "react-icons/fi";

const keyStats = [
    { label: "Unity (LTS)", value: "6, 2022, 2021" },
    { label: "Render Pipelines", value: "Built-in, URP, HDRP" },
];

const featureGalleryItems = [
    {
        title: "Build Modes",
        description: "Create structures using Grid, Free, Wall, Stair, and Slope build tools with live ghost previews and snapping.",
        image: buildModesShot,
    },
    {
        title: "Stress Propagation",
        description: "Grounded connections propagate structural support. Overstressed members fail dynamically.",
        image: stressPropagationShot,
    },
    {
        title: "Wall Design System",
        description: "Custom grid-based wall layouts with editable cell types and design reuse.",
        image: wallDesignShot,
    },
    {
        title: "Mesh Cache Workflow",
        description: "Generated meshes are cached for fast prefab creation and reliable scene reopening.",
        image: meshCacheShot,
    },
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
                        <p>
                            Unity Editor tool for creating buildings that break apart in real time. Use simple build modes to place beams, walls, and supports, then destroy during gameplay. Includes stress simulation, debris effects, and prefab support.
                        </p>
                        <div className="dsb-hero-actions">
                            <Link className="dsb-button primary" to="/destructible-structure-builder">
                                Asset Store  <FiExternalLink className="dsb-icon" />
                            </Link>

                            <a className="dsb-button secondary" href="/DSB_Demo.zip" target="_blank" rel="noreferrer">
                                Demo  <FiDownload className="dsb-icon" />
                            </a>

                            <a className="dsb-button secondary" href="/Manual.pdf" target="_blank" rel="noreferrer">
                                Manual  <FiFileText className="dsb-icon" />
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

                <section>
                    <div className="dsb-container">
                        <div className="dsb-feature-grid">
                            {featureGalleryItems.map((feature) => (
                                <figure className="dsb-feature" key={feature.title}>
                                    <img src={feature.image} alt={feature.caption} />
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default DestructibleStructureBuilder;
