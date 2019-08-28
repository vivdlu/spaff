import React, { Component } from 'react';
import RatingConsole from './RatingConsoleComponent';

class Main extends Component {

  render() {

    return (
      <div className="container">
        <h4 className="header">SPAFF Coding App</h4>
        <RatingConsole />
      </div>
    );
  }
}

export default Main;
