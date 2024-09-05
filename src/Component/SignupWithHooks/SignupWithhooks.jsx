import React, { useState } from "react";
import "./style/style.css";

function SignupWithHooks() {
  const [signupData, setSignupData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const changeEmail = (event) => {
    setSignupData({
      ...signupData,
      email: event.target.value,
    });
  };

  const changeUsername = (event) => {
    setSignupData({
      ...signupData,
      username: event.target.value,
    });
  };

  const changePassword = (event) => {
    setSignupData({
      ...signupData,
      password: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signupData);
  };

  return (
    <div className="layout">
      <div className="signup-container">
        <h2 className="signup-title">Welcome to Design Community</h2>
        <div className="login-section">
          <p>
            Already have an account? <a href="">Log in</a>
          </p>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
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
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-input"
              placeholder="Choose a username"
              required
              onChange={changeUsername}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Your password"
              required
              onChange={changePassword}
            />
            <div className="password-requirements">
              <p>Use 8 or more characters</p>
              <p>One uppercase character</p>
              <p>One lowercase character</p>
              <p>One special character</p>
              <p>One number</p>
            </div>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="receive-emails"
              className="form-checkbox"
            />
            <label htmlFor="receive-emails" className="form-label">
              I want to receive emails about the product, feature updates,
              events, and marketing promotions.
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="signup-button">
              Create an account
            </button>
          </div>
          <div className="terms-section">
            <p>
              By creating an account, you agree to the{" "}
              <a href="">Terms of use</a> and <a href="">Privacy Policy</a>.
            </p>
          </div>
        </form>
      </div>
      <div className="image-container">
        <img src={require("./images/Image.jpg")} alt="Design" />
      </div>
    </div>
  );
}

export default SignupWithHooks;
