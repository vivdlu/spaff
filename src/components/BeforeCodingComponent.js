import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';

class BeforeCodingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Start Coding</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="coderName">Your Name</Label>
                <Input type="text" name="coderName" id="coderName" />
              </FormGroup>
              <FormGroup>
                <Label for="codedPartner">Which partner are you coding?</Label>
                <div>
                  <CustomInput type="radio" id="leftPartner" name="customRadio" label="Left" inline />
                  <CustomInput type="radio" id="rightPartner" name="customRadio" label="Right" inline />
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="videoUrl">Video Link</Label>
                <Input
                  type="url"
                  name="url"
                  id="videoUrl"
                  onChange={this.props.srcChange.bind(null, "https://www.youtube.com/watch?v=TBZP7UIPtwY&t=225s")}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Start Coding</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BeforeCodingModal;
