import React from "react";
import { Link } from 'react-router-dom'
import "./Footer.css"

export default function Footer(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
<div className="footer">
  
    <div className="footer-container">


      <div className="footer-top-half">
      

        <div className="footer-topleft">
        <Link onClick={scrollToTop} to=".">TravelSpot.Co</Link>
          <p>The perfect variety of experiences to satisfy anyone looking for an adventure.</p>
          <div className="footer-socials">
            <button>
              <img className="footer-icon" src="images/instagramwhite.png" alt=""></img>
            </button>
            <button>
              <img className="footer-icon facebook-icon" src="https://1.bp.blogspot.com/-nzrqNR1li30/XN0JHcDW05I/AAAAAAAAAl0/Q0IQpLzhfGQT3f8_7Z0QUv7imJjDf8OMQCPcBGAYYCw/s1600/facebook-logo-Black.png" alt=""></img>
            </button>
            <button>
              <img className="footer-icon" src="images/linkedin.png" alt=""></img>
            </button>
            <button>
              <img className="footer-icon" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" alt=""></img>
            </button>
          </div>

        </div>

        <div className="footer-top-midleft">
          <Link onClick={scrollToTop} to="destinations">Destinations</Link>
          <Link onClick={scrollToTop} to="tours">About Us</Link>
          <Link onClick={scrollToTop} to="blogs">Our Guides</Link>
          <Link onClick={scrollToTop} to="about">Blog</Link>
          <a href="a">Contact Us</a>
        </div>

        <div className="footer-top-midright">
          <a href="a">Terms & Conditions</a>
          <a href="a">Terms Of Use</a>
          <a href="a">Health & Safety</a>
          <a href="a">Cancellation Policy</a>
          <a href="a">Privacy Policy</a>
        </div>

        <div className="footer-right">
          <div className="footer-right-wrapper">
            <p>Language</p>
            <div className="footer-input-wrapper">
              <input className="footer-right-input" placeholder="English(United States)"></input>
              <button><img className="footer-input-icon" src="images/arrowdowngrey.png" alt=""></img></button>
            </div>
          </div>

          <div className="footer-right-wrapper">
            <p>Currency</p>
            <div className="footer-input-wrapper">
              <input className="footer-right-input" placeholder="U.S Dollar (US$)"></input>
              <button><img className="footer-input-icon" src="images/arrowdowngrey.png" alt=""></img></button>
            </div>
          </div>
        </div>

      </div>


      <div className="footer-copyright">
        <p>© Copyright 2023. Made by Henry Yum.</p>
      </div>


    </div>
    </div>
  );
}
