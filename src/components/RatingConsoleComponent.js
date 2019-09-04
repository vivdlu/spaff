import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import RatingDials from './RatingDialsComponent';
import BeforeCodingModal from './BeforeCodingComponent';
import { CODES } from '../shared/codes';

class RatingConsole extends Component {

  constructor(props) {
      super(props);
      this.state = {
        currentTime: 0,
        currentCode: 6,
        codes: CODES,
        src: "",
        coderName: "",
        codedPartner: "",
        playing: false
      };
      this.Player = React.createRef();
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleTimeChange = this.handleTimeChange.bind(this);
      this.handleSrcChange = this.handleSrcChange.bind(this);
    }

    handleRatingChange(newCode) {
      this.setState({
        currentCode: newCode
      });
    }

    handleTimeChange() {

      console.log(this.state)
      const Player = this.Player.current;
      this.setState({
        currentTime: Player.getCurrentTime(),
      });
    }

    handleSrcChange(newSrc) {
      this.setState({
        src: newSrc
      });
    }

    render() {
      return (
        <div>
          <BeforeCodingModal
            srcChange={this.handleSrcChange} />
          <div className="row">
            <ReactPlayer
              className="player"
              ref={this.Player}
              url={this.state.src}
              controls={true}
              width="100%"
              height="74%"
              playing={this.state.playing}
              onProgress={this.handleTimeChange}
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
