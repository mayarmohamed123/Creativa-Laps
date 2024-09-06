import axios from "axios";
import React, { Component } from "react";
import "./style.css";

class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/comments", this.state)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error posting the data!", error);
      });
  };

  render() {
    const { username, email } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="post-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            className="input-field"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="input-field"
          />
          <button type="submit" className="submit-button">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default PostComponent;
