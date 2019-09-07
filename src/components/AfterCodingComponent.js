import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Download from './DownloadFileComponent';

class AfterCodingModal extends Component {

  render() {
    return (
      <div>
        <Modal isOpen={this.props.endModalToggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Coding Completed</ModalHeader>
          <ModalBody>
            {this.props.coderName}, you've finished rating the {this.props.codedPartner} partner. Click to download your data file.
          </ModalBody>
          <ModalFooter>
            <Download
              exportedRatings={this.props.exportedRatings}
            />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AfterCodingModal;
