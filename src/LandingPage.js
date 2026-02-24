import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Hero3D from "./components/Hero3D";
import Footer from "./components/Footer";
import backrooms from "./images/LandingPageCard_backrooms.png";
import copyright from "./images/LandingPageCard_copyright.png";
import DSB_Screenshot from "./images/LandingPageCard_DSB.png";
import placeholder from "./images/PLACEHOLDER.png";
import mayunzMusic from "./images/nutpack.jpg";

const LandingPage = () => {
    return (
        <div
            className="LandingPage01"
        >
            <Header />

            <section className="hero-section">
                <div className="background-gradient-color" aria-hidden="true"></div>
                <div className="background-gradient" aria-hidden="true"></div>

                <div className="box-center-image">
                    <div className="center-image">
                        <Hero3D fallbackImg={placeholder} className="hero3d" />
                    </div>
                </div>

                <div className="hero-copy">

                    <div className="Home-Message">
                        Projects
                    </div>
                </div>
            </section>


            <div className="home-projects-and-cards">
                <div className="home-cards">
                    <Card
                        imageSrc={backrooms}
                        caption="Available on Steam"
                        link="/backrooms-unseen-tapes"
                        description="A survival horror experience in the eerie, endless hallways of The Backrooms."
                    />

                    <Card
                        imageSrc={DSB_Screenshot}
                        caption="Available on Asset Store"
                        link="/destructible-structure-builder"
                        description="Unity editor toolkit for building structures that can crumble and collapse believably."
                    />

                    <Card
                        imageSrc={copyright}
                        caption="Play Now"
                        link="/copyright-adventure"
                        description="An in-browser RPG where you explore, battle, and recruit pop culture icons."
                    />

                </div>

                <div className="home-extras-section"></div>
                    <div className="Home-Message">Extras</div>
                    <div className="home-cards">
                        <Card
                            imageSrc={mayunzMusic}
                            caption="Listen on Spotify"
                            link="/mayunz-music"
                            description="Original music composed by Caleb Rodriguez."
                        />
                    </div>
                
            </div>

            <Footer />
        </div>
    );
};

export default LandingPage;
