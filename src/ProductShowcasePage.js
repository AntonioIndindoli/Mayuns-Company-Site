import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    FiChevronLeft,
    FiChevronRight,
    FiDownload,
    FiExternalLink,
    FiFileText,
    FiMaximize,
    FiMinimize,
} from "react-icons/fi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Showcase.css";

const ProductShowcasePage = ({
    label,
    title,
    descriptionLabel,
    description,
    heroImage,
    keyStats,
    actions,
    featureGalleryItems = [],
}) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const thumbnailButtonRefs = useRef([]);
    const thumbnailRowRef = useRef(null);
    const mainPreviewRef = useRef(null);

    const hasFeatureGallery = featureGalleryItems.length > 0;

    const activeFeature = useMemo(() => {
        if (!hasFeatureGallery) {
            return null;
        }

        return featureGalleryItems[activeImageIndex];
    }, [activeImageIndex, featureGalleryItems, hasFeatureGallery]);

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
        if (isAutoScrollPaused || !hasFeatureGallery) {
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
    }, [featureGalleryItems, hasFeatureGallery, isAutoScrollPaused]);

    useEffect(() => {
        const thumbnailRow = thumbnailRowRef.current;
        const activeThumbnailButton = thumbnailButtonRefs.current[activeImageIndex];

        if (!thumbnailRow || !activeThumbnailButton) {
            return;
        }

        const rowBounds = thumbnailRow.getBoundingClientRect();
        const thumbnailBounds = activeThumbnailButton.getBoundingClientRect();
        const thumbnailLeft = thumbnailBounds.left - rowBounds.left + thumbnailRow.scrollLeft;
        const centeredScrollLeft = thumbnailLeft - (thumbnailRow.clientWidth / 2) + (activeThumbnailButton.clientWidth / 2);

        thumbnailRow.scrollTo({
            left: Math.max(0, centeredScrollLeft),
            behavior: "smooth",
        });
    }, [activeImageIndex]);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(document.fullscreenElement === mainPreviewRef.current);
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    const toggleFullscreen = async () => {
        const mainPreview = mainPreviewRef.current;

        if (!mainPreview) {
            return;
        }

        try {
            if (document.fullscreenElement === mainPreview) {
                await document.exitFullscreen();
                return;
            }

            await mainPreview.requestFullscreen();
        } catch (error) {
            setIsFullscreen(false);
        }
    };

    const heroBackgroundStyle = {
        backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.8) 55%, rgba(0, 0, 0, 0.7) 85%, rgba(0, 0, 0, 0.6) 100%), url(${heroImage})`,
    };

    const getActionIcon = (iconName) => {
        if (iconName === "download") {
            return <FiDownload className="showcase-icon" />;
        }

        if (iconName === "file") {
            return <FiFileText className="showcase-icon" />;
        }

        return <FiExternalLink className="showcase-icon" />;
    };

    return (
        <div className="LandingPage01 showcase-page">
            <Header />

            <main className="showcase-content">
                <section className="showcase-hero" style={heroBackgroundStyle}>
                    <div className="showcase-hero-copy">
                        <p className="showcase-label">{label}</p>
                        <h1>{title}</h1>
                        <div className="showcase-hero-actions">
                            {actions.map((action) => (
                                action.type === "link" ? (
                                    <Link key={action.text} className={`showcase-button ${action.variant}`} to={action.href}>
                                        {action.text} {getActionIcon(action.icon)}
                                    </Link>
                                ) : (
                                    <a
                                        key={action.text}
                                        className={`showcase-button ${action.variant}`}
                                        href={action.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {action.text} {getActionIcon(action.icon)}
                                    </a>
                                )
                            ))}
                        </div>

                        <ul className="showcase-key-stats">
                            {keyStats.map((stat) => (
                                <li key={stat.label}>
                                    <span>{stat.label}</span>
                                    <strong>{stat.value}</strong>
                                </li>
                            ))}
                        </ul>

                        <div className="showcase-description-area">
                            <p className="showcase-description-area">{description}</p>
                        </div>

                    </div>
                </section>

                {hasFeatureGallery && activeFeature && (
                    <section>
                        <div className="showcase-container">
                            <div
                                className="showcase-store-gallery"
                                aria-label="Feature image gallery"
                                onMouseEnter={() => setIsAutoScrollPaused(true)}
                                onMouseLeave={() => setIsAutoScrollPaused(false)}
                            >
                                <div className="showcase-store-main-preview" ref={mainPreviewRef}>
                                    <button type="button" className="showcase-gallery-nav previous" onClick={showPreviousImage} aria-label="Show previous screenshot">
                                        <FiChevronLeft />
                                    </button>

                                    <button
                                        type="button"
                                        className="showcase-gallery-fullscreen"
                                        onClick={toggleFullscreen}
                                        aria-label={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
                                    >
                                        {isFullscreen ? <FiMinimize /> : <FiMaximize />}
                                    </button>

                                    <img src={activeFeature.image} alt={activeFeature.title} className="showcase-store-main-image" />

                                    <div className="showcase-store-feature-copy">
                                        <h3>{activeFeature.title}</h3>
                                        <p>{activeFeature.description}</p>
                                    </div>

                                    <button type="button" className="showcase-gallery-nav next" onClick={showNextImage} aria-label="Show next screenshot">
                                        <FiChevronRight />
                                    </button>
                                </div>

                                <div className="showcase-store-thumbnail-row" role="tablist" aria-label="Feature thumbnails" ref={thumbnailRowRef}>
                                    {featureGalleryItems.map((feature, index) => (
                                        <button
                                            type="button"
                                            key={feature.title}
                                            className={`showcase-thumbnail-button ${index === activeImageIndex ? "is-active" : ""}`}
                                            onClick={() => setActiveImageIndex(index)}
                                            aria-label={`View ${feature.title}`}
                                            aria-selected={index === activeImageIndex}
                                            role="tab"
                                            ref={(element) => {
                                                thumbnailButtonRefs.current[index] = element;
                                            }}
                                        >
                                            <img src={feature.image} alt={feature.title} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default ProductShowcasePage;
