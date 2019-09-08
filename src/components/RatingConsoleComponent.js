import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import RatingDials from './RatingDialsComponent';
import BeforeCodingModal from './BeforeCodingComponent';
import AfterCodingModal from './AfterCodingComponent';
import { CODES } from '../shared/codes';
import { importedRatings } from '../shared/importedRatings';
import { exportedRatings } from '../shared/exportedRatings';

class RatingConsole extends Component {

  constructor(props) {
      super(props);
      this.state = {
        currentTime: 0,
        currentCode: 6,
        codes: CODES,
        src: "",
        coderName: "",
        codedCouple: "",
        codedPartner: "",
        playing: false,
        endModal: false
      };
      this.Player = React.createRef();
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleTimeChange = this.handleTimeChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleCoupleChange = this.handleCoupleChange.bind(this);
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
      importedRatings.push(this.state);
      for (let i = 0; i < importedRatings.length; i++) {
        let lineRating = {};
        lineRating["time"] = importedRatings[i].currentTime;
        for (let j = 1; j < 11; j++) {
          if (importedRatings[i].currentCode === j) {
            lineRating[j] = 1;
          } else {
            lineRating[j] = 0;
          };
        };
        exportedRatings[i] = lineRating;
      };
    }

    handleNameChange(newName) {
      this.setState({
        coderName: newName
      });
    }

    handleCoupleChange(newCouple) {
      this.setState({
        codedCouple: newCouple
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
            coupleChange={this.handleCoupleChange}
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
            exportedRatings={exportedRatings}
            endModalToggle={this.state.endModal}
            coderName={this.state.coderName}
            codedCouple={this.state.codedCouple}
            codedPartner={this.state.codedPartner}
            />
          </div>
      );
    }
}

export default RatingConsole;
