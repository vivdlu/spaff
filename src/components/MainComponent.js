import React, { Component } from 'react';
import RatingConsole from './RatingConsoleComponent';
import Navbar from './NavbarComponent';
import { Container } from '@material-ui/core';

class Main extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Container maxWidth="md">
          <RatingConsole />
        </Container>
      </div>
    );
  }
}

export default Main;
