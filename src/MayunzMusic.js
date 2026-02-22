import React from "react";
import ProductShowcasePage from "./ProductShowcasePage";
import albumArt from "./images/nutpack.jpg";

const keyStats = [
    { label: "Artist", value: "Mayunz" },
    { label: "Composer", value: "Caleb Rodriguez" },
];

const MayunzMusic = () => (
    <ProductShowcasePage
        label="Music"
        title="Mayunz Music"
        descriptionLabel="LISTEN NOW"
        description="Original music composed by Caleb Rodriguez and released under the artist name Mayunz."
        heroImage={albumArt}
        keyStats={keyStats}
        actions={[
            {
                text: "Spotify",
                href: "https://open.spotify.com/search/mayunz",
                variant: "primary",
                type: "anchor",
            },
        ]}
    />
);

export default MayunzMusic;
