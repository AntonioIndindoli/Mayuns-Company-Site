import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { FaSteam } from "react-icons/fa";
import Hero3D from "./components/Hero3D";
import Footer from "./components/Footer";
import Header from "./components/Header";
import backrooms from "./images/LandingPageCard_backrooms.png";
import copyright from "./images/LandingPageCard_copyright.png";
import dsbLogo from "./images/LandingPageCard_DSB.png";
import dsbCollapse from "./images/DSB Gallery/Collapse_DSB.png";
import placeholder from "./images/PLACEHOLDER.png";
import "./LandingPageRedesign.css";

const slogans = [
    "No preservatives.",
    "Not actually mayonnaise.",
    "Unreasonably spreadable.",
    "Contains games.",
    "Zero mayo.",
    "Full-fat fun.",
    "No refrigeration needed.",
    "Do not refrigerate.",
    "Legally not mayonnaise.",
    "Hold the mayo.",
];

const projects = [
    {
        title: "The Backrooms: Unseen Tapes",
        image: backrooms,
        path: "/backrooms-unseen-tapes",
        category: "SURVIVAL HORROR",
        platform: "Steam / PC",
        description: "A survival horror experience in the eerie, endless hallways of The Backrooms.",
    },
    {
        title: "Copyright Adventure",
        image: copyright,
        path: "/copyright-adventure",
        category: "BROWSER RPG",
        platform: "Web Game",
        description: "An in-browser RPG where you explore, battle, and recruit pop culture icons.",
    },
];

export default function LandingPage() {
    const [slogan] = useState(() => slogans[Math.floor(Math.random() * slogans.length)]);
    const explore = () => {
        document.getElementById("home-projects").scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        });
    };

    return (
        <div className="mayuns-home">
            <a className="mh-skip" href="#home-main" onClick={(event) => {
                event.preventDefault();
                document.getElementById("home-main").focus();
            }}>Skip to content</a>
            <Header />
            <main id="home-main" tabIndex={-1}>
                <section className="mh-hero" aria-labelledby="home-title">
                    <div className="mh-hero-inner">
                        <div className="mh-jar-stage" role="group" aria-label="Interactive 3D mayo jar">
                            <Hero3D fallbackImg={placeholder} className="mh-jar" groundShadow={false} modelScale={0.58} />
                        </div>
                        <div className="mh-hero-copy">
                            <h1 id="home-title">Mayuns Games.<span>{slogan}</span></h1>
                            <p>Independent games and tools for game developers.</p>
                            <button className="mh-explore" onClick={explore}>
                                Explore our projects <FiArrowDown aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </section>
                <section id="home-projects" className="mh-work" aria-labelledby="home-work-title">
                    <div className="mh-section-heading">
                        <h2 id="home-work-title">Featured Project</h2>
                        <span className="mh-heading-line" aria-hidden="true" />
                    </div>
                    <Link className="mh-feature" to="/destructible-structure-builder" aria-label="View Destructible Structure Builder">
                        <div className="mh-feature-copy">
                            <img className="mh-dsb-logo" src={dsbLogo} alt="DSB" />
                            <div className="mh-project-identity">
                                <h3>Destructible Structure Builder</h3>
                                <p>Editor toolkit for creating breakable structures in Unity.</p>
                            </div>
                            <span className="mh-feature-link" aria-hidden="true">
                                View project <FiArrowUpRight aria-hidden="true" />
                            </span>
                        </div>
                        <div className="mh-feature-media">
                            <img src={dsbCollapse} alt="A brick structure crumbling into individual pieces in Destructible Structure Builder" loading="lazy" />
                        </div>
                    </Link>
                    <div className="mh-section-heading mh-games-heading">
                        <h2>More Projects</h2>
                        <span className="mh-heading-line" aria-hidden="true" />
                    </div>
                    <div className="mh-games">
                        {projects.map((project, index) => (
                            <article className="mh-game" key={project.path}>
                                <Link className="mh-game-image" to={project.path} aria-label={`View ${project.title}`}>
                                    <img src={project.image} alt={`${project.title} cover`} loading="lazy" />
                                    <span className="mh-platform">{index === 0 && <FaSteam aria-hidden="true" />}{project.platform}</span>
                                    <span className="mh-round-arrow"><FiArrowUpRight aria-hidden="true" /></span>
                                </Link>
                                <div className="mh-game-copy">
                                    <span className="mh-game-meta">{project.category}</span>
                                    <h3><Link to={project.path}>{project.title}</Link></h3>
                                    <p>{project.description}</p>
                                    <Link className="mh-text-link" to={project.path}>
                                        Product Page <FiArrowUpRight aria-hidden="true" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
