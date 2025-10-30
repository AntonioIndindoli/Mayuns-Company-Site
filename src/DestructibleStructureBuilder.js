import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "./images/DSB_Screenshot1.png";

const DestructibleStructureBuilder = () => {
  return (
    <div className="LandingPage01" style={{ width: "100%", background: "white" }}>
      <Header />

      <div className="hero-banner">
        <img src={logo} alt="Main visual" className="hero-img" />
      </div>

      <div className="DSB-Home-Message">Destructible Structure Builder</div>
      <div className="center-divider"></div>
      <div className="Home-Message-Subtext-nonItalic">
        Unity editor toolkit for collapsible structures. Pending Asset Store approval.
      </div>

      <div className="button-container">

        <button
          href="https://discord.gg/73GaMeP6JF"
          target="_blank"
          rel="noopener noreferrer"
          className="pageLinkButton"
        >
          Join Discord
        </button>

      </div>

      <section
        className="package-details"
        style={{
          padding: "2rem 1rem",
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        <h2>Why&nbsp;DSB?</h2>
        <ul>
          <li><strong>One-click construction workflow</strong> – place connections, pull beams, stamp walls, rotate designs, punch windows, all from a single toolbar.</li>
          <li><strong>Parametric voxel members</strong> – set length, thickness, texture scale and support capacity per beam or globally via Build&nbsp;Settings.</li>
          <li><strong>Grid-based, design-savvy walls</strong> – save any wall as a reusable <em>WallDesign</em> asset and re-apply with rotation in seconds.</li>
          <li><strong>Real-time stress solver</strong> – adjustable propagation delays let you dial in anything from creaking timbers to instant collapses.</li>
          <li><strong>Pooled debris &amp; effects</strong> – Destruction Effects Manager recycles shards, audio sources and particles for zero-GC bursts.</li>
          <li><strong>Mesh&nbsp;Cache</strong> – persist generated meshes so prefabs stay lightweight and scene loads stay fast.</li>
          <li><strong>Undo-friendly</strong> – every edit is wrapped in a single Unity Undo group, so iteration feels native.</li>
        </ul>

        <h2>Inside the Package</h2>
        <table>
          <thead>
            <tr>
              <th>Folder</th>
              <th>Highlights</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Runtime/</code></td>
              <td>Stress solver, pooling, destructible components (C# source).</td>
            </tr>
            <tr>
              <td><code>Editor/</code></td>
              <td>Structure Manager window, scene tools, custom inspectors.</td>
            </tr>
            <tr>
              <td><code>Samples/</code></td>
              <td>Fully-scripted demo scene showcasing every build mode.</td>
            </tr>
            <tr>
              <td>Materials&nbsp;· Textures&nbsp;· Effects</td>
              <td>Stylised assets ready for URP, HDRP and Built-in RP.</td>
            </tr>
            <tr>
              <td><code>Documentation/</code></td>
              <td>60-page HTML/Markdown manual (same as the online docs).</td>
            </tr>
          </tbody>
        </table>

        <h2>Requirements</h2>
        <ul>
          <li>Unity 2022.3 LTS or newer</li>
          <li>Supports Built-in, URP and HDRP</li>
          <li>Assembly Definitions: <code>Mayuns.DSB.Runtime</code>, <code>Mayuns.DSB.Editor</code>, <code>Mayuns.DSB.Demo</code></li>
        </ul>

        <h2>Quick&nbsp;Start&nbsp;(≈ 90 s)</h2>
        <ol>
          <li>Import the <code>.unitypackage</code>.</li>
          <li>Open <code>Samples/DemoScene</code>.</li>
          <li>Launch <strong>Tools ▸ Structure Manager</strong> and click <strong>Create BuildSettings Asset</strong>.</li>
          <li>Use <strong>Create Structure</strong>, <strong>Structural Member Build</strong> and <strong>Wall Build</strong> modes to sketch a frame.</li>
          <li>Press <strong>Play</strong>. Collide, explode or shoot your structure to watch it fracture in real time.</li>
        </ol>
        <p>The full workflow, hot-keys and extensibility notes are covered in the included manual.</p>

        <h2>Performance Tips</h2>
        <ul>
          <li>Keep wall grids to ≤ 10 × 10 cells for best runtime throughput.</li>
          <li>Balance debris-pool size against gib lifetimes: long-lived chunks need larger pools.</li>
          <li>Run <strong>Mesh Cache ▸ Clean Unused Cached Meshes</strong> after major refactors to reclaim disk space.</li>
        </ul>

        <h2>Limitations</h2>
        <ul>
          <li>Editor-only authoring; the toolkit does not provide in-game building.</li>
          <li>No built-in multiplayer or netcode support (structures sync like any other Unity GameObject).</li>
        </ul>

        <h2>Support</h2>
        <ul>
          <li>Email: <a href="mailto:support@mayuns.com">support@mayuns.com</a></li>
          <li>Discord: <a href="https://discord.gg/73GaMeP6JF" target="_blank" rel="noopener noreferrer">https://discord.gg/73GaMeP6JF</a></li>
        </ul>
        <p>Please include Unity version, DSB version, target platform and any relevant logs.</p>

        <p style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
          © 2025&nbsp;Mayuns Technologies. Distributed under the Unity Asset Store EULA.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default DestructibleStructureBuilder;
