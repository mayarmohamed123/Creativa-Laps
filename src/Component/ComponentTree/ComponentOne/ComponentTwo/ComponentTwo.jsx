import React, { Component } from "react";
import ComponentThree from "./ComponentThree/ComponentThree";

class ComponentTwo extends Component {
  render() {
    return (
      <div>
        <h2>Component Two</h2>
        <ComponentThree />
      </div>
    );
  }
}
export default ComponentTwo;
