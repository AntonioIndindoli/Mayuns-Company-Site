import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import heroShot from "./images/DSB_Hero.png";
import buildModesShot from "./images/DSB Gallery/Build Modes_DSB.png";
import stressPropagationShot from "./images/DSB Gallery/Stress Propagation_DSB.png";
import wallDesignShot from "./images/DSB Gallery/Wall Design System_DSB.png";
import meshCacheShot from "./images/DSB Gallery/Mesh Cache Workflow_DSB.png";
import "./DestructibleStructureBuilder.css";
import { FiExternalLink, FiFileText, FiDownload, FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const activeFeature = useMemo(() => featureGalleryItems[activeImageIndex], [activeImageIndex]);

    const showPreviousImage = () => {
        setActiveImageIndex((previousIndex) => {
            if (previousIndex === 0) {
                return featureGalleryItems.length - 1;
            }

            return previousIndex - 1;
        });
    };

    const showNextImage = () => {
        setActiveImageIndex((previousIndex) => {
            if (previousIndex === featureGalleryItems.length - 1) {
                return 0;
            }

            return previousIndex + 1;
        });
    };

    const heroBackgroundStyle = {
        backgroundImage: `linear-gradient(110deg, rgba(2, 6, 10, 1) 0%, rgba(0, 0, 0, .95) 20%, rgba(10, 27, 49, 0.4) 100%, rgba(0, 0, 0, 0) 100%), url(${heroShot})`,
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

                <section className="dsb-description">
                    <div className="dsb-description-area">
                        <p className="dsb-description-label">BUILD & DESTROY</p>
                        <p>
                            DSB is a Unity Editor toolkit for creating structures which crumble and collapse believably at runtime. Use simple build modes to place beams, walls, and supports in editor-time scene view, then destroy during gameplay. Includes stress simulation, debris effects, and prefab support.
                        </p>
                    </div>
                </section>

                <section>
                    <div className="dsb-container">
                        <div className="dsb-store-gallery" aria-label="Feature image gallery">
                            <div className="dsb-store-main-preview">
                                <button type="button" className="dsb-gallery-nav previous" onClick={showPreviousImage} aria-label="Show previous screenshot">
                                    <FiChevronLeft />
                                </button>

                                <img src={activeFeature.image} alt={activeFeature.title} className="dsb-store-main-image" />

                                <div className="dsb-store-feature-copy">
                                    <h3>{activeFeature.title}</h3>
                                    <p>{activeFeature.description}</p>
                                </div>

                                <button type="button" className="dsb-gallery-nav next" onClick={showNextImage} aria-label="Show next screenshot">
                                    <FiChevronRight />
                                </button>
                            </div>


                            <div className="dsb-store-thumbnail-row" role="tablist" aria-label="Feature thumbnails">
                                {featureGalleryItems.map((feature, index) => (
                                    <button
                                        type="button"
                                        key={feature.title}
                                        className={`dsb-thumbnail-button ${index === activeImageIndex ? "is-active" : ""}`}
                                        onClick={() => setActiveImageIndex(index)}
                                        aria-label={`View ${feature.title}`}
                                        aria-selected={index === activeImageIndex}
                                        role="tab"
                                    >
                                        <img src={feature.image} alt={feature.title} />
                                    </button>
                                ))}
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
