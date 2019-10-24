import React, { Component, Fragment } from "react";
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
      startModal: true,
      endModal: false
    };
    this.Player = React.createRef();
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
    this.setState({
      startModal: false
    });
  }

  handleVideoStart() {
    this.Player.current.seekTo(300, "seconds");
  }

  handleCodingEnd() {
    this.setState({
      endModal: true
    });
  }

  refreshPage() {
    window.location.reload(true);
  }

  render() {
    return (
      <Fragment>
        <BeforeCodingModal
          startModalToggle={this.state.startModal}
          nameChange={this.handleNameChange.bind(this)}
          coupleChange={this.handleCoupleChange.bind(this)}
          partnerChange={this.handlePartnerChange.bind(this)}
          srcChange={this.handleSrcChange.bind(this)}
          discussionChange={this.handleDiscussionChange.bind(this)}
          codingStart={this.handleCodingStart.bind(this)}
        />
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            ref={this.Player}
            url={this.state.src}
            width="100%"
            height="100%"
            onStart={this.handleVideoStart.bind(this)}
            onProgress={this.handleTimeChange.bind(this)}
            onEnded={this.handleCodingEnd.bind(this)}
            playsinline
            controls
            playing
          />
        </div>
        <RatingDials ratingChange={this.handleRatingChange.bind(this)} />
        <AfterCodingModal
          exportedRatings={exportedRatings}
          endModalToggle={this.state.endModal}
          coderName={this.state.coderName}
          codedCouple={this.state.codedCouple}
          codedPartner={this.state.codedPartner}
          codedDiscussion={this.state.codedDiscussion}
          refresh={this.refreshPage}
        />
      </Fragment>
    );
  }
}

export default RatingConsole;
