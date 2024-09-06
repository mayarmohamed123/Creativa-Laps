import React, { Component } from "react";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../loginPage/LoginPage";
import "./style.css";

export class HomePageButton extends Component {
  constructor() {
    super();
    this.state = {
      signup: false,
    };
  }
  showSignupPage = () => {
    this.setState({
      signup: !this.state.signup,
    });
  };
  render() {
    return (
      <div className="home-page-button">
        <button onClick={this.showSignupPage} className="sign-up">
          {this.state.signup ? "Log in" : "Sign Up"}
        </button>
        {this.state.signup ? <SignupPage /> : <LoginPage />}
      </div>
    );
  }
}

export default HomePageButton;
