import React from "react";
import ProductShowcasePage from "./ProductShowcasePage";
import copyrightHero from "./images/LandingPageCard_copyright.png";
import placeholderImage from "./images/PLACEHOLDER.png";

const keyStats = [
    { label: "Platform", value: "Web Browser" },
    { label: "Genre", value: "Adventure RPG" },
];

const featureGalleryItems = [
    {
        title: "Iconic Encounters",
        description: "Meet recognizable personalities and challenge them in tactical showdowns.",
        image: copyrightHero,
    },
    {
        title: "Progressive Story Paths",
        description: "Travel through connected zones and progress your story through battles and dialogue.",
        image: placeholderImage,
    },
    {
        title: "Turn-Based Battles",
        description: "Build your strategy and outplay opponents with smart move selection.",
        image: copyrightHero,
    },
    {
        title: "Play Instantly",
        description: "No install required—jump into the adventure directly in your browser.",
        image: placeholderImage,
    },
];

const CopyrightAdventure = () => (
    <ProductShowcasePage
        label="Browser RPG"
        title="Copyright Adventure"
        descriptionLabel="EXPLORE & BATTLE"
        description="An in-browser RPG adventure where you travel through creative worlds, encounter pop-culture-inspired characters, and battle your way through strategic encounters."
        heroImage={copyrightHero}
        keyStats={keyStats}
        actions={[
            {
                text: "Play Now",
                href: "https://victorious-rock-0e8ecde10.3.azurestaticapps.net/",
                variant: "primary",
                type: "anchor",
            },
        ]}
        featureGalleryItems={featureGalleryItems}
    />
);

export default CopyrightAdventure;
