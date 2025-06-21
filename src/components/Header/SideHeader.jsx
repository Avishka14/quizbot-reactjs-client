import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';


function SideHeader() {
  return (
    <div className="side-div-container"> 
       <div className="header-logo-side">
        <Link to="/">
          <h2>QuizBot</h2>
        </Link>
      </div>

      <div className="nav-link-side">
        <Link to="/home">
          <span>Home</span>
        </Link>

        <Link to="/history">
          <span>History</span>
        </Link>

        <Link to="/blog">
          <span>Blog</span>
        </Link>

        <Link to="/about">
          <span>About</span>
        </Link>

        <Link to="/account">
          <span>Account</span>
        </Link>
      </div>
    </div>
  )
}

export default SideHeader