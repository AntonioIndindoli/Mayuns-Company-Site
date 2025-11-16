import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./DestructibleStructureBuilder.css";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "feature-highlights", label: "Feature Highlights" },
  { id: "package-contents", label: "Package Contents" },
  { id: "installation", label: "Installation" },
  { id: "requirements", label: "Requirements" },
  { id: "limitations", label: "Limitations" },
  { id: "quick-start", label: "Quick Start" },
  { id: "scene-setup", label: "Scene Setup" },
  { id: "performance", label: "Performance" },
  { id: "mesh-cache", label: "Mesh Cache" },
  { id: "editor-workflow", label: "Editor Workflow" },
  { id: "effects", label: "Destruction Effects" },
  { id: "structural-group", label: "Structural Group" },
  { id: "navigation", label: "Navigation" },
  { id: "texture-scaling", label: "Texture Scaling" },
  { id: "damage", label: "Damage Workflow" },
  { id: "extensibility", label: "Extensibility" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "support", label: "Support" },
  { id: "license", label: "License" },
];

const packageContents = [
  { folder: "Scripts/Runtime/", contents: "MonoBehaviours for destruction logic, stress solver, pooling." },
  { folder: "Scripts/Editor/", contents: "Structure Manager window, scene tools, inspectors." },
  { folder: "Materials/, Textures/, Audio/, ParticleEffects/", contents: "Author-created assets." },
  { folder: "Samples/Demo/Scene/", contents: "Sample scene for showcasing structures." },
];

const requirements = [
  { category: "Unity Editor", details: "2022.3 LTS, 2021.3 LTS, 6.0 LTS" },
  { category: "Platforms", details: "Windows, Mac, Linux, Mobile, Console (WebGL not recommended)." },
  { category: "Render Pipelines", details: "Built-in, URP, HDRP" },
  { category: "Assembly Definitions", details: "Mayuns.DSB, Mayuns.DSB.Editor, Mayuns.DSB.Demo, Mayuns.DSB.Navigation" },
  { category: "Optional Dependencies", details: "com.unity.ai.navigation for navigation utilities" },
];

const performanceTips = [
  { area: "Debris Pool", recommendation: "Balance max active debris with lifetime. Longer lifetimes need bigger pools." },
  { area: "Wall & Member cell budget", recommendation: "Keep wall grids at or below 10×10, reduce member subdivision." },
  { area: "Piece Count", recommendation: "If you see hitches on break events, reduce member/wall totals." },
  { area: "Physics Layers", recommendation: "Exclude debris-to-debris collisions via the Layer Collision Matrix." },
];

const buildModes = [
  { mode: "Create Structure", description: "Place a root connection in the Scene view." },
  { mode: "Grid Member Build", description: "Snap beams to grid directions with cyan previews." },
  { mode: "Free Member Build", description: "Place members at arbitrary angles without snapping." },
  { mode: "Grounded Toggle", description: "Mark members as grounded so stress solver knows its supports." },
  { mode: "Wall Build", description: "Drag to define wall width/height on members." },
  { mode: "Stair Build", description: "Place stairs with start, width, and end adjustments." },
  { mode: "Apply Design", description: "Apply the active WallDesign asset to a wall." },
  { mode: "Apply Material", description: "Assign current material to any structure piece." },
  { mode: "Apply Member Properties", description: "Push edited member settings into the scene." },
  { mode: "Delete", description: "Remove connections, members, or walls." },
];

const hotkeys = [
  { key: "Esc", action: "Cancel current build mode or preview" },
  { key: "R", action: "Rotate preview 90° in Wall/Stair/Apply Design" },
  { key: "T", action: "Rotate wall preview while placing" },
  { key: "C", action: "Toggle snap" },
  { key: "M", action: "Toggle midpoint snapping" },
  { key: "Left Arrow", action: "Toggle X-axis lock" },
  { key: "Down Arrow", action: "Toggle Y-axis lock" },
  { key: "Right Arrow", action: "Toggle Z-axis lock" },
];

