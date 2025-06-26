import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import "./AccountStyle.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function SignUp() {
  const [savePassword, setSavePassword] = useState(true);

  return (
    <div className="logIn-wrapper">
      <div className="logIn-container">
        <div className="logIn-header">
          <div className="logIn-header-title">
            <h2>Welcome to QuizBot</h2>
            <p>
              Join us and supercharge your knowledge with AI-powered quizzes.
            </p>
          </div>

          <div className="account-privacy-banner">
            <p>
              🔒 Your privacy matters. We ensure your information is secure and
              never shared.
            </p>
          </div>
        </div>

        <div className="logIn-input-card">
          <div className="logIn-input-title">
            <p>Create Your Account</p>
          </div>

          <form className="account-form">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="account-input"
              autoComplete="name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="account-input"
              autoComplete="email"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Create a Strong Password"
              className="account-input"
              autoComplete="new-password"
              required
            />

            <div className="checkbox-row">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={savePassword}
                    onChange={(e) => setSavePassword(e.target.checked)}
                    sx={{ color: "#007bff" }}
                  />
                }
                label="Remember this device"
              />
            </div>

            <div className="LogIn-btn-container">
              <button type="submit" className="logIn-btn">
                Create Account
              </button>

              <Link to={"/login"}  className="link-button">
                  Already Have an Account?
              </Link>
              
            </div>
          </form>
        </div>

        <div className="logIn-hr">
            <hr />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default SignUp;
