import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  title: {
    color: "white",
    flexGrow: 1
  }
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          SPAFF App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
