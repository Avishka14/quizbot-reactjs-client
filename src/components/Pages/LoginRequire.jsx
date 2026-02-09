import React from 'react';
import { Link } from 'react-router-dom';
import "./PagesStyle.css";

function LoginRequire() {
  return (
   <div className="please-login-container">
      <div className="please-login-card">
        <h2>You need to log in</h2>
        <p>To access this page, please log in to your account.</p>
        <Link to="/login" className="login-link">Go to Login</Link>
      </div>
    </div>
  )
}

export default LoginRequire