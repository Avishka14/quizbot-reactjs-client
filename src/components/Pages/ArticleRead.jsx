import React from "react";
import { useLocation, Link } from "react-router-dom";
import ArticleNotFound from "./ArticleNotFound";
import "./PagesStyle.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ReadPage = () => {
  const { state } = useLocation();
  const { data } = state || {};

  if (!data) {
    return (
      <div>
        <ArticleNotFound />{" "}
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="read-page">
        <article className="read-page-article">
          <header className="read-page-header">
            <h1 className="read-page-title">{data.title}</h1>
            <p className="read-page-category">{data.category}</p>
          </header>

          <div className="read-page-thumbnail-wrapper">
            <img
              src={data.thumbnail}
              alt="Article thumbnail"
              className="read-page-thumbnail"
            />
          </div>

          <section className="read-page-content">
            <p className="read-page-description">{data.description}</p>
          </section>

          <footer className="read-page-footer">
            <p>
              Thanks for reading. Share this article if you found it helpful!
            </p>
          </footer>

          <Link to={"/account"} className="read-btn">
            Go Back
          </Link>
        </article>
      </div>

      <Footer />
    </>
  );
};

export default ReadPage;
