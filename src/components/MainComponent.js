import React, { Component } from 'react';
import RatingConsole from './RatingConsoleComponent';
import Navbar from './NavbarComponent';

class Main extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <RatingConsole />
        </div>
      </div>
    );
  }
}

export default Main;
