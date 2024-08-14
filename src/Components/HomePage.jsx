import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import ExploreHeader from "./Explore/ExploreHeader";
import ExploreCard from "./Explore/ExploreCard";
import Quote from "./Quote";
import ToursHeader from "./Tours/ToursHeader";
import ToursCard from "./Tours/ToursCard";
import BlogHeader from "./Blogs/BlogHeader";
import BlogArticleCard from "./Blogs/BlogArticleCard";
import Testimonies from "./Testimonies";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import SwiperNavBtn from "./SwiperNavBtn";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { get } from "../api/api";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function HomePage() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [featuredTours, setFeaturedTours] = useState([]);
  const [featuredBlogsAndArticles, setFeaturedBlogsAndArticles] = useState([]);
  const [featuredTestimonies, setFeaturedTestimonies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const exploreRes = await get("/explore");
        const exploreData = await exploreRes;
        setFeaturedCards(exploreData);
        
        const tourRes = await get("/tours");
        const tourData = await tourRes;
        setFeaturedTours(tourData);

        const blogRes = await get("/blog-posts");
        const blogData = await blogRes;
        setFeaturedBlogsAndArticles(blogData);

        const testimonyRes = await get("/testimonies");
        const testimonyData = await testimonyRes;
        setFeaturedTestimonies(testimonyData);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="Header-Wrapper Padding">
        <Hero />
      </div>

      <div className="Explorer">
        <ExploreHeader />
        <div className="explore-card-wrapper">
          {featuredCards.slice(0, 6).map((card) => (
            <ExploreCard
              exploreLink={card.link}
              image={card.image}
              name={card.name}
              description={card.description}
              price={card.price}
              rating={card.rating}
              trip={card.trip}
            />
          ))}
        </div>

        <div className="explore-btn-container">
          <Link to="destinations">
            <button onClick={scrollToTop} className="main-btn destination-btn">
              View all destinations
            </button>
          </Link>
        </div>
      </div>

      <div className="Quote-container">
        <Quote />
      </div>

      <div className="Tours-container">
        <ToursHeader />

        <div>
          {featuredTours.slice(0, 3).map((tour) => (
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

          <div className="tours-btn-wrapper">
            <Link to="tours">
              <button onClick={scrollToTop} className="main-btn tours-btn">
                Explore more{" "}
              </button>
            </Link>
          </div>
        </div>

        <div className="blog-wrapper">
          <BlogHeader />
          <div className="blog-card-wrapper">
            {featuredBlogsAndArticles.slice(0, 2).map((blog) => (
              <BlogArticleCard
                blogLink={blog.blogLink}
                blogimage={blog.blogimage}
                date={blog.date}
                title={blog.title}
                description={blog.description}
              />
            ))}
          </div>

          <Link to="blogs">
            <button onClick={scrollToTop} className="main-btn view-btn">
              View more
            </button>
          </Link>
        </div>
      </div>

      <div className="testimony-header">
        <h1 className="testimony-h1">What our Travelers are saying</h1>
        <p>Read up on our most recent testimonials</p>
      </div>

      <div className="testimony-wrapper">
        <Swiper spaceBetween={20} slidesPerView={1}>
          {featuredTestimonies.map((testimony) => (
            <SwiperSlide>
              <Testimonies
                testimonyName={testimony.testimonyName}
                testimonyDescription={testimony.testimonyDescription}
                testimonyPerson={testimony.testimonyPerson}
                testimonyDate={testimony.testimonyDate}
                testimonyImage={testimony.testimonyImage}
              />
            </SwiperSlide>
          ))}

          <SwiperNavBtn />
        </Swiper>
      </div>

      <div>
        <Newsletter />
      </div>
    </div>
  );
}
