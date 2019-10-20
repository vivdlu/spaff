import React, { Component } from "react";
import Download from "./DownloadFileComponent";
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";

class AfterCodingModal extends Component {
  render() {
    const closeBtn = (
      <Button onClick={this.props.refresh}>
        <RefreshIcon />
      </Button>
    );
    return (
      <div>
        <Dialog
          open={this.props.endModalToggle}
          className={this.props.className}
        >
          <DialogTitle>Coding Completed</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant="body1">
                {this.props.coderName}, you've finished rating the{" "}
                {this.props.codedPartner} partner of couple{" "}
                {this.props.codedCouple} in their {this.props.codedDiscussion}{" "}
                discussion. Click the button to download your data file.
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {closeBtn}
            <Download
              exportedRatings={this.props.exportedRatings}
              coderName={this.props.coderName}
              codedCouple={this.props.codedCouple}
              codedPartner={this.props.codedPartner}
              codedDiscussion={this.props.codedDiscussion}
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AfterCodingModal;
