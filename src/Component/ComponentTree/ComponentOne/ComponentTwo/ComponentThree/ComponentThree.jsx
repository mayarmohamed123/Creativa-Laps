import React, { Component } from "react";
import ComponentFour from "./ComponentFour/ComponentFour";
import { UserConsumer } from "../../../../../context/context";

class ComponentThree extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(value) => {
            return (
              <div>
                <h3>Component Three with the {value}</h3>
              </div>
            );
          }}
        </UserConsumer>
        <ComponentFour />
      </div>
    );
  }
}
export default ComponentThree;
