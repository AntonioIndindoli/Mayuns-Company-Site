import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import "../LandingPage.css";
import "./Header.css";

function scrollToProjects() {
    document.getElementById("home-projects")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
}

export default function Header() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/" || location.hash !== "#home-projects") return;
        const frame = window.requestAnimationFrame(scrollToProjects);
        return () => window.cancelAnimationFrame(frame);
    }, [location.pathname, location.hash, location.key]);

    return (
        <header className="mh-header">
            <Link className="mh-brand" to="/" aria-label="Mayuns.com home">
                <img src="/logo512.png" alt="" />Mayuns<span>.com</span>
            </Link>
            <nav aria-label="Main navigation">
                <Link to="/#home-projects" onClick={(event) => {
                    if (location.pathname === "/" && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
                        event.preventDefault();
                        scrollToProjects();
                    }
                }}>Projects</Link>
                <Link to="/about-us">About us</Link>
                <Link className="mh-nav-support" to="/support-center">
                    Support <FiArrowUpRight aria-hidden="true" />
                </Link>
            </nav>
        </header>
    );
}
