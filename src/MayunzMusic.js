import React from "react";
import ProductShowcasePage from "./ProductShowcasePage";
import albumArt from "./images/nutpack.jpg";

const keyStats = [
    { label: "Artist", value: "Mayunz" },
    { label: "Composer", value: "Caleb Rodriguez" },
];

const MayunzMusic = () => (
    <ProductShowcasePage
        label="The Nutpack Album"
        title="Mayunz"
        descriptionLabel="LISTEN NOW"
        description="Original music composed by Caleb Rodriguez and released under the artist name Mayunz."
        heroImage={albumArt}
        keyStats={keyStats}
        actions={[
            {
                text: "Spotify",
                href: "https://open.spotify.com/artist/6PQTHgm1vyLOmJPTwYzr4I?si=3G9UstlrTma1AxakT1nIKg",
                variant: "primary",
                type: "anchor",
            },
        ]}
    />
);

export default MayunzMusic;
