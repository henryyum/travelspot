import React from "react";
import "./Newsletter.css";

export default function Newsletter(props) {
  return (
    <div className="newsletter">
      <div className="newsletter-header">
        <h1>Your journey starts here</h1>
        <h4>Stay up to date with the latest information from us</h4>
      </div>

      <div className="email-wrapper">
        <input placeholder="Enter your email"></input>
        <button className="main-btn newsletter-btn">Join our newsletter</button>
      </div>
    </div>
  );
}
