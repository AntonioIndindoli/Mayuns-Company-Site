import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import heroShot from "./images/DSB_Screenshot1.png";
import galleryShotTwo from "./images/DSB_Screenshot2.png";
import galleryShotThree from "./images/PLACEHOLDER.png";
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
  { label: "Status", value: "Pending Unity Asset Store approval" },
];

const highlightLists = [
  {
    title: "Fast authoring",
    bullets: [
      "Wall Designer with live rotation, triangle cut-outs, and per-cell health",
      "Design presets as ScriptableObjects you can reuse scene-to-scene",
      "Grid, free-form, and stair build tools that speak a common snapping overlay",
    ],
  },
  {
    title: "Robust runtime",
    bullets: [
      "Stress, pooling, mesh cache, and navigation utilities ship in the box",
      "Events like PieceCrumble, LargeCollapse, and DebrisImpact let you layer bespoke gameplay",
      "Optional AI Navigation rebaker keeps NavMeshes aware of collapsing architecture",
    ],
  },
];

const galleryShots = [
  {
    src: heroShot,
    title: "Voxel-authored walls",
    caption:
      "Author windows, cut-outs, and per-cell health budgets directly on the wall grid.",
  },
  {
    src: galleryShotTwo,
    title: "Stress visualizer",
    caption:
      "Live overlays expose load propagation so you can reinforce overstressed areas before shipping.",
  },
  {
    src: galleryShotThree,
    title: "Prefabs & caching",
    caption:
      "Mesh cache folders keep prefabs lightweight and ready for multi-scene workflows.",
  },
];

const DestructibleStructureBuilder = () => {
  return (
    <div className="LandingPage01 dsb-page">
      <Header />

      <main className="dsb-content">
        <section className="dsb-hero">
          <div className="dsb-hero-copy">
            <p className="dsb-label">Unity Editor Toolkit</p>
            <h1>Destructible Structure Builder</h1>
            <p>
              Assemble gameplay-ready, stress-aware buildings entirely inside the
              Unity Editor. DSB couples voxel-authored walls with graph-based stress
              solving so chunks detach, crumble, and collapse believably at runtime.
            </p>
            <div className="dsb-hero-actions">
              <Link className="dsb-button primary" to="/destructible-structure-builder/manual">
                Read the Online Manual
              </Link>
              <a className="dsb-button secondary" href="#gallery">
                View Gallery
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
          <div className="dsb-hero-visual">
            <img src={heroShot} alt="DSB hero view" />
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
            Mesh chunking, pooled particle systems, and configurable lifetimes keep performance predictable even during large-scale collapses.
            </p>
          </div>
          <div className="dsb-highlight-lists">
            {highlightLists.map((highlight) => (
              <article key={highlight.title}>
                <h3>{highlight.title}</h3>
                <ul>
                  {highlight.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="dsb-gallery" id="gallery">
          <div className="dsb-gallery-headline">
            <p className="dsb-label">Gallery</p>
            <h2>From blockout to breakage</h2>
            <p>
              Preview in-editor overlays, stress diagnostics, and runtime chaos. The
              gallery below highlights everyday workflows and debug moments you will
              rely on while building destruction-ready structures.
            </p>
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

        <section className="dsb-feature-columns">
          <article>
            <p className="dsb-label">Editor Workflow</p>
            <h3>No External Tooling Required</h3>
            <ul>
              <li>Create, grid, and free-member modes share a single overlay with snap & axis locks.</li>
              <li>Wall Build paints magenta ghosts for width/height drags plus Wall Design presets.</li>
              <li>Apply Design, Apply Material, and Apply Member Properties keep iteration fast.</li>
              <li>Grounded Toggle & auto-detect grounded layers ensure accurate stress simulation.</li>
            </ul>
          </article>
          <article>
            <p className="dsb-label">Runtime Systems</p>
            <h3>Effects, pooling, and extensibility</h3>
            <ul>
              <li>Destruction Effects Manager pools debris/audio/particles with persistent rubble piles.</li>
              <li>Mesh cache folders keep prefabs lightweight and scenes quick to reopen.</li>
              <li>DestructionSignals unlock gameplay hooks for crumble, stress, collapse, and debris events.</li>
              <li>Optional StructureNavmeshRebaker syncs AI navigation whenever pieces fall away.</li>
            </ul>
          </article>
        </section>

        <section className="dsb-cta">
          <div>
            <h2>Full Documentation Available</h2>
            <p>
              The full online manual covers installation, requirements, editor tips,
              runtime scripting, extensibility, troubleshooting, and licensing.
            </p>
          </div>
          <Link className="dsb-button primary" to="/destructible-structure-builder/manual">
            Explore the Manual
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DestructibleStructureBuilder;
