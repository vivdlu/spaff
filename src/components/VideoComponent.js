import React, { Component } from 'react';
import { Player } from 'video-react';
import { PLAYER } from '../shared/player';

class Video extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTime: this.props.currentTime
    };
  }

  render() {
    return (
      <div>
      <Player
        fluid={PLAYER.fluid}
        startTime={PLAYER.startTime}
        width={PLAYER.width}
        height={PLAYER.height}
        src={PLAYER.source}
      />
      </div>
    );
  }
}

export default Video;
