import React, { useState } from "react";
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

function LoginWithHooks() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const changeEmail = (event) => {
    setLoginData({
      ...loginData,
      email: event.target.value,
    });
  };

  const changePassword = (event) => {
    setLoginData({
      ...loginData,
      password: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginData);
  };

  return (
    <div className="layout">
      <div className="login-container">
        <div className="logo-container">
          <div className="logo"></div>
        </div>
        <h2 className="login-title">Log in</h2>
        <div className="signup-section">
          <p>
            Don't have an account? <a href="">Sign up</a>
          </p>
        </div>
        <div className="loginwith">
          <button className="social-login facebook">
            <FontAwesomeIcon icon={faFacebookF} /> Log in with Facebook
          </button>
          <button className="social-login google">
            <FontAwesomeIcon icon={faGoogle} /> Log in with Google
          </button>
        </div>
        <p className="or-divider">OR</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Your email"
              required
              onChange={changeEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Your password"
              required
              onChange={changePassword}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">
              Log in
            </button>
          </div>
          <div className="form-group">
            <a href="" className="forgot-password">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginWithHooks;
