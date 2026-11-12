import React from "react";
import ProductShowcasePage from "./ProductShowcasePage";
import heroShot from "./images/DSB_Hero.png";
import buildModesShot from "./images/DSB Gallery/Build Modes_DSB.png";
import stressPropagationShot from "./images/DSB Gallery/Stress Propagation_DSB.png";
import wallDesignShot from "./images/DSB Gallery/Wall Design System_DSB.png";
import meshCacheShot from "./images/DSB Gallery/Mesh Cache Workflow_DSB.png";
import variety from "./images/DSB Gallery/Variety_DSB.png";
import cascade from "./images/DSB Gallery/Cascade_DSB.png";
import collapse from "./images/DSB Gallery/Collapse_DSB.png";

const keyStats = [
    { label: "Unity (LTS)", value: "6.3, 6.0, 2022.3" },
    { label: "Render Pipelines", value: "Built-in, URP, HDRP" },
];

const featureGalleryItems = [    
{
        title: "Dynamic Collapse",
        description: "Node-based simulation drives structural collapse and procedural fracturing, breaking structures into progressively smaller debris.",
        image: collapse,
    },
    {
        title: "Cinematic Destruction",
        description: "Layered debris, dust, and impact effects create convincing collapses, with included audio and particle systems that can be easily swapped.",
        image: cascade,
    },
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
        description: "Generated meshes are embedded into prefab assets for easy duplication and reuse.",
        image: meshCacheShot,
    },
    {
        title: "Structural Variety",
        description: "Supports diverse building types, from residential homes to multi-story urban structures.",
        image: variety,
    },
];

const DestructibleStructureBuilder = () => (
    <ProductShowcasePage
        title="Destructible Structure Builder"
        descriptionLabel="BUILD & DESTROY"
        description="Create destructible structures in Unity with intuitive building tools and believable, physics-driven collapse."
        heroImage={heroShot}
        keyStats={keyStats}
        actionsClassName="dsb-hero-actions"
        actions={[
            { text: "Asset Store", href: "https://assetstore.unity.com/packages/slug/296695", variant: "primary", type: "link", icon: "store" },
            { text: "Demo", href: "/DSB_Demo.zip", variant: "secondary", type: "anchor", icon: "download" },
            { text: "Manual", href: "/Manual.pdf", variant: "secondary", type: "anchor", icon: "file" },
            { text: "Tutorial", href: "https://www.youtube.com/watch?v=hWnYS5C66r0", variant: "secondary", type: "anchor", icon: "video" },
            { text: "Discord", href: "https://discord.gg/73GaMeP6JF", variant: "secondary", type: "link", icon: "discord" },
        ]}
        featureGalleryItems={featureGalleryItems}
    />
);

export default DestructibleStructureBuilder;
