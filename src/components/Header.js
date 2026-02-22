import React, { useEffect, useRef, useState } from "react";
import "../LandingPage.css";
import { useNavigate } from "react-router-dom";

const Header = ({ leftAddon = null }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const menuLinks = [
    { label: "About Us", path: "/about-us" },
    { label: "Support Center", path: "/support-center" },
    { label: "Legal", path: "/legal" },
  ];

  const handleMenuNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="header-bar-wrapper">
      <div className="header-bar">
        <header className="header-items">
          <div className="header-left-stack">
            {leftAddon}
            <button
              className="nav-button"
              type="button"
              onClick={() => navigate("/")}
            >
              <img
                src="/logo512.png"
                alt="Mayuns logo"
                className="nav-button-logo"
              />
              Mayuns.com
            </button>
          </div>
          <div className="header-items-bar" ref={menuRef}>
            <button
              type="button"
              className="hamburger-button"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              ☰
            </button>

            {isMenuOpen && (
              <div className="header-dropdown-menu">
                {menuLinks.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    className="header-dropdown-item"
                    onClick={() => handleMenuNavigation(item.path)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
