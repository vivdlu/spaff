import React, { Component } from 'react';
import Video from './VideoComponent';
import RatingConsole from './RatingConsoleComponent';
import { CODES } from '../shared/codes';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      codes: CODES,
      currentCode: 6,
      currentCodeTime: 0
    };
  }

  onCodeChange(newCode) {
    this.setState (
      {currentCode: newCode}
    );
  }

  render() {

    return (
      <div>
        <h1>SPAFF Coding App</h1>
          <p>
            Current Code: {this.state.currentCode} at time {this.state.currentTime}
          </p>
        <Video currentCodeTime={this.state.currentCodeTime} />
        <RatingConsole
          codes={this.state.codes}
          codeChange={(event) => this.onCodeChange(event)}
          />
      </div>
    );
  }
}

export default Main;
