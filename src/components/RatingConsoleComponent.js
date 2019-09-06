import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import RatingDials from './RatingDialsComponent';
import BeforeCodingModal from './BeforeCodingComponent';
import AfterCodingModal from './AfterCodingComponent';
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
        playing: false,
        endModal: false
      };
      this.Player = React.createRef();
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleTimeChange = this.handleTimeChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePartnerChange = this.handlePartnerChange.bind(this);
      this.handleSrcChange = this.handleSrcChange.bind(this);
      this.handleVideoEnd = this.handleVideoEnd.bind(this);
    }

    handleRatingChange(newCode) {
      this.setState({
        currentCode: newCode
      });
    }

    handleTimeChange() {
      const Player = this.Player.current;
      this.setState({
        currentTime: Math.round(Player.getCurrentTime()) - 300,
      });
      console.log("Time:",this.state.currentTime, "Code:",this.state.currentCode)
    }

    handleNameChange(newName) {
      this.setState({
        coderName: newName
      });
    }

    handlePartnerChange(newPartner) {
      this.setState({
        codedPartner: newPartner
      });
    }

    handleSrcChange(newSrc) {
      this.setState({
        src: newSrc,
        playing: true
      });
    }

    handleVideoEnd() {
      this.setState({
        endModal: true
      });
    }

    render() {
      return (
        <div>
          <BeforeCodingModal
            nameChange={this.handleNameChange}
            partnerChange={this.handlePartnerChange}
            srcChange={this.handleSrcChange}
            />
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
              onEnded={this.handleVideoEnd}
            />
          </div>
          <RatingDials
            ratingChange={this.handleRatingChange}
            codes={this.state.codes}
          />
        <AfterCodingModal
            endModalToggle={this.state.endModal}
            coderName={this.state.coderName}
            codedPartner={this.state.codedPartner}
            />
        </div>
      );
    }
}

export default RatingConsole;
