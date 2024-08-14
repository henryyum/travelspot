import React, { useRef, useState, useEffect } from "react";
import FactsComponent from "../FactsComponent";
import ValuesComponent from "../ValuesComponent";
import SwiperNavBtn from "../SwiperNavBtn";
import "./AboutPage.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function AboutPage() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const updateSlidesPerView = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      setSlidesPerView(1);
    } else if (window.matchMedia("(max-width: 1330px)").matches) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className="aboutPage">
      <div className="about-us-hero">
        <h1>About Us</h1>
        <p>For explorers everywhere</p>
      </div>

      <div className="about-us-main">
        <h1>About Us</h1>
        <div className="about-us-main-paragraph-wrapper">
          <p>
            We believe that travel is for everyone. It helps us learn about
            ourselves and the world around us.
          </p>

          <p>
            Our goal is to help more people from more backgrounds experience the
            joy of exploration. Because we believe this builds a kinder, more
            inclusive, more open-minded world.
          </p>

          <p>
            Travel.Co offers a variety of travel and tour options that make it
            possible for people to connect with communities around the world in
            an authentic way.
          </p>
        </div>
      </div>

      <div className="about-us-facts-container">
        <div className="about-us-facts">
          <h1 className="about-us-h1">Fast Facts</h1>

          <div className="about-us-facts-wrapper">
            <FactsComponent
              stats="10k+"
              description="Active users on Travel.Co"
              date="as of June 30th 2023"
            />
            <FactsComponent
              stats="4.5+"
              description="Travel Rating"
              date="as of June 6th 2023"
            />
            <FactsComponent
              stats="Trending"
              description="Blogs and Articles"
              date="as of January 24th 2023"
            />
            <FactsComponent
              stats="5k+"
              description="Positive Testimonies"
              date="as of March 12th 2023"
            />
            <FactsComponent
              stats="Cheapest"
              description="Flights and Tours"
              date="since April 4th 2023"
            />
            <FactsComponent
              stats="50k+"
              description="Followers on Instagram"
              date="as of December 18th 2022"
            />
            <FactsComponent
              stats="Most Popular"
              description="Tours and Adventures"
              date="as of August 8th 2023"
            />
            <FactsComponent
              stats=">12"
              description="Destinations to choose from"
              date="as of 10th October 2023"
            />
          </div>
        </div>
      </div>

      <div className="about-us-values">
        <h1>At Travel.Co our core values guides our evolution:</h1>
        <div className="about-us-values-wrapper">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <ValuesComponent message="We pursue a vision of the world in which all are welcome. We believe travel can help foster the connection and understanding that makes meaningful moments possible." />
            </SwiperSlide>
            <SwiperSlide>
              <ValuesComponent message="We think everyone deserves to experience the joy of travel. Whatever your background or needs and no matter where you want to go: we are here to empower your journey." />
            </SwiperSlide>
            <SwiperSlide>
              <ValuesComponent message="We know travel has a social, economic and environmental consequences. We must equip travelers with the knowledge to make informed choices about their impact, and inspire them to travel with generosity." />
            </SwiperSlide>
            <SwiperSlide>
              <ValuesComponent message="We believe travel is ultimately about joy and delight. And the planning process should be enjoyable, too, filled with serendipity and connection wherever the path leads us." />
            </SwiperSlide>
            <SwiperSlide>
              <ValuesComponent message="We believe travel is ultimately about joy and delight. And the planning process should be that too." />
            </SwiperSlide>

            <SwiperNavBtn />
          </Swiper>
        </div>
      </div>
    </div>
  );
}
