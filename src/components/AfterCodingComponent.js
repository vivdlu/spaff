import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Download from './DownloadFileComponent';
import { Typography, Button } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

class AfterCodingModal extends Component {

  render() {

    const closeBtn = <Button onClick={this.props.refresh}><RefreshIcon /></Button>;
    return (
      <div>
        <Modal isOpen={this.props.endModalToggle} className={this.props.className}>
          <ModalHeader close={closeBtn}>
            <Typography variant="h5">Coding Completed</Typography>
          </ModalHeader>
          <ModalBody>
            <Typography variant="body1">
              {this.props.coderName}, you've finished rating the {this.props.codedPartner} partner of couple {this.props.codedCouple}. Click the button to download your data file.
            </Typography>
          </ModalBody>
          <ModalFooter>
            <Download
              exportedRatings={this.props.exportedRatings}
              coderName={this.props.coderName}
              codedCouple={this.props.codedCouple}
              codedPartner={this.props.codedPartner}
            />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AfterCodingModal;
