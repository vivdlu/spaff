import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Download from './DownloadFileComponent';

class AfterCodingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.startCoding = this.startCoding.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  endCoding() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Download File</ModalHeader>
          <ModalBody>
            INSERT NAME, you've finished rating the INSERT PARTNER partner. Click below to download your data file:
            <Download />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AfterCodingModal;
