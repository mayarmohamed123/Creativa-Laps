import React, { Component } from "react";
import "./style.css";

export class LoginPage extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      email: "",
      password: "",
      showData: false,
      loginTime: "",
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handelChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handelSubmit = (event) => {
    event.preventDefault();
    const currentTime = new Date().toLocaleString();
    this.setState({
      showData: true,
      loginTime: currentTime,
    });
  };

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handelSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email...."
              onChange={this.handelChange}
              className="form-input"
              ref={this.inputRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password...."
              onChange={this.handelChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
        {this.state.showData && (
          <div className="login-data">
            <h3>Login Data</h3>
            <p>
              <strong>Email</strong>: {this.state.email}
            </p>
            <p>You are logged in at {this.state.loginTime}</p>
          </div>
        )}
      </div>
    );
  }
}

export default LoginPage;
