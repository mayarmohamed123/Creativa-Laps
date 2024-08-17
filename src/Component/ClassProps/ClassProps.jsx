import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h2>
          My name is {this.props.fname} {this.props.lname}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default ClassProps;
