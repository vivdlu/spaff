import React, { Component } from "react";
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

class BeforeCodingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      playing: false,
      src: "",
      coderName: "",
      codedCouple: "",
      codedPartner: "",
      codedDiscussion: ""
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onCoupleChange = this.onCoupleChange.bind(this);
    this.onPartnerChange = this.onPartnerChange.bind(this);
    this.onSrcChange = this.onSrcChange.bind(this);
    this.onDiscussionChange = this.onDiscussionChange.bind(this);
    this.startCoding = this.startCoding.bind(this);
  }

  onNameChange(event) {
    this.setState({
      coderName: event.target.value
    });
  }

  onCoupleChange(event) {
    this.setState({
      codedCouple: event.target.value
    });
  }

  onPartnerChange(event) {
    this.setState({
      codedPartner: event.target.value
    });
  }

  onSrcChange(event) {
    this.setState({
      src: event.target.value
    });
  }

  onDiscussionChange(event) {
    this.setState({
      codedDiscussion: event.target.value
    });
  }

  startCoding() {
    this.props.nameChange(this.state.coderName);
    this.props.coupleChange(this.state.codedCouple);
    this.props.partnerChange(this.state.codedPartner);
    this.props.discussionChange(this.state.codedDiscussion);
    this.props.srcChange(this.state.src);
    this.setState({
      modal: false,
      playing: true
    });
  }

  render() {
    return (
      <div>
        <Dialog open={this.state.modal} className={this.props.className}>
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
                  onChange={event => this.onNameChange(event)}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  label="Couple"
                  margin="dense"
                  variant="outlined"
                  name="codedCouple"
                  id="codedCouple"
                  onChange={event => this.onCoupleChange(event)}
                />
              </Grid>
              <Grid item xs>
                <FormControl>
                  <InputLabel shrink>Partner</InputLabel>
                  <Select
                    value={this.state.codedPartner}
                    onChange={event => this.onPartnerChange(event)}
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
                  onChange={event => this.onSrcChange(event)}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl>
                  <InputLabel shrink>Discussion</InputLabel>
                  <Select
                    value={this.state.codedDiscussion}
                    onChange={event => this.onDiscussionChange(event)}
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
              onClick={this.startCoding}
            >
              Start
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default BeforeCodingModal;
