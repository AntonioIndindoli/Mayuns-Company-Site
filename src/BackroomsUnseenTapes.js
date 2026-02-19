import React from "react";
import ProductShowcasePage from "./ProductShowcasePage";
import backroomsHero from "./images/LandingPageCard_backrooms.png";
import placeholderImage from "./images/PLACEHOLDER.png";

const keyStats = [
    { label: "Platform", value: "PC (Steam)" },
    { label: "Genre", value: "Survival Horror" },
];

const featureGalleryItems = [
    {
        title: "Explore Endless Corridors",
        description: "Navigate unsettling liminal environments where every hallway feels familiar and wrong.",
        image: backroomsHero,
    },
    {
        title: "Survive the Unknown",
        description: "Keep moving, manage your fear, and evade threats lurking just beyond your flashlight.",
        image: placeholderImage,
    },
    {
        title: "Atmospheric Storytelling",
        description: "Unravel clues hidden across levels to learn what happened inside the Backrooms.",
        image: backroomsHero,
    },
    {
        title: "Immersive Horror Audio",
        description: "Dynamic sound design builds constant tension and makes every step matter.",
        image: placeholderImage,
    },
];

const BackroomsUnseenTapes = () => (
    <ProductShowcasePage
        label="Indie Horror Game"
        title="The Backrooms: Unseen Tapes"
        descriptionLabel="DESCEND INTO THE UNKNOWN"
        description="A first-person survival horror experience set in eerie, seemingly endless liminal spaces. Search for exits, uncover fragments of the story, and survive what waits in the dark."
        heroImage={backroomsHero}
        keyStats={keyStats}
        actions={[
            {
                text: "Steam Store",
                href: "https://store.steampowered.com/app/2816710/The_Backrooms_Unseen_Tapes/",
                variant: "primary",
                type: "anchor",
            },
        ]}
        featureGalleryItems={featureGalleryItems}
    />
);

export default BackroomsUnseenTapes;
