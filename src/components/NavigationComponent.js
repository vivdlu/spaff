import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../shared/routes";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navigation = () => (
  <AppBar position="static">
    <Toolbar>
      <ul>
        <li>
          <Link to={ROUTES.LOGIN}>Login</Link>
        </li>
        <li>
          <Link to={ROUTES.RATING}>Rating Session</Link>
        </li>
      </ul>
    </Toolbar>
  </AppBar>
);
export default Navigation;
