import React, { useState } from "react";
import './AccountStyle.css';
function LogIn() {
  const [isSignup, setIsSignup] = useState(true);

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

            <form className="account-form">
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
                placeholder="Email"
                className="account-input"
                required
              />
              <input
                type="text"
                placeholder="Username"
                className="account-input"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="account-input"
                required
              />
              <button className="account-button">
                {isSignup ? "Sign Up" : "Log In"}
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
