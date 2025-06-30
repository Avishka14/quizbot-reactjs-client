import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AccountStyle.css";
import LoginRequire from "../Pages/LoginRequire";
import Cookies from "js-cookie";
import LoadingPage from "../Pages/LoadingPage";
import ArticleForm from "./ArticleForm/ArticleForm";

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
];

function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const userId = Cookies.get("userid");  //  npm install js-cookie

    if (!userId) {
      setUser(null);
      setLoading(false);
      return;
    }

    axios
      .get(`http://localhost:8080/api/v1/users/getusers/${userId}`) 
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error("Error fetching user by ID", err);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingPage/>;

  if (!user) return <LoginRequire />;

  return (
    <>
      <Header />
      <main className="account-page">
        <section className="profile-section">
          <div className="container profile-card">
            <div className="profile-info">
              <h3 className="profile-name">{user?.name}</h3>
              <p className="profile-role">E-Mail : {user?.email}</p>
              <p className="profile-role">Joined Date : {user?.joined_date}</p>
            </div>
          </div>
        </section>


           <ArticleForm/>

        

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
}

export default Account;
