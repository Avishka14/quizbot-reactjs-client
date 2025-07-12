import React from "react";
import './HomeStyle.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import QuizCom from "./QuizCom";
import DescribeCom from "./DescribeCom";


function HomePage() {

  return (
    <>
      <Header />
      <div className="quiz-home">
        <header className="header">
          <h1><i className="fas fa-brain"></i> AI Quiz Master</h1>
          <p>Challenge your knowledge with AI-generated quizzes</p>
        </header>
  
        <QuizCom/>
        <DescribeCom/>
      

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
