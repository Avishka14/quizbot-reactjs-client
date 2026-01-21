import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AccountStyle.css";
import LoginRequire from "../Pages/LoginRequire";
import LoadingPage from "../Pages/LoadingPage";
import ArticleForm from "./ArticleForm/ArticleForm";
import ArticleCard from "./Articles/ArticleCard";
import { Link } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import * as authServices from "../../services/authServices";

function Account() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAccountData = async () => {
      try {
        const userRes = await authServices.getUserByToken();
        const blogRes = await authServices.getblogsbyTOken();

        setUser(userRes.data);
        setData(blogRes.data);
      } catch (err) {
        console.error("Auth error:", err);
        setUser(null);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    loadAccountData();
  }, []);

  if (loading) return <LoadingPage />;
  if (!user) return <LoginRequire />;

  return (
    <>
      <Header />
      <main className="account-page">
        <section className="profile-section">
          <div className="container profile-card">
            <div className="profile-info">
              <h3 className="profile-name">{user.name}</h3>
              <p className="profile-role">E-Mail : {user.email}</p>
              <p className="profile-role">Joined Date : {user.joined_date}</p>
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
