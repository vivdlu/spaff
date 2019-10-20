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
  const [playing, setPlaying] = useState(true);
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          SPAFF App
        </Typography>
        <Button key="play" color="inherit" onClick={() => setPlaying(true)}>
          Play
        </Button>
        <Button key="pause" color="inherit" onClick={() => setPlaying(false)}>
          Pause
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
