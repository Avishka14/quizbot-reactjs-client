import React, { useState } from "react";
import "./AccountStyle.css";
import { loginUser } from "../../services/authServices";
import { Link } from "react-router-dom";


function LogIn() {
  
  const [isSignup, setIsSignup] = useState(true);

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleLogin = async (e) =>{
    e.preventDefault();

     try {
      const res = await loginUser(email , password);
      if(res.status === 200){
       alert("Login Successful");
      } 

     }catch (error){
        console.error("log Fail" , error);
      }

  };


  return (
    <div>
      <section className="account-section">
        <div className="account-container">
          <div className="account-privacy-banner">
            <p>
              🔒 We respect your privacy. Your information is 100% secure and
              never shared with third parties.
            </p>
          </div>

          <div className="account-card">
            <h2 className="account-title">
              {isSignup ? "Create Your Account" : "Welcome Back!"}
            </h2>

            <form className="account-form" onSubmit={handleLogin}>
              {isSignup && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="account-input"
                  required
                />
              )}

              <input
                type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="account-input"
                required
              />
          
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="account-input"
                required
              />
              <button className="account-button">
                {isSignup ? "Create Account" : "Log In"}
              </button>
            </form>

            <p className="account-toggle-text">
              {isSignup
                ? "Already have an account?"
                : "Don't have an account yet?"}{" "}
              <button
                onClick={() => setIsSignup(!isSignup)}
                className="account-toggle-btn"
              >
                {isSignup ? "Log In" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LogIn;
