import React from "react";

function SignUp() {
  return (
    <div>
      <h3>Page of Signing </h3>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <br />
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
export default SignUp;
