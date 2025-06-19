import React from "react";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Style.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="main-container-landing">
      <div className="heading-con">
        <h2>QuizBot</h2>
      </div>

      <div className="section-one-land">
        <h1>Welcome to QuizBot</h1>
        <h2>Challenge Your Mind, Expand Your Knowledge !</h2>
      </div>

      <div className="section-two-land">
        <h2>👋 Ready to Test Your Skills?</h2>
        <p>
          {" "}
          Dive into our vast collection of interactive quizzes covering
          everything from science and history to pop culture and sports. Whether
          you're a trivia master or just starting your learning journey, QuizBot
          adapts to your level and helps you grow.{" "}
        </p>

        <p>
          Join thousands of users who are already expanding their knowledge and
          having fun while doing it!
        </p>
      </div>

      <div className="section-three-land">
        <Link to="/home">
          <button>Get Started 🚀</button>
        </Link>

        <button>About App 🌿</button>
      </div>

      <div className="section-four-land">
        <h2>Developed By Avishka Chamod | &copy; 2025</h2>
        <a href="mailto:avishkachamod14@gmail.com">
          <AlternateEmailRoundedIcon />
        </a>

        <a href="https://github.com/Avishka14">
          <GitHubIcon />
        </a>

        <a href="https://www.linkedin.com/in/avishka-chamod-hemachandra-04641227b/">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
