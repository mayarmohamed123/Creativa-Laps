import React, { Component } from "react";
import ComponentTwo from "./ComponentTwo/ComponentTwo";

export class ComponentOne extends Component {
  render() {
    return (
      <div>
        ComponentOne
        <ComponentTwo />
      </div>
    );
  }
}

export default ComponentOne;
