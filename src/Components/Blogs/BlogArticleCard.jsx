import React from "react";
import "./BlogsArticle.css";

export default function BlogArticleCard(props) {
  return (
    <div className="blog-card">
      <a href={props.blogLink}>
        <img className="blog-image" src={props.blogimage} alt=""></img>
      </a>

      <div className="blog-card-info">
        <p>{props.date}</p>
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
      </div>
    </div>
  );
}
