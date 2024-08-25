import React, { Component } from "react";

class CurrentTime extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date().toLocaleString(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    this.setState({
      currentTime: new Date().toLocaleString(),
    });
  }

  render() {
    return (
      <div className="time-container">
        <h3>Current Time</h3>
        <p>{this.state.currentTime}</p>
      </div>
    );
  }
}

export default CurrentTime;
