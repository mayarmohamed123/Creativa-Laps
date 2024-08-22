import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const changeName = (value) => {
    setName(value);
  };
  const changePassword = (value) => {
    setPassword(value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(name);
        console.log(password);
      }}
    >
      <label htmlFor="">name</label>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(event) => changeName(event.target.value)}
      />
      <br />
      <label htmlFor="password"></label>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(event) => changePassword(event.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
