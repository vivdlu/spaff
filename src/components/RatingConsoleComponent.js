import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import RatingDials from './RatingDialsComponent';

class RatingConsole extends Component {

  constructor(props) {
      super(props);
      this.state = {
        currentTime: 0,
        currentCode: 6
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
          <ReactPlayer
            ref={this.Player}
            url="https://www.youtube.com/watch?v=TBZP7UIPtwY&t=28s"
          />
          <RatingDials
            ratingChange={this.handleRatingChange}
          />
        </div>
      );
    }
}

export default RatingConsole;
