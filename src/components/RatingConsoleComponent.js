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
        codedDiscussion: "",
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
      this.handleDiscussionChange = this.handleDiscussionChange.bind(this);
      this.handleVideoStart = this.handleVideoStart.bind(this);
      this.handleVideoEnd = this.handleVideoEnd.bind(this);
      this.refreshPage = this.refreshPage.bind(this);
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

    handleDiscussionChange(newDiscussion) {
      this.setState({
        codedDiscussion: newDiscussion
      });
    }

    handleVideoStart() {
      const Player = this.Player.current;
      Player.seekTo(300, "seconds");
    }

    handleVideoEnd() {
      this.setState({
        endModal: true
      });
    }

    refreshPage() {
      window.location.reload(true);
    }

    render() {
      return (
        <div>
          <BeforeCodingModal
            nameChange={this.handleNameChange}
            coupleChange={this.handleCoupleChange}
            partnerChange={this.handlePartnerChange}
            srcChange={this.handleSrcChange}
            discussionChange={this.handleDiscussionChange}
            />
          <div className="player-wrapper">
            <ReactPlayer
              className="player"
              ref={this.Player}
              url={this.state.src}
              width="100%"
              height="100%"
              playing={this.state.playing}
              playsinline="true"
              controls="true"
              onStart={this.handleVideoStart}
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
            codedDiscussion={this.state.codedDiscussion}
            refresh={this.refreshPage}
            />
          </div>
      );
    }
}

export default RatingConsole;
