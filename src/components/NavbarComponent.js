import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
