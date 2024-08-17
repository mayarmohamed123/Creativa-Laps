import React from "react";

function FunctionProps(props) {
  return (
    <div>
      <h2>
        My name is {props.fname} {props.lname}, my age is {props.age} and this
        is my Skils {props.Skills}
      </h2>
      {props.children}
    </div>
  );
}
export default FunctionProps;
