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

function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = Cookies.get("userid"); //  npm install js-cookie

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

  if (loading) return <LoadingPage />;

  if (!user) return <LoginRequire />;

 const data = {
    id : "1",
    thumbnail : "https://via.placeholder.com/150",
    title : "React Description Example",
    category : "Web Dev",
    description :
      "Lorem ipsum dolor sit amet,m dm dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quisolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris...",
    };

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

            <ArticleCard data={data} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Account;
