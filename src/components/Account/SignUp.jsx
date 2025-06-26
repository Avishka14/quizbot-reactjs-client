import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import "./AccountStyle.css";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import {createUser} from "../../services/authServices";

function SignUp() {
  const [savePassword, setSavePassword] = useState(true);
  const randomID = Math.floor(1000 + Math.random() * 9000);

  const navigate = useNavigate();

  const [form , setForm] = useState({
    id:randomID,
    name:"",
    email:"",
    password:""
  });
  
 const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser(form);
      if (response.status === 200) {
        alert("Account created successfully! You will be redirected to your account page.");
        setForm({
          id: randomID,
          name: "",
          email: "",
          password: ""
        });
        navigate("/account");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Failed to create account. Please try again.");
    }
  }

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

          <form className="account-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name || ""}
              onChange={handleChange}
              placeholder="Full Name"
              className="account-input"
              autoComplete="name"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email || ""}
              onChange={handleChange}
              placeholder="Email Address"
              className="account-input"
              autoComplete="email"
              required
            />

            <input
              type="password"
              name="password"
              value={form.password || ""}
              onChange={handleChange}
              placeholder="Create a Strong Password"
              className="account-input"
              autoComplete="password"
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
