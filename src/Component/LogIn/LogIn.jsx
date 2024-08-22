import React from "react";

function LogIn() {
  return (
    <div>
      <h3>Page of Login </h3>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LogIn;
