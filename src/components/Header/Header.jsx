import React from "react";
import './Header.css';

function Header() {
  return (
    <div className="header-main-con">
      <nav>
        <div className="head-logo">
          <h2>QuizBot</h2>
        </div>

        <div className="list">
          <ul className="list-ul">
            <li>Home</li>
            <li>Questions</li>
            <li>History</li>
            <li>News</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
