import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./DestructibleStructureBuilder.css";

const ProductShowcasePage = ({
    label,
    title,
    descriptionLabel,
    description,
    heroImage,
    keyStats,
    actions,
    featureGalleryItems,
}) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

    const activeFeature = useMemo(() => featureGalleryItems[activeImageIndex], [activeImageIndex, featureGalleryItems]);

    const showPreviousImage = () => {
        setActiveImageIndex((previousIndex) => {
            if (previousIndex === 0) {
                return featureGalleryItems.length - 1;
            }

            return previousIndex - 1;
        });
    };

    const showNextImage = () => {
        setActiveImageIndex((previousIndex) => {
            if (previousIndex === featureGalleryItems.length - 1) {
                return 0;
            }

            return previousIndex + 1;
        });
    };

    useEffect(() => {
        if (isAutoScrollPaused) {
            return undefined;
        }

        const autoScrollInterval = window.setInterval(() => {
            setActiveImageIndex((previousIndex) => {
                if (previousIndex === featureGalleryItems.length - 1) {
                    return 0;
                }

                return previousIndex + 1;
            });
        }, 5000);

        return () => {
            window.clearInterval(autoScrollInterval);
        };
    }, [featureGalleryItems, isAutoScrollPaused]);

    const heroBackgroundStyle = {
        backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, .85) 30%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0) 100%), url(${heroImage})`,
    };

    return (
        <div className="LandingPage01 dsb-page">
            <Header />

            <main className="dsb-content">
                <section className="dsb-hero" style={heroBackgroundStyle}>
                    <div className="dsb-hero-copy">
                        <p className="dsb-label">{label}</p>
                        <h1>{title}</h1>
                        <div className="dsb-hero-actions">
                            {actions.map((action) => (
                                action.type === "link" ? (
                                    <Link key={action.text} className={`dsb-button ${action.variant}`} to={action.href}>
                                        {action.text} <FiExternalLink className="dsb-icon" />
                                    </Link>
                                ) : (
                                    <a
                                        key={action.text}
                                        className={`dsb-button ${action.variant}`}
                                        href={action.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {action.text} <FiExternalLink className="dsb-icon" />
                                    </a>
                                )
                            ))}
                        </div>

                        <ul className="dsb-key-stats">
                            {keyStats.map((stat) => (
                                <li key={stat.label}>
                                    <span>{stat.label}</span>
                                    <strong>{stat.value}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="dsb-description">
                    <div className="dsb-description-area">
                        <p className="dsb-description-label">{descriptionLabel}</p>
                        <p>{description}</p>
                    </div>
                </section>

                <section>
                    <div className="dsb-container">
                        <div
                            className="dsb-store-gallery"
                            aria-label="Feature image gallery"
                            onMouseEnter={() => setIsAutoScrollPaused(true)}
                            onMouseLeave={() => setIsAutoScrollPaused(false)}
                        >
                            <div className="dsb-store-main-preview">
                                <button type="button" className="dsb-gallery-nav previous" onClick={showPreviousImage} aria-label="Show previous screenshot">
                                    <FiChevronLeft />
                                </button>

                                <img src={activeFeature.image} alt={activeFeature.title} className="dsb-store-main-image" />

                                <div className="dsb-store-feature-copy">
                                    <h3>{activeFeature.title}</h3>
                                    <p>{activeFeature.description}</p>
                                </div>

                                <button type="button" className="dsb-gallery-nav next" onClick={showNextImage} aria-label="Show next screenshot">
                                    <FiChevronRight />
                                </button>
                            </div>

                            <div className="dsb-store-thumbnail-row" role="tablist" aria-label="Feature thumbnails">
                                {featureGalleryItems.map((feature, index) => (
                                    <button
                                        type="button"
                                        key={feature.title}
                                        className={`dsb-thumbnail-button ${index === activeImageIndex ? "is-active" : ""}`}
                                        onClick={() => setActiveImageIndex(index)}
                                        aria-label={`View ${feature.title}`}
                                        aria-selected={index === activeImageIndex}
                                        role="tab"
                                    >
                                        <img src={feature.image} alt={feature.title} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProductShowcasePage;
