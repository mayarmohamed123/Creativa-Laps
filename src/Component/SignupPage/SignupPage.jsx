import React, { Component } from "react";
import "./style.css";

export class SignupPage extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      showData: false,
      signupTime: "",
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
      signupTime: currentTime,
    });
  };

  render() {
    return (
      <div className="signup-container">
        <form onSubmit={this.handelSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter your first name..."
              onChange={this.handelChange}
              className="form-input"
              ref={this.inputRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Enter your last name..."
              onChange={this.handelChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              onChange={this.handelChange}
              className="form-input"
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
              placeholder="Enter your password..."
              onChange={this.handelChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="submit-button" />
          </div>
        </form>
        {this.state.showData && (
          <div className="signup-data">
            <h3>Signup Data</h3>
            <p>
              <strong>First Name</strong>: {this.state.fname}
            </p>
            <p>
              <strong>Last Name</strong>: {this.state.lname}
            </p>
            <p>
              <strong>Email</strong>: {this.state.email}
            </p>
            <p>You signed up at {this.state.signupTime}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SignupPage;
