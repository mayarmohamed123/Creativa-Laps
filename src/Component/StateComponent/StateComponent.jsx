import React, { Component } from "react";

class StateComponent extends Component {
  constructor() {
    super();
    this.state = {
      isloggedIn: false,
      subscription: "Guest",
    };
  }
  changeFunction() {
    this.setState(
      {
        isloggedIn: true,
        subscription: "subscription",
      },
      () => {
        console.log(this.state.isloggedIn);
      }
    );
  }

  render() {
    return (
      <div>
        <p>Hi you are a {this.state.subscription}</p>
        <button onClick={() => this.changeFunction()}>click Here</button>
      </div>
    );
  }
}

export default StateComponent;
