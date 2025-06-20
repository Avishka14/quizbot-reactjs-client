import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <h2>QuizBot</h2>
      </div>

      <div className="nav-link">
        <Link to="/home">
        <span>Home</span>
        </Link>
        
        <Link to="/history">
          <span>History</span>
        </Link>

       <Link to="/blog" >
        <span>Blog</span>
       </Link>

        <a href="#">About</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
