import React, { Component } from 'react';
import RatingConsole from './RatingConsoleComponent';

class Main extends Component {

  render() {

    return (
      <div className="container">
        <h1 className="header">SPAFF Coding App</h1>
        <RatingConsole />
      </div>
    );
  }
}

export default Main;
