import React from "react";
import "../LandingPage.css";
import logo from "../images/mayunays.netlogo.png";
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
