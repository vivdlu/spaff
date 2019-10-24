import React from "react";
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

const AfterCodingModal = props => {
  const refreshBtn = (
    <Button onClick={props.refresh}>
      <RefreshIcon />
    </Button>
  );
  return (
    <div>
      <Dialog open={props.endModalToggle} className={props.className}>
        <DialogTitle>Coding Completed</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body1">
              {props.coderName}, you've finished rating the {props.codedPartner}{" "}
              partner of couple {props.codedCouple} in their{" "}
              {props.codedDiscussion} discussion. Click the button to download
              your data file.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {refreshBtn}
          <Download
            exportedRatings={props.exportedRatings}
            coderName={props.coderName}
            codedCouple={props.codedCouple}
            codedPartner={props.codedPartner}
            codedDiscussion={props.codedDiscussion}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AfterCodingModal;
