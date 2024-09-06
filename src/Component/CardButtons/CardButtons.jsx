import React, { Component } from "react";
import "./style.css";

class CardButtons extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    if (this.state.count === 1) return;
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div className="btns-container">
        <button className="plus" onClick={this.increment}>
          +
        </button>
        <span>{this.state.count}</span>
        <button className="minus" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}

export default CardButtons;
