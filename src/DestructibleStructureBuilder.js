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
    { label: "Unity (LTS)", value: "6, 2022, 2021" },
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
        description: "Generated meshes are cached for fast prefab creation and reliable scene reopening.",
        image: meshCacheShot,
    },
    {
        title: "Structural Variety",
        description: "Supports diverse building types, from residential homes to multi-story urban structures, each responding uniquely to stress and damage.",
        image: variety,
    },
];

const DestructibleStructureBuilder = () => (
    <ProductShowcasePage
        label="Unity Editor Toolkit"
        title="Destructible Structure Builder"
        descriptionLabel="BUILD & DESTROY"
        description="DSB is a Unity Editor toolkit for creating structures which crumble and collapse believably at runtime. Use simple build modes to place beams, walls, and supports in editor-time scene view, then destroy during gameplay. Includes stress simulation, debris effects, and prefab support."
        heroImage={heroShot}
        keyStats={keyStats}
        actions={[
            { text: "Asset Store", href: "/destructible-structure-builder", variant: "primary", type: "link" },
            { text: "Demo", href: "/DSB_Demo.zip", variant: "secondary", type: "anchor" },
            { text: "Manual", href: "/Manual.pdf", variant: "secondary", type: "anchor" },
        ]}
        featureGalleryItems={featureGalleryItems}
    />
);

export default DestructibleStructureBuilder;
