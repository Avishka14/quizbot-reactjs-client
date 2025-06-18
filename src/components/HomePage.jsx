import React from "react";
import "./Style.css";
function HomePage() {
  return (
    <div className="main-container-home">
      <div className="home-header">
        <header>
          <h2>QuizBot</h2>
        </header>
      </div>

      <div className="home-body-section">
        <div className="body-heading">
          <h1>Welcome to QuizBot</h1>
          <h2>Challenge Your Mind, Expand Your Knowledge</h2>
        </div>

        <div className="body-details">
          <h1> 👋 Ready to Test Your Skills? </h1>
          <p>
            Dive into our vast collection of interactive quizzes covering
            everything from science and history to pop culture and sports.
            Whether you're a trivia master or just starting your learning
            journey, QuizBot adapts to your level and helps you grow.
          </p>
          <h2>Join thousands of users who are already expanding their knowledge and having fun while doing it!</h2>
        </div>

        <div className="home-button">
            <button> Get Started 🚀 </button>
            <button>About Us</button>
        </div>

        <div className="home-footer">
             <p>Developed by Avishka Chamod</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
