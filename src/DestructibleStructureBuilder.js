import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import heroShot from "./images/DSB_Hero.png";
import galleryShotOne from "./images/DSB_Screenshot7.png";
import galleryShotTwo from "./images/DSB_Screenshot3.png";
import galleryShotThree from "./images/DSB_Screenshot1.png";
import galleryShotFour from "./images/DSB_Screenshot6.png";
import galleryShotFive from "./images/DSB_Screenshot5.png";
import galleryShotSix from "./images/DSB_Screenshot4.png";
import "./DestructibleStructureBuilder.css";

const summaryCards = [
    {
        title: "Graph-based stress solver",
        body:
            "Shortest-path-to-ground analysis continuously propagates forces, splits unsupported islands, and keeps towers believable without hand-authored logic.",
    },
    {
        title: "Voxel damage core",
        body:
            "Walls, windows, and members are authored as voxels that crumble independently, merge for runtime performance, and split apart once damaged.",
    },
    {
        title: "Profile-driven FX",
        body:
            "A single Destruction Effects Manager handles pooled debris, audio, particles, and persistent rubble piles using modular profiles.",
    },
    {
        title: "Editor-first workflow",
        body:
            "Everything is authored inside the Unity Editor with full Undo support, design presets, mesh caching, and prefab-safe exports.",
    },
];

const keyStats = [
    { label: "Version", value: "1.0.0" },
    { label: "Unity", value: "2022.3 LTS, 2021.3 LTS, 6.0 LTS" },
    { label: "Render Pipelines", value: "Built-in, URP, HDRP" },
];

const highlightLists = [
    {
        title: "Core Features",
        bullets: [
            {
                label: "Stress Solver",
                description:
                    "graph-based structural analysis that propagates load, detects overstressed members, and detaches unsupported chunks",
            },
            {
                label: "Voxel-Based Damage System",
                description:
                    "structures are composed of voxels that accumulate damage and split or crumble individually on impact",
            },
            {
                label: "Chunk Merging & Splitting",
                description:
                    "voxels merge into chunks for performance and dynamically split apart when damaged",
            },
            {
                label: "Build Modes Toolbar",
                description:
                    "visual, mode-based editor workflow for placing connections, members, walls, stairs, and other structural elements",
            },
            {
                label: "Wall Designer & Design Presets",
                description:
                    "grid-based wall layouts with cut-outs, per-cell health, rotation, and reusable WallDesign assets",
            },
            {
                label: "Object Pooling & Profile-driven Effects",
                description:
                    "pooled debris, audio, and particle effects driven by EffectsLibrary and MaterialEffectsLibrary profiles",
            },
        ],
    },
];


const galleryShots = [
    {
        src: galleryShotOne,
        title: "Voxel-authored walls",
        caption:
            "Author windows, cut-outs, and per-cell health budgets directly on the wall grid.",
    },
    {
        src: galleryShotTwo,
        title: "Real-time stress visualization",
        caption:
            "Live structural overlays reveal load paths and overstressed members, letting you identify and adjust structural supports.",
    },
    {
        src: galleryShotThree,
        title: "Prefabs & caching",
        caption:
            "Mesh cache folders keep prefabs lightweight and ready for multi-scene workflows.",
    },
    {
        src: galleryShotFour,
        title: "Progressive structural collapse",
        caption:
            "Unsupported sections break away naturally as stress paths fail, producing believable partial collapses instead of scripted destruction.",
    },
    {
        src: galleryShotFive,
        title: "Large-mass collapse events",
        caption:
            "When structural load paths fail, entire building sections shear off and collapse as a single mass, spawning secondary debris and chain reactions on impact.",
    },
    {
        src: galleryShotSix,
        title: "Scalable, high-detail environments",
        caption:
            "Author a wide range of structures using the same workflow, while mesh caching and chunking keep large scenes performant.",
    }
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
                            Assemble gameplay-ready, stress-aware buildings entirely inside the
                            Unity Editor. DSB couples voxel-authored walls with graph-based stress
                            solving so chunks detach, crumble, and collapse believably at runtime.
                        </p>
                        <div className="dsb-hero-actions">
                            <Link className="dsb-button primary" to="/destructible-structure-builder/web-demo">
                                Launch the Web Demo
                            </Link>
                            <Link className="dsb-button secondary" to="/destructible-structure-builder/manual">
                                Read the Online Manual
                            </Link>
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

                <section className="dsb-overview" id="overview">
                    <div>
                        <p className="dsb-label">Overview</p>
                        <p>
                            Destructible Structure Builder (DSB) is a Unity Editor toolkit for authoring gameplay-ready buildings
                            that can splinter, crumble, and collapse dynamically in real time. You build everything inside the
                            dedicated DSB window using an intuitive toolbar to place connections, members, and walls.
                        </p>
                        <p>
                            At its core lies a graph-based Stress Solver that calculates load paths, identifies overstressed members,
                            and simulates realistic collapses as supports give way. Each structure is voxel-based, enabling per-cell damage,
                            localized breakage, and debris emission. When the game runs, DSB’s runtime components handle everything that happens
                            after impact. The Destruction Effects Manager controls pooling, debris, audio, and particle effects, while stress
                            and collision systems propagate forces through the structure to determine which sections detach or crumble.
                            Mesh chunking, pooling systems, and configurable lifetimes keep performance predictable even during large-scale collapses.
                        </p>
                    </div>
                    <div className="dsb-highlight-lists">
                        {highlightLists.map((highlight) => (
                            <article key={highlight.title}>
                                <h3>{highlight.title}</h3>
                                <ul>
                                    {highlightLists[0].bullets.map((item, i) => (
                                        <li key={i}>
                                            <strong>{item.label}</strong> – {item.description}
                                        </li>
                                    ))}
                                </ul>

                            </article>
                        ))}
                    </div>
                </section>

                <section className="dsb-gallery" id="gallery">
                    <div className="dsb-gallery-headline">
                        <p className="dsb-label">Gallery</p>
                    </div>
                    <div className="dsb-gallery-grid">
                        {galleryShots.map((shot) => (
                            <figure key={shot.title}>
                                <img src={shot.src} alt={shot.title} />
                                <figcaption>
                                    <strong>{shot.title}</strong>
                                    <span>{shot.caption}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default DestructibleStructureBuilder;
