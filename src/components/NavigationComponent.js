import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../shared/routes";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "white",
    "&:hover": {
      color: "white"
    }
  }
});

function Navigation() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link className={classes.root} to={ROUTES.HOME}>
            SPAFF App
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
