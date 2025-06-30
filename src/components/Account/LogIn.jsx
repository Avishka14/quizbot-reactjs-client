import React, { useState } from "react";
import "./LogIn.css";
import { Checkbox, FormControlLabel } from "@mui/material";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authServices";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password);
      if (res.status === 200) {
        const response = res.data;
        
        console.log(response);
        navigate("/account" , {state: {response }});
        
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password. Please try again.");
    }
  };

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

          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your E-Mail"
              className="account-input-log"
              autoComplete="email"
              required
            />

            <input
              type="password"
              name="password"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password!"
              className="account-input-log"
              autoComplete="current-password"
              required
            />

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
                <a href="#" className="forgetPas">Forget Password ?</a>
              </div>
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

export default LogIn;
