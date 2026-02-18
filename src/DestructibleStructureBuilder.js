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
import { FiExternalLink, FiFileText , FiDownload } from "react-icons/fi";

const keyStats = [
    { label: "Unity (LTS)", value: "6, 2022, 2021" },
    { label: "Render Pipelines", value: "Built-in, URP, HDRP" },
];

const featureGalleryItems = [
    {
        title: "Build Modes",
        description: "Create structures using Grid, Free, Wall, Stair, and Slope build tools with live ghost previews and snapping.",
        image: buildModesShot,
        caption: "Build Modes",
    },
    {
        title: "Stress Propagation",
        description: "Grounded connections propagate structural support. Overstressed members fail dynamically.",
        image: stressPropagationShot,
        caption: "Stress Propagation",
    },
    {
        title: "Wall Design System",
        description: "Custom grid-based wall layouts with editable cell types and design reuse.",
        image: wallDesignShot,
        caption: "Wall Design System",
    },
    {
        title: "Mesh Cache Workflow",
        description: "Generated meshes are cached for fast prefab creation and reliable scene reopening.",
        image: meshCacheShot,
        caption: "Mesh Cache Workflow",
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
                            {featureGalleryItems.map((feature) => (
                                <figure className="dsb-feature" key={feature.title}>
                                    <img src={feature.image} alt={feature.caption} />
                                    <figcaption>{feature.caption}</figcaption>
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
