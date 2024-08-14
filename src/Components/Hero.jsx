import React from "react";
import "./Hero.css";

export default function Hero(props) {
  return (
    <div className="Hero">
      <div>
        <h1>Discover and enjoy your new places and experiences</h1>
        <p>Explore destinations, places, and unforgettable experiences</p>
      </div>

      <div className="hero-search">
        <div className="hero-input-wrapper">
          <img
            className="Hero-icon"
            src="/images/locationwhite.png"
            alt=""
          ></img>
          <input placeholder="Where are you going?"></input>
        </div>

        <div className="hero-btn-wrapper">
          <button>
            <img
              className="Hero-icon"
              src="/images/searchwhite.png"
              alt=""
            ></img>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
