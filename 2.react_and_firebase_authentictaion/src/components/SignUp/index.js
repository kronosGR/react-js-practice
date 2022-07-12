import React, { Component, useState } from "react";

import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const SignUpForm = (props) => {
  const [state, setState] = useState(INITIAL_STATE);
  const onSubmit = (event) => {};

  const onChange = (event) => {
    setState({ [event.target.name]: event.target.value });
  };

  const { username, email, passwordOne, passwordTwo, error } = state;
  return (
    <form onSubmit={onSubmit}>
      <input
        name="username"
        onChange={onChange}
        value={username}
        type="text"
        placeholder="Full Name"
      />
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />

      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Confirm Password"
      />
      <button type="submit">Sign up</button>

      {error && <p>{error.message}</p>}
    </form>
  );
};
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
