import React, { Component } from 'react';
import RatingConsole from './RatingConsoleComponent';
import { Navbar, NavbarBrand } from 'reactstrap';

class Main extends Component {

  render() {

    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">SPAFF Coding App</NavbarBrand>
        </Navbar>
        <div className="container">
          <RatingConsole />
        </div>
      </div>
    );
  }
}

export default Main;
