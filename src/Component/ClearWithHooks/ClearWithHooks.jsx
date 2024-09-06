import React, { useState, useEffect } from "react";

function ClearWithHooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>Count: {count}</div>;
}

export default ClearWithHooks;
