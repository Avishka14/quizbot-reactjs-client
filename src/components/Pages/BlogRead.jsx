import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArticleNotFound from "./ArticleNotFound";
import "./PagesStyle.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function BlogRead() {
  const { state } = useLocation();
  const { article } = state || {};

  if (!article) {
    return (
      <div>
        <ArticleNotFound />{" "}
      </div>
    );
  }

  return (
    <>
      <Header />

      <div>
        <div className="blog-page-thumb-wrapper">
          <img
            src={`http://localhost:8080${article.coverImage}`}
            className="img-blog-thumb"
          />
        </div>

        <div className="blog-read-wrapper" key={article.id}>
          <div className="blog-page-author">
            <span className="author"></span>
            <span className="date"></span>
          </div>

          <div className="container-blog-div">
            <h1 className="blog-title">{article.title}</h1>

            <p className="blog-description">{article.description}</p>
          </div>

          <div className="blog-action-buttons">
            <button className="thumb-btn-blog">👍 Thumbs Up</button>
            <button className="share-btn-blog">🔗 Share</button>

            <Link to={"/blog"} className="back-btn">
              Go Back
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BlogRead;
