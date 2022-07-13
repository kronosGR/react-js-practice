import React, { useState } from "react";
import { SignUpLink } from "../SignUp";

import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignIForm />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

const SignInFormBase = (props) => {
  const [state, setState] = useState(INITIAL_STATE);
  const { email, password } = state;
  const isInvalid = password === "" || email === "";

  const onSubmit = (event) => {
    const { email, password } = state;

    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setState({ ...INITIAL_STATE });
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => setState({ error }));
    event.preventDefault();
  };

  const onChange = (event) => {
    setState({ [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
};

const SignInForm = withFirebase(SignInFormBase);

export default SignInPage;
