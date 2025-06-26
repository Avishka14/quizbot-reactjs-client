import { CheckBox } from "@mui/icons-material";
import React from "react";
import "./AccountStyle.css";
import { Checkbox, FormControlLabel } from "@mui/material";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="logIn-wrapper">
      <div className="logIn-container">
        <div className="logIn-header">
          <div className="logIn-header-title">
            <h2>Welcome Back to QuizBot </h2>
          </div>

          <div className="account-privacy-banner">
            <p>
              🔒 We respect your privacy. Your information is 100% secure and
              never shared with third parties.
            </p>
          </div>
        </div>

        <div className="logIn-input-card">
          <div className="logIn-input-title">
            <p>Log In to Your Account</p>
          </div>

          <form action="">
            <input
              type="text"
              name="email"
              placeholder="Your E-Mail"
              className="account-input"
              autoComplete="email"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password!"
              className="account-input"
              autoComplete="current-password"
              required
            />
          </form>

          <div className="LogIn-btn-container">
            <button className="logIn-btn">Log In</button>
            <Link to={"/signup"} className="link-button">
              Don't have an account? Sign Up
            </Link>

            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Save"
              />
              <a href="#">Forget Password ?</a>
            </div>
          </div>
        </div>

        <div className="logIn-hr">
          <hr />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default LogIn;
