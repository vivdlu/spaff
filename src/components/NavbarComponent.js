import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class Navbar extends Component {
  render() {
    return (
      <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="default">
            SPAFF App
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default Navbar;
