import React from "react";
import { Link } from "react-router-dom";
import {
    FiArrowRight,
    FiChevronDown,
    FiExternalLink,
    FiCpu,
    FiPackage,
    FiTool,
    FiZap,
} from "react-icons/fi";
import { FaSpotify, FaSteam } from "react-icons/fa";
import Header from "./components/Header";
import Hero3D from "./components/Hero3D";
import Footer from "./components/Footer";
import backrooms from "./images/LandingPageCard_backrooms.png";
import copyright from "./images/LandingPageCard_copyright.png";
import dsbLogo from "./images/LandingPageCard_DSB.png";
import dsbCollapse from "./images/DSB Gallery/Collapse_DSB.png";
import placeholder from "./images/PLACEHOLDER.png";
import mayunzMusic from "./images/nutpack.jpg";

const featuredBenefits = [
    {
        icon: <FiPackage />,
        title: "Powerful Destruction",
        description: "Create realistic, believable destruction with ease.",
    },
    {
        icon: <FiTool />,
        title: "Easy to Integrate",
        description: "Designed for Unity. Simple workflow, powerful results.",
    },
    {
        icon: <FiZap />,
        title: "Optimized Performance",
        description: "Built with performance in mind for any project scale.",
    },
];

const LandingPage = () => {
    return (
        <div
            className="LandingPage01"
        >
            <Header />

            <section className="hero-section">
                <div className="background-gradient-color" aria-hidden="true"></div>
                <div className="background-gradient" aria-hidden="true"></div>

                <div className="hero-content">
                    <div className="box-center-image">
                        <div className="center-image">
                            <Hero3D fallbackImg={placeholder} className="hero3d" />
                        </div>
                    </div>

                    <div className="hero-copy">
                        <p className="hero-pronunciation">
                            It's pronounced <span>MAY-unz</span>, not <span>MY-unz</span>.
                        </p>

                        <div className="projects-scroll-cue">
                            <FiChevronDown aria-hidden="true" />
                            <span>Explore our projects</span>
                        </div>
                    </div>
                </div>
            </section>


            <main className="home-projects-and-cards" aria-label="Projects">
                <div className="featured-section-heading">
                    <h2 id="more-projects-title">Featured Project</h2>
                </div>
                <section className="featured-project-section" aria-labelledby="featured-project-title">
                    <h2 id="featured-project-title" className="sr-only">Featured project: Destructible Structure Builder</h2>
                    <article className="featured-project-panel">
                        <div className="featured-project-copy">
                            <Link to="/destructible-structure-builder" aria-label="View Destructible Structure Builder">
                                <img src={dsbLogo} alt="DSB" className="featured-project-logo" />
                            </Link>

                            <h3>Destructible Structure Builder</h3>
                            <p className="featured-project-description">
                                Unity editor toolkit for building structures that can crumble and collapse believably.
                            </p>

                            <div className="project-tag-row" aria-label="Project categories">
                                <span className="project-tag project-tag-primary">Asset Store</span>
                                <span className="project-tag">Tool</span>
                            </div>

                            <Link
                                className="project-primary-action"
                                to="/destructible-structure-builder"
                            >
                                Product Page
                                <FiExternalLink aria-hidden="true" />
                            </Link>
                        </div>

                        <Link className="featured-project-media" to="/destructible-structure-builder">
                            <img src={dsbCollapse} alt="Destructible Structure Builder collapse preview" />

                        </Link>

                        <div className="featured-benefits" aria-label="Destructible Structure Builder highlights">
                            {featuredBenefits.map((benefit) => (
                                <div className="featured-benefit" key={benefit.title}>
                                    <span className="featured-benefit-icon">{benefit.icon}</span>
                                    <div>
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                </section>

                <section className="project-section-block" aria-labelledby="more-projects-title">
                    <div className="project-section-heading">
                        <h2 id="more-projects-title">More Projects</h2>
                    </div>

                    <div className="project-list-grid">
                        <article className="compact-project-card">
                            <Link className="compact-project-image-link" to="/backrooms-unseen-tapes" aria-label="View The Backrooms: Unseen Tapes">
                                <img src={backrooms} alt="The Backrooms: Unseen Tapes cover" />
                            </Link>

                            <div className="compact-project-content">
                                <h3>The Backrooms: Unseen Tapes</h3>
                                <p>
                                    A survival horror experience in the eerie, endless hallways of The Backrooms.
                                </p>

                                <div className="project-tag-row">
                                    <span className="project-tag platform-tag">
                                        <FaSteam aria-hidden="true" />
                                        Steam
                                    </span>
                                    <span className="project-tag">PC</span>
                                </div>

                                <Link className="project-text-action" to="/backrooms-unseen-tapes">
                                    Product Page
                                    <FiArrowRight aria-hidden="true" />
                                </Link>
                            </div>
                        </article>

                        <article className="compact-project-card">
                            <Link className="compact-project-image-link" to="/copyright-adventure" aria-label="View Copyright Adventure">
                                <img src={copyright} alt="Copyright Adventure cover" />
                            </Link>

                            <div className="compact-project-content">
                                <h3>Copyright Adventure</h3>
                                <p>
                                    An in-browser RPG where you explore, battle, and recruit pop culture icons.
                                </p>

                                <div className="project-tag-row">
                                    <span className="project-tag project-tag-green">Web Game</span>
                                    <span className="project-tag">RPG</span>
                                </div>

                                <a
                                    className="project-text-action"
                                    href="https://victorious-rock-0e8ecde10.3.azurestaticapps.net/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Play Now
                                    <FiArrowRight aria-hidden="true" />
                                </a>
                            </div>
                        </article>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LandingPage;
