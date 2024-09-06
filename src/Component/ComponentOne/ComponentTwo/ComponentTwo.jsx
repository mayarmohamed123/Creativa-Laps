import React, { Component } from "react";
import ComponentThree from "./ComponentThree/ComponentThree";

export class ComponentTwo extends Component {
  render() {
    return (
      <div>
        ComponentTwo
        <ComponentThree />
      </div>
    );
  }
}

export default ComponentTwo;
