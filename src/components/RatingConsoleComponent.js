import React, { Component } from "react";
import ReactPlayer from "react-player";
import RatingDials from "./RatingDialsComponent";
import BeforeCodingModal from "./BeforeCodingComponent";
import AfterCodingModal from "./AfterCodingComponent";
import { importedRatings } from "../shared/importedRatings";
import { exportedRatings } from "../shared/exportedRatings";

class RatingConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      currentCode: 6,
      src: "",
      coderName: "",
      codedCouple: "",
      codedPartner: "",
      codedDiscussion: "",
      playing: true,
      startModal: true,
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
    this.handleCodingStart = this.handleCodingStart.bind(this);
    this.handleCodingEnd = this.handleCodingEnd.bind(this);
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
      currentTime: Math.round(Player.getCurrentTime()) - 300
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
        }
      }
      if (lineRating["time"] > 0) {
        exportedRatings[i] = lineRating;
      }
    }
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
      src: newSrc
    });
  }

  handleDiscussionChange(newDiscussion) {
    this.setState({
      codedDiscussion: newDiscussion
    });
  }

  handleCodingStart() {
    this.Player.current.seekTo(300, "seconds");
    this.setState({
      startModal: false
    });
  }

  handleCodingEnd() {
    this.setState({
      endModal: true,
      playing: false
    });
  }

  refreshPage() {
    window.location.reload(true);
  }

  render() {
    return (
      <div>
        <BeforeCodingModal
          startModalToggle={this.state.startModal}
          nameChange={this.handleNameChange}
          coupleChange={this.handleCoupleChange}
          partnerChange={this.handlePartnerChange}
          srcChange={this.handleSrcChange}
          discussionChange={this.handleDiscussionChange}
          codingStart={this.handleCodingStart}
        />
        <div className="player-wrapper">
          <ReactPlayer
            className="player"
            ref={this.Player}
            url={this.state.src}
            width="100%"
            height="100%"
            playsinline={true}
            playing={true}
            onProgress={this.handleTimeChange}
            onEnded={this.handleCodingEnd}
          />
        </div>
        <RatingDials ratingChange={this.handleRatingChange} />
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
