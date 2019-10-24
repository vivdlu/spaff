import React, { useState } from "react";
import {
  Button,
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";

const BeforeCodingModal = props => {
  const [src, setSrc] = useState("https://vimeo.com/361224968");
  const [coderName, setCoderName] = useState("");
  const [codedCouple, setCodedCouple] = useState("");
  const [codedPartner, setCodedPartner] = useState("");
  const [codedDiscussion, setCodedDiscussion] = useState("");

  let onNameChange = event => {
    setCoderName(event.target.value);
  };

  let onCoupleChange = event => {
    setCodedCouple(event.target.value);
  };

  let onPartnerChange = event => {
    setCodedPartner(event.target.value);
  };

  let onSrcChange = event => {
    setSrc(event.target.value);
  };

  let onDiscussionChange = event => {
    setCodedDiscussion(event.target.value);
  };

  const startCoding = () => {
    props.codingStart(
      src,
      coderName,
      codedPartner,
      codedCouple,
      codedDiscussion
    );
  };

  return (
    <div>
      <Dialog open={props.startModalToggle} className={props.className}>
        <DialogTitle>Start Coding</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs>
              <TextField
                label="Name"
                margin="dense"
                variant="outlined"
                name="coderName"
                id="coderName"
                onChange={event => onNameChange(event)}
              />
            </Grid>
            <Grid item xs>
              <TextField
                label="Couple"
                margin="dense"
                variant="outlined"
                name="codedCouple"
                id="codedCouple"
                onChange={event => onCoupleChange(event)}
              />
            </Grid>
            <Grid item xs>
              <FormControl>
                <InputLabel shrink>Partner</InputLabel>
                <Select
                  value={codedPartner}
                  onChange={event => onPartnerChange(event)}
                >
                  <MenuItem value="LEFT">Left</MenuItem>
                  <MenuItem value="RIGHT">Right</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <TextField
                label="Video URL"
                margin="dense"
                variant="outlined"
                name="url"
                id="videoUrl"
                onChange={event => onSrcChange(event)}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl>
                <InputLabel shrink>Discussion</InputLabel>
                <Select
                  value={codedDiscussion}
                  onChange={event => onDiscussionChange(event)}
                >
                  <MenuItem value="EVENTS">Events</MenuItem>
                  <MenuItem value="CONFLICT">Conflict</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={startCoding.bind(this)}
            fullWidth
          >
            Start
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BeforeCodingModal;
