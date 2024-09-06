import React, { useEffect, useState } from "react";

function GreetingWithHooks() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const handelname = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    setGreeting(`hello ${name}`);
  }, [name]);
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={handelname}
      />
      <p>{greeting}</p>
    </div>
  );
}

export default GreetingWithHooks;
