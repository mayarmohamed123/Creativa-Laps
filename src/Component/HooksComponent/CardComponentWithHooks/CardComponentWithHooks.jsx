import React, { useState } from "react";
import "./style.css";

function CardComponentWithHooks() {
  const [count, setCount] = useState(1);
  const decrement = () => {
    if (count === 1) {
      alert("Cannot decrement further");
      return;
    }
    setCount((prev) => prev - 1);
  };
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="card-component">
      <button className="card-btn" onClick={decrement}>
        -
      </button>
      <span> {count} </span>
      <button className="card-btn" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default CardComponentWithHooks;
