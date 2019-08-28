import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import RatingDials from './RatingDialsComponent';
import { CODES } from '../shared/codes';

const video = {
  src: "https://www.youtube.com/watch?v=TBZP7UIPtwY&t=28s"
}

class RatingConsole extends Component {

  constructor(props) {
      super(props);
      this.state = {
        currentTime: 0,
        currentCode: 6,
        codes: CODES,
      };
      this.Player = React.createRef();
      this.handleRatingChange = this.handleRatingChange.bind(this);
    }

    handleRatingChange(newCode) {
      const Player = this.Player.current;
      this.setState({
        currentTime: Player.getCurrentTime(),
        currentCode: newCode
      });
    }

    render() {

      console.log(this.state);
      return (
        <div>
          <div className="row">
            <ReactPlayer
              className="player"
              ref={this.Player}
              url={video.src}
              controls={true}
              width="100%"
              height="74%"
            />
          </div>
          <RatingDials
            ratingChange={this.handleRatingChange}
            codes={this.state.codes}
          />
        </div>
      );
    }
}

export default RatingConsole;
