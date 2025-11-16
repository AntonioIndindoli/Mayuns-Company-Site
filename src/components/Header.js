import React from "react";
import "../LandingPage.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-bar-wrapper">
      <div className="header-bar">
        <header className="header-items">
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
            <div className="header-items-bar">

            </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
