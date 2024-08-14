import React from "react";
import "./ToursSection.css";

export default function ToursCard(props) {
  return (
    <div className="toursCard">
      <div className="toursCard-left">
        <h3>{props.tourname}</h3>
        <h4>
          From: <span className="toursCost-style">{props.cost}</span>
        </h4>
      </div>

      <div className="toursCard-mid">
        <p className="toursCard-description">{props.tourdescription}</p>

        <div className="toursCard-reviews">
          <div className="toursCard-review-stars">
            <img
              className="explore-card-header-icon"
              src="images/star.png"
              alt=""
            ></img>
            <img
              className="explore-card-header-icon"
              src="images/star.png"
              alt=""
            ></img>
            <img
              className="explore-card-header-icon"
              src="images/star.png"
              alt=""
            ></img>
            <img
              className="explore-card-header-icon"
              src="images/star.png"
              alt=""
            ></img>
            <img
              className="explore-card-header-icon"
              src="images/star.png"
              alt=""
            ></img>
          </div>
          <div>
            <p>{props.reviews}</p>
          </div>
        </div>

        <div className="toursCard-time">
          <img
            className="explore-card-header-icon"
            src="images/wall-clock.png"
            alt=""
          ></img>
          <p>{props.hours}</p>
        </div>
      </div>

      <div className="toursCard-image-container">
        <a href={props.tourLink}>
          <img className="toursCard-image" src={props.image} alt=""></img>
        </a>
      </div>
    </div>
  );
}
