import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  const [isHamburgerOpen, setIsHamburgerMenu] = useState(false);

  function toggleHamburger() {
    setIsHamburgerMenu((prevState) => !prevState);
    console.log(isHamburgerOpen);
  }

  function handleCloseMenu() {
    setIsHamburgerMenu((prevState) => false);
  }

  return (
    <div className="Header">
      <div className="header-hamburger">
        <img
          className="header-hamburgerIcon"
          onClick={toggleHamburger}
          src="images/hamburger.png"
          alt="hamburger"
        ></img>
        
        {isHamburgerOpen && (
          <div className="header-hamburgerMenu">
            <nav>
              <Link onClick={handleCloseMenu} to="destinations">
                Destinations
              </Link>
              <Link onClick={handleCloseMenu} to="tours">
                Tours
              </Link>
              <Link onClick={handleCloseMenu} to="blogs">
                Blogs
              </Link>
              <Link onClick={handleCloseMenu} to="about">
                About Us
              </Link>
            </nav>
          </div>
        )}
      </div>

      <div className="header-nav-left">
        <img className="header-icon" src="images/airplane.png" alt="" />
        <Link onClick={handleCloseMenu} to=".">
          TravelSpot.Co
        </Link>
      </div>

      <div className="header-nav-mid">
        <Link to="destinations">Destinations</Link>
        <Link to="tours">Tours</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="about">About Us</Link>
      </div>

      <div className="header-button-wrapper">
        <Link to="signup">
          <button id="header-login-btn">Log In</button>
        </Link>
        <Link to="signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
