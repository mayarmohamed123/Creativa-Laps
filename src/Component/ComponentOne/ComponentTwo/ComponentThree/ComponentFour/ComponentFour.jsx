import React, { Component } from "react";
import ComponentFive from "./ComponentFive/ComponentFive";

export class ComponentFour extends Component {
  render() {
    return (
      <div>
        ComponentFour
        <ComponentFive />
      </div>
    );
  }
}

export default ComponentFour;
