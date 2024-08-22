import React, { Component } from "react";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";

class HomePageButton extends Component {
  constructor() {
    super();
    this.state = {
      isSingnedUp: false,
    };

    this.changeButton = this.changeButton.bind(this);
  }
  changeButton() {
    this.setState({
      isSingnedUp: true,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeButton}>Sign Up</button>
        {this.state.isSingnedUp ? <SignUp /> : <LogIn />}
      </div>
    );
  }
}

export default HomePageButton;
