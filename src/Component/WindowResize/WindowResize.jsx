import React, { useEffect, useState } from "react";

function WindowResize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handelSize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handelSize);

    return () => {
      window.removeEventListener("resize", handelSize);
    };
  }, [size]);
  return <div>The window size :{size}</div>;
}

export default WindowResize;
