import React, { Component, useEffect, useState } from "react";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "./index";

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const [state, setState] = useState({ authUser: null });

    useEffect(() => {
      const listener = props.firebase.auth.onAuthStateChanged((authUser) => {
        authUser ? setState({ authUser }) : setState({ authUser: null });
      });

      return () => {
        listener();
      };
    }, []);
    return (
      <AuthUserContext.Provider value={state.authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };
  return withFirebase(withAuthentication);
};

export default withAuthentication;
