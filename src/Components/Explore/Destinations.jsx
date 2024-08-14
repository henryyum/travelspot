import React from "react";
import ExploreCard from "./ExploreCard";
import featuredCards from "../../Data/ExploreData";
import "./Destinations.css";

export default function Destinations() {
  return (
    <div className="destinations">
      <div className="destination-header">
        <div className="destination-wrapper">
          <div>
            <h1>Where Do You Want To Explore?</h1>
          </div>

          <div className="destination-paragraph">
            <p>Explore points of interest in various places around the world</p>
          </div>
        </div>
      </div>

      <div className="destination-cards">
        {featuredCards.map((card) => (
          <ExploreCard
            exploreLink={card.link}
            name={card.name}
            image={card.image}
            description={card.description}
            price={card.price}
            rating={card.rating}
            trip={card.trip}
          />
        ))}
      </div>
    </div>
  );
}
