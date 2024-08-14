import React from "react";
import "./Testimonies.css";

export default function Testimonies(props) {
  return (
    <div className="testimony">
      <div className="testimony-section">
        <h1 className="testimony-h1-800px">{props.testimonyName}</h1>
        <div className="testimony-section-left">
          <h1 className="testimony-h1">{props.testimonyName}</h1>
          <h3>{props.testimonyDescription}</h3>
          <h4>
            {" "}
            <span className="bold-text">{props.testimonyPerson}</span>
            {props.testimonyDate}
          </h4>
        </div>

        <div className="testimony-section-right">
          <img
            className="testimony-image"
            src={props.testimonyImage}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}
