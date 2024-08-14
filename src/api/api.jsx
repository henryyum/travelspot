import BlogPosts from "../Data/BlogsAndArticlesData";
import ExploreData from "../Data/ExploreData";
import TestimonyData from "../Data/TestimonyData";
import ToursData from "../Data/ToursData";

const endpoints = {
  "/blog-posts": BlogPosts,
  "/explore": ExploreData,
  "/testimonies": TestimonyData,
  "/tours": ToursData,
};

export const get = async (endpoint) => {
  if (endpoints[endpoint]) {
    return endpoints[endpoint];
  } else {
    return {
      status: 404,
      message: "Not found",
    };
  }
};

console.log(get("/tours"))