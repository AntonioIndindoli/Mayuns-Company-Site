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
        Unity editor toolkit for collapsible structures
      </div>

      <div className="button-container">
        <button
          onClick={() => (window.location.href = "/unity-demo")}
          className="pageLinkButton"
        >
          Play Demo (In-Browser)
        </button>

        <button
          onClick={() => (window.location.href = "/unity-demo")}
          className="pageLinkButton"
        >
          Download From Asset Store
        </button>

        <button
          href="https://discord.gg/73GaMeP6JF"
          target="_blank"
          rel="noopener noreferrer"
          className="pageLinkButton"
        >
          Join Discord
        </button>

      </div>

      {/* Package information section */}
      <section className="package-details" style={{ padding: "2rem 1rem", maxWidth: "900px", margin: "0 auto", lineHeight: 1.6 }}>

        <h3>What is it?</h3>
        <p>
          Destructible Structure Builder (DSB) is a drop‑in editor toolkit for
          Unity&nbsp;2022.3 LTS that lets you design, place and fine‑tune breakable
          buildings entirely inside the Unity Editor. Click to add beams, drag out
          walls, mark load‑bearing parts, hit Play… and watch your creation crack,
          crumble and collapse realistically in real time.
        </p>

        <h3>Why you'll love it</h3>
        <ul>
          <li><strong>Build fast, break faster:</strong> eight one‑click Build Modes turn level design into a sketching session.</li>
          <li><strong>Gameplay‑ready physics:</strong> damage ripples through beams and walls, so collapses feel earned, not scripted.</li>
          <li><strong>Artist‑friendly workflow:</strong> save wall patterns as presets, swap materials with a click, and undo anything with Ctrl/Cmd + Z.</li>
          <li><strong>Prefab‑safe & pool‑ready:</strong> generated meshes persist on disk; debris uses pooled effects for zero‑GC performance.</li>
          <li><strong>Works everywhere:</strong> compatible with Built‑In, URP and HDRP render pipelines.</li>
        </ul>

        <h3>Key features at a glance</h3>
        <ul>
          <li><strong>One Window, Eight Tools</strong> – Create Structure, Add Beam/Column, Toggle Grounded, Build Wall, Edit Wall, Apply Design, Apply Material, Delete.</li>
          <li><strong>Parametric Beams & Columns</strong> – set length, thickness, texture tiling and load capacity.</li>
          <li><strong>Grid‑Based Walls</strong> – punch out windows or triangles per cell; rotate designs on the fly.</li>
          <li><strong>Design Presets</strong> – store any wall layout in a ScriptableObject; re‑apply (rotated if you like) with one click.</li>
          <li><strong>Stress Solver</strong> – voxel‑based damage spreads with adjustable delay for natural‑looking failures.</li>
          <li><strong>Destruction FX Manager</strong> – pools debris meshes with tweakable lifetime, pool size and spawn rate.</li>
          <li><strong>Mesh Cache Workflow</strong> – keep all procedural meshes on disk so prefabs stay clean and rebuilds are instant.</li>
          <li><strong>Undo‑Friendly</strong> – every action groups into a single Unity Undo step.</li>
        </ul>

        <h3>Quick tour</h3>
        <ol>
          <li>Open the Structure Manager window (Tools ▸ Structure Manager).</li>
          <li>Click once to drop a root connection point.</li>
          <li>Hover & click to stretch beams or columns from any connection.</li>
          <li>Add walls between beams; punch windows or corner cut‑outs with sub‑modes.</li>
          <li>Mark supports green (Grounded) so the solver knows what’s fixed.</li>
          <li>Press Play and interact. Shoot it, ram it, or just let gravity do the rest.</li>
        </ol>
        <p>Total time for your first crumbling shed: about 90&nbsp;seconds.</p>

        <h3>What's in the package?</h3>
        <ul>
          <li><strong>Runtime folder</strong> – destruction scripts, stress solver, debris pooling.</li>
          <li><strong>Editor folder</strong> – Structure Manager window, scene gizmos, custom inspectors.</li>
          <li><strong>Materials / Textures / Effects</strong> – lightweight demo art for instant testing.</li>
          <li><strong>Samples</strong> – a fully built demo scene showcasing every Build Mode.</li>
        </ul>

        <h3>Requirements</h3>
        <ul>
          <li><strong>Unity version:</strong> 2022.3 LTS or newer.</li>
          <li><strong>Render pipelines:</strong> Built‑In, URP and HDRP supported.</li>
          <li><strong>Code setup:</strong> Comes with .asmdef files (DSB.Runtime & DSB.Editor) for clean project integration.</li>
        </ul>

        <h3>Good to know</h3>
        <ul>
          <li><strong>Editor‑only building.</strong> You design in the Editor; runtime spawning of new beams or walls isn’t included.</li>
          <li><strong>Networking not included.</strong> Out‑of‑the‑box setup is single‑player; you can still sync results with your own net‑code.</li>
          <li><strong>URP/HDRP users:</strong> After import, run DSB ▸ Utilities ▸ Upgrade Materials to auto‑convert demo assets.</li>
        </ul>

        <h3>Support & roadmap</h3>
        <p>
          We read every message and aim to reply within one business day.
          Small fixes and quality‑of‑life updates are planned throughout the 1.x cycle.
        </p>f—

        <p>Add Destructible Structure Builder to your toolbox today and bring satisfying, believable destruction to your game with zero scripting overhead.</p>
      </section>

      <Footer />
    </div>
  );
};

export default DestructibleStructureBuilder;
