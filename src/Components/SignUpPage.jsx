import React from "react";
import "./SignUpPage.css";

export default function SignUpPage() {
  return (
    <div className="signup">
      <div className="signup-wrapper">
        <h1>Sign in or create an account</h1>
        <div className="signup-google">
          <img
            className="signup-google-icon"
            src="https://i.pinimg.com/736x/10/4d/91/104d91f71da1b56e29231059d85a1e93.jpg"
            alt=""
          />

          <button className="signup-google-btn">Sign in with Google</button>
        </div>
        <p className="signup-or">or</p>
        <input
          className="signup-input"
          type="email"
          placeholder="Email"
        ></input>
        <button className="signup-btn signup-continue">Continue</button>
        <p>Other ways to sign in</p>
        <div className="signup-icon-wrapper">
          <img
            className="signup-icon-apple"
            src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-preview.jpg"
            alt=""
          />
          <img
            className="signup-icon"
            src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg"
            alt=""
          />
        </div>
        <p>
          By continuing, you have read and agree to our{" "}
          <span className="signup-span">Terms and Conditions</span>,{" "}
          <span className="signup-span">Privacy Statement</span>, and{" "}
          <span className="signup-span">TravelSpot.co Terms & Conditions</span>.
        </p>
      </div>
    </div>
  );
}
