import React, { Component } from "react";
import "./style.css";

class SignUpPage extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      passwordMatch: true,
      showData: false,
      signUpTime: "",
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  changeUsername(event) {
    this.setState({ username: event.target.value });
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  changeConfirmPassword(event) {
    this.setState({
      confirmPassword: event.target.value,
      passwordMatch: event.target.value === this.state.password,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.passwordMatch) {
      const currentDateTime = new Date().toLocaleString();
      this.setState({
        showData: true,
        signUpTime: currentDateTime,
      });
    }
  }

  render() {
    return (
      <div className="signup-container">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-input"
              placeholder="Enter your username"
              required
              onChange={this.changeUsername}
              ref={this.inputRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              required
              onChange={this.changeEmail}
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
              placeholder="Enter your password"
              required
              onChange={this.changePassword}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="form-input"
              placeholder="Confirm your password"
              required
              onChange={this.changeConfirmPassword}
            />
          </div>
          {!this.state.passwordMatch && (
            <div className="confirm-password">
              <p>Sorry, your passwords do not match.</p>
            </div>
          )}
          <div className="form-group">
            <button
              type="submit"
              className="signup-button"
              onClick={this.handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
        {this.state.showData && (
          <div className="data-wrapper-signup">
            <h3>Sign Up</h3>
            <p>
              <strong>Welcome:</strong> {this.state.username}
            </p>
            <p>
              <strong>Your Email is:</strong> {this.state.email}
            </p>
            <p>You signed up for the website at {this.state.signUpTime}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SignUpPage;
