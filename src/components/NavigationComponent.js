import React, { useState } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  title: {
    color: "white",
    flexGrow: 1
  }
});

function Navbar() {
  const [playing, setPlaying] = useState(false);
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          SPAFF App
        </Typography>
        <Button color="inherit" onClick={() => setPlaying(!playing)}>
          Play
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