const events = [
  { name: "DestructionSignals.PieceCrumble", trigger: "A structural piece crumbles." },
  { name: "DestructionSignals.MemberStress", trigger: "Stress solver flags overstressed beams." },
  { name: "DestructionSignals.LargeCollapse", trigger: "Detached group (>4 members) collapses." },
  { name: "DestructionSignals.WindowShatter", trigger: "Window panel is destroyed." },
  { name: "DestructionSignals.DebrisImpact", trigger: "Pooled debris collides with world." },
  { name: "DestructionSignals.GroupCrush", trigger: "Detached group slams into configured layers." },
];

const troubleshooting = [
  {
    question: "Build tools are not working",
    answer: "Ensure Scene view gizmos are enabled. (See Editor Workflow)",
  },
  {
    question: "Ghost beams never appear",
    answer: "Set Build Settings → Hide Axis to None or Orthogonal.",
  },
  {
    question: "Structure is missing meshes when prefabbed",
    answer: "Select the Structural Group Manager and Validate Cache.",
  },
  {
    question: "Detached pieces look stretched",
    answer: "Remove non-uniform scaling from the hierarchy.",
  },
  {
    question: "Walls appear pink",
    answer: "Assign a material in Build Settings → Wall Material or use Apply Material mode.",
  },
  {
    question: "Stair steps are rotated incorrectly",
    answer: "Ensure the parent structure is uniformly scaled and non-rotated.",
  },
  {
    question: "Default effects are missing",
    answer: "Assign the sample Effects Library to the DestructionEffectsManager.",
  },
  {
    question: "Debris disappears too quickly",
    answer: "Increase Max Active Debris or enable persistent debris.",
  },
  {
    question: "NavMesh does not rebake",
    answer: "Install com.unity.ai.navigation and add StructureNavmeshRebaker.",
  },
  {
    question: "Lag spikes during collapse",
    answer: "Reduce total voxel count and debris counts.",
  },
];

const ManualSection = ({ id, title, children }) => (
  <section id={id} className="dsb-manual-section">
    <h2>{title}</h2>
    {children}
  </section>
);

