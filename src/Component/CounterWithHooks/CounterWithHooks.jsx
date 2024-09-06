import React, { useState, useEffect } from "react";

function CounterWithHooks() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    console.log(`count is ${count}`);
  }, [count]);
  return (
    <div className="counter-container">
      <h4>count : {count}</h4>
      <button onClick={increment} className="btn-hooks">
        Increment the counter
      </button>
    </div>
  );
}

export default CounterWithHooks;
