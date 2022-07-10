import React from "react";

import * as ROUTES from "../../constants/routes";
const Navigation = () => (
  <div>
    <ul>
      <li>
        <link to={ROUTES.SIGN_IN}>Sign In</link>
      </li>
      <li>
        <link to={ROUTES.LANDING}>Landing</link>
      </li>
      <li>
        <link to={ROUTES.HOME}>Home</link>
      </li>
      <li>
        <link to={ROUTES.ACCOUNT}>Account</link>
      </li>
      <li>
        <link to={ROUTES.ADMIN}>Admin</link>
      </li>
    </ul>
  </div>
);

export default Navigation;
