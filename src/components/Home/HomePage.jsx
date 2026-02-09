import React, { useEffect, useState } from "react";
import './HomeStyle.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import QuizCom from "./QuizCom";
import DescribeCom from "./DescribeCom";
import LoginRequire from "../Pages/LoginRequire";
import * as authServices from "../../services/authServices";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadAdminData();
  }, []);

  const loadAdminData = async () => {
    try {
      const userRes = await authServices.getUserByToken();
      setUser(userRes.data);
    } catch (err) {
      console.error("Auth error:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>; 

  if (!user) return <LoginRequire />;

  return (
    <>
      <Header />
      <div className="quiz-home">
        <header className="header">
          <h1><i className="fas fa-brain"></i> AI Quiz Master</h1>
          <p>Challenge your knowledge with AI-generated quizzes</p>
        </header>

        <QuizCom />
        <DescribeCom />

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
