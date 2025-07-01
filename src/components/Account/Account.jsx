import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AccountStyle.css";
import LoginRequire from "../Pages/LoginRequire";
import Cookies from "js-cookie";
import LoadingPage from "../Pages/LoadingPage";
import ArticleForm from "./ArticleForm/ArticleForm";
import ArticleCard from "./Articles/ArticleCard";
import { Link } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const userId = Cookies.get("userid");

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          `http://localhost:8080/api/v1/users/getusers/${userId}`
        );
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user by ID:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  // Fetch user articles
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/v1/blog/getblog/${userId}`
        );
        setData(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching articles:", err);
        if (err.response && err.response.status === 404) {
          setData([]); // treat it like no blogs
        }
      }
    };

    if (userId) {
      fetchArticles();
    }
  }, [userId]);

  if (loading) return <LoadingPage />;

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

        <ArticleForm />

        <section className="articles-section">
          <div className="container">
            <h4 className="section-subtitle">Your Articles</h4>

            {data.length === 0 ? (
              <p>No articles found.</p>
            ) : (
              <div className="articles-grid">
                {data.map((article) => (
                  <ArticleCard data={article} key={article.id}>
                    <Link to={`/editarticle/${article.id}`} state={{ article }}>
                      <SettingsOutlinedIcon />
                    </Link>
                  </ArticleCard>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Account;
