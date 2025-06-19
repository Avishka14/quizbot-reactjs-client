import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <h2>QuizBot</h2>
      </div>

      <div className="nav-link">
        <a href="#">Home</a>
        <a href="#">Questions</a>
        <a href="#">Blog</a>
        <a href="#">About</a>
      </div>
    </div>
  );
}

export default Header;
