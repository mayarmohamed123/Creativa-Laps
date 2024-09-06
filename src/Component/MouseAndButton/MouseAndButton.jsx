import React, { useState, useEffect } from "react";

function MouseAndButton() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [buttonClick, setButtonClick] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setX(e.clientX);
      setY(e.clientY);
    });

    return () => {
      window.removeEventListener("mousemove", (e) => {});
    };
  }, []);
  useEffect(() => {
    const handelClick = () => {
      setButtonClick((prev) => prev + 1);
    };
    window.addEventListener("click", handelClick);
    return () => {
      window.removeEventListener("click", handelClick);
    };
  }, []);
  return (
    <>
      <div>
        Mouse Position X : {x} and Position Y:{y}
      </div>
      <div>Click Count : {buttonClick}</div>
    </>
  );
}

export default MouseAndButton;