const DSBManual = () => {
  const [isTocOpen, setIsTocOpen] = useState(false);

  const toggleToc = () => setIsTocOpen((open) => !open);
  const handleTocItemClick = () => setIsTocOpen(false);

  const tocToggle = (
    <button
      type="button"
      className={`dsb-toc-toggle ${isTocOpen ? "is-open" : ""}`}
      onClick={toggleToc}
      aria-expanded={isTocOpen}
      aria-controls="dsb-manual-toc"
    >
      <span className="dsb-toc-icon" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="dsb-toc-label">Contents</span>
    </button>
  );

  return (
    <div className="LandingPage01 dsb-page">
      <Header leftAddon={tocToggle} />
      <main className={`dsb-manual-layout ${isTocOpen ? "toc-open" : ""}`}>
        <nav
          className={`dsb-manual-sidebar ${isTocOpen ? "open" : ""}`}
          aria-label="Manual Table of Contents"
        >
          <div className="dsb-manual-toc-header">
            <h2>Table of Contents</h2>
            <button type="button" className="dsb-toc-close" onClick={() => setIsTocOpen(false)}>
              Close
            </button>
          </div>
          <div className="dsb-manual-toc" id="dsb-manual-toc">
            {toc.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={handleTocItemClick}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <div className={`dsb-toc-overlay ${isTocOpen ? "visible" : ""}`} onClick={() => setIsTocOpen(false)} />
        <div className="dsb-manual">
          <section className="dsb-manual-hero">
            <p className="dsb-label">Destructible Structure Builder</p>
            <h1>Online Manual</h1>
            <p>
              Version 1.0.0 &nbsp;•&nbsp; Compatibility: Unity 2022.3 LTS, 2021.3 LTS, 6.0 LTS
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <Link className="dsb-button secondary" to="/destructible-structure-builder">
                ← Back to product overview
              </Link>
            </div>
          </section>

        <ManualSection id="overview" title="Overview">
          <p>
            <strong>Destructible Structure Builder (DSB)</strong> is a Unity Editor toolkit for assembling gameplay-ready buildings that can splinter, crumble, and collapse in real time. Author everything in the DSB window using Build Modes for connections, members, walls, and stairs. Runtime components handle stress propagation, pooling, debris, and event dispatch.
          </p>
          <p>
            <em>Important:</em> All construction happens in the Unity Editor. The toolkit does not include any in-game building or runtime editing tools.
          </p>
        </ManualSection>

        <ManualSection id="feature-highlights" title="Feature Highlights">
          <ul>
            <li><strong>Stress Solver:</strong> Graph-based solver that finds shortest paths to ground, isolates unsupported chunks, and propagates structural load.</li>
            <li><strong>Voxel-based Damage:</strong> Structures use voxels that detach individually on impact.</li>
            <li><strong>Chunk Merging & Splitting:</strong> Voxels merge for performance and split dynamically when damaged.</li>
            <li><strong>Build Modes Toolbar:</strong> Visual modes for nodes, beams, walls, stairs, and more.</li>
            <li><strong>Wall Designer:</strong> Grid-based editor with cubes, windows, triangle cutouts, per-cell health, and live rotation.</li>
            <li><strong>Design Presets:</strong> Save any wall as a WallDesign ScriptableObject and re-apply instantly.</li>
            <li><strong>Object Pooling:</strong> Pooled debris with adjustable lifetime, pool size, and spawn rate.</li>
            <li><strong>Profile-driven effects:</strong> EffectsLibrary defaults plus MaterialEffectsLibrary overrides.</li>
            <li><strong>Mesh Cache:</strong> Persist generated meshes between sessions for safe prefabs.</li>
            <li><strong>Full Unity Undo support:</strong> Each action is wrapped in a single Undo group.</li>
          </ul>
        </ManualSection>

        <ManualSection id="package-contents" title="Package Contents">
          <div className="dsb-table-wrapper">
            <table>
            <thead>
              <tr>
                <th>Folder</th>
                <th>Contents</th>
              </tr>
            </thead>
            <tbody>
              {packageContents.map((row) => (
                <tr key={row.folder}>
                  <td>{row.folder}</td>
                  <td>{row.contents}</td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
          <h3>Asset Licensing & Third-party Content</h3>
          <ul>
            <li>All shipped assets (textures, materials, meshes, audio, particles, prefabs, demo scenes) are author-created and free to use in your games.</li>
            <li>No bundled third-party content or downstream license files.</li>
            <li>Optional dependency: Unity <code>com.unity.ai.navigation</code> package for navigation utilities.</li>
          </ul>
        </ManualSection>

        <ManualSection id="installation" title="Installation">
          <ol>
            <li>Download the <code>.unitypackage</code> from the Asset Store.</li>
            <li>Choose <strong>Assets → Import Package → Custom Package…</strong> and select the file.</li>
            <li>Click <strong>Import</strong> in the dialog.</li>
            <li>For URP/HDRP, run the render pipeline material upgrade tool.</li>
            <li>(Optional) Install <code>com.unity.ai.navigation</code> via Package Manager.</li>
          </ol>
        </ManualSection>

        <ManualSection id="requirements" title="Requirements and Compatibility">
          <div className="dsb-table-wrapper">
            <table>
            <tbody>
              {requirements.map((row) => (
                <tr key={row.category}>
                  <th>{row.category}</th>
                  <td>{row.details}</td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </ManualSection>

        <ManualSection id="limitations" title="Limitations">
          <ul>
            <li>Editor-only authoring with no in-game construction tools.</li>
            <li>Destruction runs at runtime but stock tools cannot spawn new beams/walls.</li>
            <li>No built-in multiplayer or networking support.</li>
            <li>Structures must remain uniformly scaled—non-uniform scaling causes distortion.</li>
            <li>WebGL builds are not recommended.</li>
          </ul>
        </ManualSection>

        <ManualSection id="quick-start" title="Quick Start">
          <ol>
            <li>Open a new scene and choose <strong>Tools → Destructible Structure Builder</strong>.</li>
            <li>Create a <strong>BuildSettings Asset</strong> under <code>Assets/</code>.</li>
            <li>Create a <strong>Destruction Effects Manager</strong> and assign EffectsLibrary plus MaterialEffectsLibrary.</li>
            <li>Set Build Mode to Create Structure, then place connections, members, and walls.</li>
            <li>Mark grounded members, author walls/stairs, apply custom designs, and press Play to test destruction.</li>
          </ol>
          <p>
            <strong>Important:</strong> No Effects Profile = no audio/particle effects. Assign the sample profile to start.
          </p>
        </ManualSection>

        <ManualSection id="scene-setup" title="Scene Setup Tips">
          <ul>
            <li>Use <strong>Structure Manager → Runtime Debris Settings → Create DestructionEffectsManager</strong> if none exists.</li>
            <li>Grounded members are mandatory for accurate stress simulation; auto-detect grounded if needed.</li>
            <li>Use Show Stress Gizmos to visualize load propagation.</li>
            <li>Avoid non-uniform scaling on the structure or parents.</li>
          </ul>
        </ManualSection>

        <ManualSection id="performance" title="Performance and Best Practices">
          <div className="dsb-table-wrapper">
            <table>
            <thead>
              <tr>
                <th>Area</th>
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {performanceTips.map((tip) => (
                <tr key={tip.area}>
                  <td>{tip.area}</td>
                  <td>{tip.recommendation}</td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </ManualSection>

        <ManualSection id="mesh-cache" title="Mesh Cache Management">
          <p>
            DSB persists generated meshes to disk so structures can be prefabbed and reopened quickly. When a structure is built, it first looks for cached meshes and only rebuilds missing entries.
          </p>
          <h3>How it works</h3>
          <ul>
            <li>Choose a cache root in <strong>Structure Manager → Build Settings → Mesh Cache</strong>.</li>
            <li>Each Structural Group writes meshes to a unique subfolder.</li>
            <li>Deleting a mesh file only affects that piece.</li>
          </ul>
          <h3>Maintaining the cache</h3>
          <ul>
            <li>Use <strong>Validate Cache</strong> after moving folders or enabling caching.</li>
            <li>Clear a group’s cache folder to rebuild stale meshes.</li>
            <li>Manually remove old group folders to reclaim disk space.</li>
          </ul>
          <h3>Common issues</h3>
          <ul>
            <li><strong>Missing meshes after relocating project:</strong> Reassign root path and Validate Cache.</li>
            <li><strong>Renamed/deleted groups still occupy disk:</strong> Delete their subfolders.</li>
            <li><strong>Unexpected geometry:</strong> Clear the cache folder or Validate Cache.</li>
          </ul>
        </ManualSection>

        <ManualSection id="editor-workflow" title="Editor Workflow">
          <h3 id="build-modes-toolbar">Build Modes Toolbar</h3>
          <div className="dsb-table-wrapper">
            <table>
            <thead>
              <tr>
                <th>Mode</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {buildModes.map((mode) => (
                <tr key={mode.mode}>
                  <td>{mode.mode}</td>
                  <td>{mode.description}</td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
          <h3 id="build-overlay">Build Overlay</h3>
          <p>
            Each build mode exposes a Scene-view overlay with Rotate and Cancel controls, snap toggle (<strong>C</strong>), and axis locks (arrow keys). Wall/Stair modes include Edge Alignment and Endpoint/Midpoint snapping toggles (hotkey <strong>M</strong>).
          </p>
          <h3 id="wall-design-inspector">Wall Design Inspector</h3>
          <ul>
            <li>Interactive grid with brush palette, hover preview, and multi-cell editing.</li>
            <li>Auto-resizes when rows/columns change.</li>
            <li>Triangle and sloped cells support rotation.</li>
          </ul>
          <p>
            Create designs via <strong>Assets → Create → DSB → Wall Design</strong> or <strong>Apply Design</strong> mode. Paint cell types, erase with the Empty brush, and apply designs back in the scene.
          </p>
          <h4 id="copy-design">Copy Wall Design From Scene</h4>
          <p>While in Apply Design or Wall Build, click <em>Copy Design From Wall in Scene</em> then click a wall to load its layout.</p>
          <h4 id="save-design">Saving a Wall Design</h4>
          <ol>
            <li>Enter Apply Design and create/copy a design.</li>
            <li>Click Select… to pick a folder under <code>Assets/</code>.</li>
            <li>Name the design and press Save Design.</li>
          </ol>
          <h3 id="hotkeys">Hotkeys</h3>
          <div className="dsb-table-wrapper">
            <table>
            <thead>
              <tr>
                <th>Default Key</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {hotkeys.map((row) => (
                <tr key={row.key}>
                  <td>{row.key}</td>
                  <td>{row.action}</td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
          <h3 id="prefab">Prefab a Structure</h3>
          <ol>
            <li>Select the Structural Group Manager root.</li>
            <li>Confirm a cache folder and Validate Cache if warned.</li>
            <li>Drag the root into the Project window to create a prefab.</li>
          </ol>
          <p>
            <em>Note:</em> If the prefab asset is deleted later, unpack or rebuild before editing to avoid red references.
          </p>
        </ManualSection>

        <ManualSection id="effects" title="Destruction Effects Manager">
          <p>
            The singleton DestructionEffectsManager handles pooled debris shells, particle systems, and audio sources. Assign an Effects Library and optional Material Effects Library; without them, no FX play.
          </p>
          <ul>
            <li>Configure audio/particle pools, debris pooling caps, lifetimes, and shadows.</li>
            <li>Persistent Debris merges resting debris into combined meshes.</li>
            <li>Debris Collider Scale trades collider precision vs stability.</li>
            <li>Debris Spawn Motion controls random impulses and spin.</li>
            <li>Group Collision Damage converts collision impulses into damage for detached groups.</li>
            <li>Large Collapse Mass Threshold gates collapse events.</li>
            <li>Hierarchy visibility toggles help keep pooled debris tidy while editing.</li>
          </ul>
          <h3 id="debris-impact">Debris Impact Sound Hook</h3>
          <p>
            Every pooled debris has a <code>DebrisCollisionSound</code> component. When collisions occur, DestructionSignals.DebrisImpact fires, allowing custom audio or particles.
          </p>
          <h3 id="workflow-tips">Workflow Quick Tips</h3>
          <ul>
            <li>Balance pools vs lifetimes.</li>
            <li>Enable Persistent Debris to keep rubble piles.</li>
            <li>Tune Debris Collider Scale to reduce jitter.</li>
            <li>Call <code>GetReusableDebrisShell()</code> then <code>RegisterTimedDebris()</code> for manual spawning.</li>
            <li>Subscribe to DestructionSignals for extra VFX/SFX.</li>
            <li>Configure Collision Damage layers, thresholds, and sensitivity to apply damage when detached groups collide.</li>
          </ul>
        </ManualSection>

        <ManualSection id="structural-group" title="Structural Group Inspector">
          <ul>
            <li><strong>Overview:</strong> Toggle Show Stress Gizmos and watch for non-uniform scale warnings.</li>
            <li><strong>HP:</strong> Adjust wall/window/member voxel health with Apply to All buttons.</li>
            <li><strong>Simulation:</strong> Control density, structural strength, and validation intervals.</li>
            <li><strong>Utilities:</strong> Auto-detect grounded members, add NavMesh rebakers, rebuild voxels, validate cache.</li>
            <li><strong>Diagnostics:</strong> Refresh counts for walls, members, and combined totals.</li>
          </ul>
          <h3 id="stress-visualizer">Stress Visualizer</h3>
          <p>
            Enable <strong>Show Stress Gizmos</strong> to color overstressed beams during Play Mode. Selecting Member or Wall pieces exposes per-voxel damage readouts.
          </p>
        </ManualSection>

        <ManualSection id="navigation" title="Navigation">
          <p>
            Install Unity's <code>com.unity.ai.navigation</code> package to keep NavMeshes aligned with collapsing structures.
          </p>
          <h3 id="structurenavmeshrebaker">StructureNavmeshRebaker</h3>
          <ul>
            <li>Attach to a Structural Group Manager to auto-refresh a NavMeshSurface.</li>
            <li>Automatically configures the NavMeshSurface to collect child colliders.</li>
            <li>Debounces rebakes via <code>debounceSeconds</code> and <code>minDelaySeconds</code>.</li>
            <li>Validates colliders on startup and warns about meshes that cannot bake.</li>
          </ul>
        </ManualSection>

        <ManualSection id="texture-scaling" title="Texture Scaling">
          <p>
            Walls and members store <strong>Texture Scale X/Y</strong> values measured in meters per texture repeat. DSB divides object size by these scales to derive tiling factors and multiplies UVs so textures repeat consistently. A value of 1 equals one meter per tile; 0.5 doubles the tiling; 2 halves it; 0 falls back to one meter. Global defaults live in Structure Build Settings and individual pieces can override them (rebuild to see changes).
          </p>
        </ManualSection>

        <ManualSection id="damage" title="Damage and Destructible Workflow">
          <p>
            Objects inherit from <code>Voxel</code> and implement <code>IDamageable</code>. Voxels store debris data, locate the DestructionEffectsManager, and spawn debris when <code>Crumble()</code> is called. If no manager exists, the object still destroys but without debris.
          </p>
          <h3 id="apply-damage">How to Apply Damage</h3>
          <p>Call <code>TakeDamage(float damage)</code> on any component implementing <code>IDamageable</code> (for example Chunk).</p>
          <pre>
            <code>{`using Mayuns.DSB;

if (hit.collider.TryGetComponent<IDamageable>(out var dmg))
    dmg.TakeDamage(25f);`}</code>
          </pre>
        </ManualSection>

        <ManualSection id="extensibility" title="Extensibility Guide & Runtime Scripting API">
          <p>
            DestructionEffectsManager exposes hooks for gameplay logic and custom effects via DestructionSignals and profile tuning. Adjust pool sizes, lifetimes, and overrides at runtime.
          </p>
          <h3>Events — Quick Reference</h3>
          <div className="dsb-table-wrapper">
            <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Trigger</th>
              </tr>
            </thead>
            <tbody>
              {events.map((evt) => (
                <tr key={evt.name}>
                  <td>{evt.name}</td>
                  <td>{evt.trigger}</td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
          <h3>Runtime Scripting Example</h3>
          <pre>
            <code>{`using Mayuns.DSB;
using UnityEngine;

public class DsbEventBridge : MonoBehaviour
{
    void OnEnable()
    {
        DestructionSignals.PieceCrumble += OnCrumble;
        DestructionSignals.MemberStress += OnMemberStress;
        DestructionSignals.LargeCollapse += OnCollapse;
        DestructionSignals.WindowShatter += PlayGlassTinkle;
        DestructionSignals.DebrisImpact += SpawnDustPuff;
        DestructionSignals.GroupCrush += OnGroupCrush;
    }

    void OnDisable()
    {
        DestructionSignals.PieceCrumble -= OnCrumble;
        DestructionSignals.MemberStress -= OnMemberStress;
        DestructionSignals.LargeCollapse -= OnCollapse;
        DestructionSignals.WindowShatter -= PlayGlassTinkle;
        DestructionSignals.DebrisImpact -= SpawnDustPuff;
        DestructionSignals.GroupCrush -= OnGroupCrush;
    }

    void OnCrumble(StructuralGroupManager group, Material m, Vector3 pos)
    {
        Debug.Log($"Chunk of {m.name} crumbled at {pos}");
    }

    void OnMemberStress(StructuralGroupManager group, Material m, Vector3 pos) {}
    void OnCollapse(StructuralGroupManager group, Material m, Vector3 pos) {}
    void PlayGlassTinkle(StructuralGroupManager group, Material m, Vector3 pos) {}
    void SpawnDustPuff(StructuralGroupManager group, Material m, Vector3 pos) {}
    void OnGroupCrush(StructuralGroupManager group, Material m, Vector3 pos) {}
}`}</code>
          </pre>
        </ManualSection>

        <ManualSection id="troubleshooting" title="Troubleshooting">
          <ul>
            {troubleshooting.map((item) => (
              <li key={item.question}>
                <strong>{item.question}:</strong> {item.answer}
              </li>
            ))}
          </ul>
        </ManualSection>

        <ManualSection id="support" title="Support">
          <p>Email: <a href="mailto:support@mayuns.com">support@mayuns.com</a></p>
          <p>Discord: <a href="https://discord.gg/73GaMeP6JF" target="_blank" rel="noreferrer">https://discord.gg/73GaMeP6JF</a></p>
          <p>Website: <a href="https://mayuns.com" target="_blank" rel="noreferrer">https://mayuns.com</a></p>
        </ManualSection>

        <ManualSection id="license" title="License">
          <p>
            Runtime and editor scripts ship under the Unity Asset Store EULA. All bundled textures, meshes, audio clips, particle presets, materials, and demo scenes were authored by Antonio Indindoli (Mayuns Technologies) and may be used in shipped projects without extra licensing or attribution requirements.
          </p>
          <p>Unity is a trademark of Unity Technologies; all other trademarks belong to their respective owners.</p>
        </ManualSection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DSBManual;
