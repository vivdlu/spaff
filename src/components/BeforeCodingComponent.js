import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col } from 'reactstrap';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class BeforeCodingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      playing: false,
      src: "",
      coderName: "",
      codedCouple: "",
      codedPartner: ""
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onCoupleChange = this.onCoupleChange.bind(this);
    this.onPartnerChange = this.onPartnerChange.bind(this);
    this.onSrcChange = this.onSrcChange.bind(this);
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

  startCoding() {
    this.props.nameChange(this.state.coderName);
    this.props.coupleChange(this.state.codedCouple);
    this.props.partnerChange(this.state.codedPartner);
    this.props.srcChange(this.state.src);
    this.setState({
      modal: !this.state.modal,
      playing: true
    });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} className={this.props.className}>
          <ModalHeader>
            <Typography variant="h5">Begin Coding</Typography>
          </ModalHeader>
          <ModalBody>
            <Form>
              <Grid container spacing={3}>
                <Grid item xs>
                  <TextField
                    label="Name"
                    margin="dense"
                    variant="outlined"
                    name="coderName"
                    id="coderName"
                    onChange={(event) => this.onNameChange(event)}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="Couple"
                    margin="dense"
                    variant="outlined"
                    name="codedCouple"
                    id="codedCouple"
                    onChange={(event) => this.onCoupleChange(event)}
                  />
                </Grid>
                <Grid item xs>
                  <FormControl>
                    <InputLabel shrink>Partner</InputLabel>
                    <Select
                      value={this.state.codedPartner}
                      onChange={(event) => this.onPartnerChange(event)}
                    >
                    <MenuItem value="" disabled>Select</MenuItem>
                      <MenuItem value="left">Left</MenuItem>
                      <MenuItem value="right">Right</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="Video Link"
                    margin="dense"
                    variant="outlined"
                    name="url"
                    id="videoUrl"
                    onChange={(event) => this.onSrcChange(event)}
                  />
                </Grid>
              </Grid>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button variant="outlined" color="primary"  onClick={this.startCoding}>Start Coding</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BeforeCodingModal;
