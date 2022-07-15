import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

export default function App(props) {
  const [state, setState] = useState({ authUser: null });

  useEffect(() => {
    props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser ? setState({ authUser }) : setState({ authUser: null });
    });
  }, []);

  return (
    <AuthUserContext.Provider value={state.authUser}>
      <BrowserRouter>
        <div>
          <Navigation authUser={state.authUser} />

          <hr />
        </div>
        <Routes>
          <Route path={ROUTES.LANDING} element={<LandingPage />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
          <Route
            path={ROUTES.PASSWORD_FORGET}
            element={<PasswordForgetPage />}
          />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTES.ADMIN} element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </AuthUserContext.Provider>
  );
}
