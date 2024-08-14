import React from "react";
import "./ExploreSection.css";

export default function ExploreCard(props) {
  return (
    <div className="explore-card">
      <div className="explore-image-container">
        <a href={props.exploreLink}>
          <img className="explore-image" src={props.image} alt=""></img>
        </a>
      </div>

      <div className="explore-card-details">
        <div className="explore-card-header">
          <h4>{props.name}</h4>
          <div className="explore-card-header-rating">
            <img
              className="explore-card-header-icon"
              src="images/star.png"
              alt=""
            ></img>
            <p>{props.rating}</p>
          </div>
        </div>

        <div>
          <p>{props.description}</p>
        </div>

        <div className="explore-card-price">
          <h4>{props.price}</h4>
          <a href={props.trip}>
            <button>Start Trip</button>
          </a>
        </div>
      </div>
    </div>
  );
}
