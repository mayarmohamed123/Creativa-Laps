import React, { Component } from "react";
import "./style.css";

class LoginPage extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      username: "",
      password: "",
      showData: false,
      loginTime: "",
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }

  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  handelSubmit(event) {
    event.preventDefault();
    const currentDateTime = new Date().toLocaleString();
    this.setState({
      showData: true,
      loginTime: currentDateTime,
    });
  }
  render() {
    return (
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
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
            <button
              type="submit"
              className="login-button"
              onClick={this.handelSubmit}
            >
              Login
            </button>
          </div>
          <div className="form-group">
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
        </form>
        {this.state.showData && (
          <div className="data-wrapper-login">
            <h3>Log In</h3>
            <p>
              <strong>Welcome : </strong> {this.state.username}
            </p>
            <p>
              You are logged in to your account at
              {this.state.loginTime}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default LoginPage;
