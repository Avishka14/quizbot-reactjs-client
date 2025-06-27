import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AccountStyle.css";
import { useLocation } from "react-router-dom";
import LoginRequire from "../Pages/LoginRequire";

const articles = [
  {
    id: 1,
    title: "React Basics for Beginners",
    image: "https://source.unsplash.com/400x200/?reactjs,code",
    isDraft: false,
  },
  {
    id: 2,
    title: "Draft: Learning CSS Grid",
    image: "https://source.unsplash.com/400x200/?css,grid",
    isDraft: true,
  },
  // Add more articles here
];

function Account() {
  const location = useLocation();
  const form = location.state?.response;

  if (form) {
    return (
      <>
        <Header />
        <main className="account-page">
          <section className="profile-section">
            <div className="container profile-card">
              <div className="profile-info">
                <h3 className="profile-name">{form?.name}</h3>
                <p className="profile-role">E-Mail : {form?.email}</p>
                <p className="profile-role">Joined Date : {form?.joined_date} </p>
                <div className="profile-stats"></div>
              </div>
            </div>
          </section>

          <section className="article-form-section">
            <div className="container form-card">
              <h2 className="section-title">Share Your Knowledge</h2>
              <form className="article-form">
                <input
                  type="text"
                  placeholder="Article Title"
                  className="form-input"
                />
                <select className="form-input">
                  <option value="">Select Category</option>
                  <option value="ai">AI & Education</option>
                  <option value="development">Development</option>
                  <option value="ml">Machine Learning</option>
                  <option value="ux">UX Design</option>
                  <option value="data">Data Science</option>
                </select>
                <textarea
                  placeholder="Write your article content..."
                  className="form-textarea"
                ></textarea>
                <input
                  type="text"
                  placeholder="Featured Image URL (optional)"
                  className="form-input"
                />
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    Publish Article
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Save Draft
                  </button>
                </div>
              </form>
            </div>
          </section>

          <section className="articles-section">
            <div className="container">
              <h4 className="section-subtitle">Your Articles</h4>
              <div className="articles-grid">
                {articles.map(({ id, title, image, isDraft }) => (
                  <div
                    key={id}
                    className={`article-card ${isDraft ? "draft" : ""}`}
                  >
                    <img
                      src={image}
                      alt={title}
                      className="article-image"
                      loading="lazy"
                    />
                    <div className="article-content">
                      <h5 className="article-title">{title}</h5>
                      <div className="crud-actions">
                        <button className="crud-btn view" title="View">
                          <i className="fas fa-eye">View</i>
                        </button>
                        <button className="crud-btn edit" title="Edit">
                          <i className="fas fa-edit">Edit</i>
                        </button>
                        <button className="crud-btn delete" title="Delete">
                          <i className="fas fa-trash-alt">Delete</i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  } else {
    return(
        <>
         <LoginRequire/>
        </>
    );
  }
}

export default Account;
