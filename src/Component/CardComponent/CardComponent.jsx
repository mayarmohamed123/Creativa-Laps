import React, { Component } from "react";
import "./style.css";

class CardComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.decrementFunction = this.decrementFunction.bind(this);
    this.incrementFunction = this.incrementFunction.bind(this);
  }
  incrementFunction() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrementFunction() {
    if (this.state.count === 1) {
      alert("Cannot decrement further");
      return;
    }
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div className="card-component">
        <button className="card-btn" onClick={this.decrementFunction}>
          -
        </button>
        <span> {this.state.count} </span>
        <button className="card-btn" onClick={this.incrementFunction}>
          +
        </button>
      </div>
    );
  }
}

export default CardComponent;
