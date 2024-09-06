import React, { useEffect, useState } from "react";

function CounterFun() {
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  }, [counter]);

  return (
    <>
      <h1> Counter : {counter}</h1>
      <button onClick={() => setcounter(counter + 1)}> + </button>
    </>
  );
}

export default CounterFun;
