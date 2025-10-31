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
        Unity Editor toolkit for collapsible, destructible structures. Pending Asset Store approval.
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
        <h2>Overview</h2>
        <p>
          <strong>Destructible Structure Builder (DSB)</strong> is a Unity® Editor toolkit
          for assembling gameplay-ready buildings that splinter, crumble, and collapse
          in real time. All construction happens inside the Unity Editor; at runtime,
          DSB handles stress propagation, debris pooling, and destruction effects.
        </p>
        <p>
          <em>Important:</em> DSB does not provide in-game building or editing
          capabilities.
        </p>

        <h2>Feature Highlights</h2>
        <ul>
          <li><strong>Graph-based Stress Solver</strong> – finds paths to ground and propagates load for realistic collapse.</li>
          <li><strong>Voxel-based Damage</strong> – per-voxel health and fracture behaviour.</li>
          <li><strong>Chunk Merging & Splitting</strong> – dynamic performance optimization during damage.</li>
          <li><strong>Build Modes Toolbar</strong> – create structures using visual, mode-based editing.</li>
          <li><strong>Wall Designer</strong> – cell-based grid system with live rotation and presets.</li>
          <li><strong>Profile-driven Effects</strong> – plug-and-play particle/audio profiles with pooling.</li>
          <li><strong>Mesh Cache</strong> – persist generated meshes for instant prefab loading.</li>
          <li><strong>Full Unity Undo Support</strong> – every operation wrapped in a single Undo group.</li>
        </ul>

        <h2>Package Contents</h2>
        <table>
          <thead>
            <tr>
              <th>Folder</th>
              <th>Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Scripts/Runtime/</code></td>
              <td>Destruction logic, stress solver, pooling (C# source).</td>
            </tr>
            <tr>
              <td><code>Scripts/Editor/</code></td>
              <td>Structure Manager window, Build Modes UI, custom inspectors.</td>
            </tr>
            <tr>
              <td><code>Samples/Demo/</code></td>
              <td>Fully-scripted sample scene with destructible buildings.</td>
            </tr>
            <tr>
              <td>Assets: Materials · Textures · Audio · Particles</td>
              <td>Stylized assets for Built-in, URP, and HDRP pipelines.</td>
            </tr>
            <tr>
              <td><code>Documentation/</code></td>
              <td>HTML/Markdown manual (60 pages, same as online docs).</td>
            </tr>
          </tbody>
        </table>

        <h2>Installation</h2>
        <ol>
          <li>Download and import the <code>.unitypackage</code>.</li>
          <li>For URP/HDRP, upgrade materials via <em>Edit → Render Pipeline → Upgrade Project Materials</em>.</li>
          <li>(Optional) Install <code>com.unity.ai.navigation</code> for navigation utilities.</li>
        </ol>

        <h2>Requirements & Compatibility</h2>
        <ul>
          <li>Unity 2022.3 LTS or 2021.3 LTS (Unity 6 not yet supported)</li>
          <li>Supports Built-in, URP, and HDRP render pipelines</li>
          <li>Assemblies: <code>Mayuns.DSB</code>, <code>Mayuns.DSB.Editor</code>, <code>Mayuns.DSB.Demo</code>, <code>Mayuns.DSB.Navigation</code></li>
        </ul>

        <h2>Limitations</h2>
        <ul>
          <li>Editor-only authoring — no in-game construction.</li>
          <li>No built-in multiplayer/netcode.</li>
          <li>Non-uniform scaling not supported (uniform scale required).</li>
          <li>WebGL builds not supported.</li>
        </ul>

        <h2>Quick Start</h2>
        <ol>
          <li>Open a new scene and launch <strong>Tools → Destructible Structure Builder</strong>.</li>
          <li>Create a <strong>BuildSettings Asset</strong> under <code>Assets/</code>.</li>
          <li>Add a <strong>Destruction Effects Manager</strong> and assign included <em>Effects Library</em>.</li>
          <li>Use <em>Create Structure</em>, <em>Grid Member Build</em>, and <em>Wall Build</em> to design your structure.</li>
          <li>Press <strong>Play</strong> and interact to see real-time destruction and pooled effects.</li>
        </ol>

        <h2>Performance & Best Practices</h2>
        <ul>
          <li>Balance debris pool size and lifetimes for optimal memory use.</li>
          <li>Keep wall grids ≤ 10×10 cells.</li>
          <li>Exclude debris-to-debris collisions in the physics matrix.</li>
          <li>Use <strong>Validate Cache</strong> or clear unused mesh cache folders periodically.</li>
        </ul>

        <h2>Destruction Effects Manager</h2>
        <p>
          Centralized system for pooled debris, audio, and particle effects. Supports
          global <em>EffectsLibrary</em> and per-material overrides via <em>MaterialEffectsLibrary</em>.
          Includes controls for debris lifetime, pool size, collision-based damage, and
          persistent rubble piles.
        </p>

        <h2>Extensibility</h2>
        <p>
          Hook into <code>DestructionSignals</code> (PieceCrumble, LargeCollapse, DebrisImpact, etc.)
          to drive custom gameplay logic or VFX/SFX. Example scripts provided in
          <code>Samples/Demo/</code>.
        </p>

        <h2>Support</h2>
        <ul>
          <li>Email: <a href="mailto:support@mayuns.com">support@mayuns.com</a></li>
          <li>Discord: <a href="https://discord.gg/73GaMeP6JF" target="_blank" rel="noopener noreferrer">https://discord.gg/73GaMeP6JF</a></li>
          <li>Website: <a href="https://mayuns.com" target="_blank" rel="noopener noreferrer">https://mayuns.com</a></li>
        </ul>
        <p>Please include Unity version, DSB version, target platform, and any logs.</p>

        <p style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
          © 2025&nbsp;Antonio Indindoli (Mayuns Technologies). Distributed under the Unity Asset Store EULA.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default DestructibleStructureBuilder;
