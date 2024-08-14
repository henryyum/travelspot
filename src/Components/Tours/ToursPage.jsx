import React from "react";
import ToursCard from "./ToursCard";
import featuredTours from "../../Data/ToursData";
import "./ToursPage.css";

export default function ToursPage() {
  return (
    <>
      <div className="toursPage-header">
        <div>
          <h1>Most popular tours</h1>
        </div>

        <div>
          <p>
            Make unforgettable memories with exclusive tours, VIP access, small
            groups, and perfectly
          </p>
        </div>
      </div>

      <div className="toursPage-cards">
        {featuredTours.map((tour) => (
          <ToursCard
            tourLink={tour.tourLink}
            image={tour.image}
            cost={tour.cost}
            tourname={tour.tourname}
            tourdescription={tour.tourdescription}
            reviews={tour.reviews}
            hours={tour.hours}
          />
        ))}
      </div>
    </>
  );
}
