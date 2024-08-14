import React from "react";
import featuredBlogsAndArticles from "../../Data/BlogsAndArticlesData";
import BlogArticleCard from "./BlogArticleCard";
import "./BlogsPage.css";

export default function BlogsPage() {
  return (
    <>
      <div className="blogsPage-header">
        <h1>Blogs and Articles</h1>
        <p>Read up on the best guides and current travel trends</p>
      </div>

      <div className="blogsPage-wrapper">
        {featuredBlogsAndArticles.map((blog) => (
          <BlogArticleCard
            blogLink={blog.blogLink}
            blogimage={blog.blogimage}
            date={blog.date}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </>
  );
}
