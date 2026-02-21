import React from "react";
import ProductShowcasePage from "./ProductShowcasePage";
import Survive from "./images/Survive.jpg";
import Explore from "./images/Explore.jpg";
import Manage from "./images/Manage.jpg";
import Immersive from "./images/Immersive.jpg";
import backroomsHero from "./images/BackroomsHero.jpg";

const keyStats = [
    { label: "Platform", value: "PC (Steam)" },
    { label: "Genre", value: "Survival Horror" },
];

const featureGalleryItems = [
    {
        title: "Explore Endless Corridors",
        description: "Navigate shifting, hostile environments where visibility is low and danger is constant.",
        image: Explore,
    },
    {
        title: "Immersive Found Footage Horror",
        description: "Experience the Backrooms through a raw found-footage lens, with distorted visuals, analog artifacts, and spatial audio that keeps you on edge.",
        image: Immersive,
    },
    {
        title: "Manage Resources and Sanity",
        description: "Manage your sanity and resources as the environment distorts around you.",
        image: Manage,
    },
    {
        title: "Stay Alive",
        description: "Evade roaming entities by running, hiding, and staying silent. One mistake can mean being caught.",
        image: Survive,
    },
];

const BackroomsUnseenTapes = () => (
    <ProductShowcasePage
        label="Survival Horror"
        title="The Backrooms: Unseen Tapes"
        descriptionLabel="ESCAPE THE BACKROOMS"
        description="A first-person survival horror experience set in eerie, seemingly endless liminal spaces. Search for exits and evade what waits in the dark."
        heroImage={backroomsHero}
        keyStats={keyStats}
        actions={[
            {
                text: "Steam Store",
                href: "https://store.steampowered.com/app/",
                variant: "primary",
                type: "anchor",
            },
        ]}
        featureGalleryItems={featureGalleryItems}
    />
);

export default BackroomsUnseenTapes;
