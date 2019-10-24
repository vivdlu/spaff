import React from "react";
import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  title: {
    color: "white",
    flexGrow: 1
  },
  credit: {
    color: "white"
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
        <Link
          className={classes.credit}
          variant="caption"
          color="secondary"
          href="https://github.com/vivdlu/"
          target="_blank"
        >
          CREATED BY VIVIAN LU
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
