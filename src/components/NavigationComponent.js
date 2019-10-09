import React from "react";
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
        <Typography className={classes.root} variant="h6">
          SPAFF App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
