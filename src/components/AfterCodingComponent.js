import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Download from './DownloadFileComponent';

class AfterCodingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.endModal
    };
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Download File</ModalHeader>
          <ModalBody>
            {this.props.coderName}, you've finished rating the {this.props.codedPartner} partner. Click to download your data file.
          </ModalBody>
          <ModalFooter><Download /></ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AfterCodingModal;
