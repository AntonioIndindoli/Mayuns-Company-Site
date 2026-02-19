import React from "react";
import ProductShowcasePage from "./ProductShowcasePage";
import copyrightHero from "./images/LandingPageCard_copyright.png";

const keyStats = [
    { label: "Platform", value: "Web Browser" },
    { label: "Genre", value: "Adventure RPG" },
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
    />
);

export default CopyrightAdventure;
