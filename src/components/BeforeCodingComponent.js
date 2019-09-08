import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

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
          <ModalHeader>Begin Coding</ModalHeader>
          <ModalBody>
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="coderName">Your Name:</Label>
                    <Input
                      type="text"
                      name="coderName"
                      id="coderName"
                      onChange={(event) => this.onNameChange(event)}
                      />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="coderName">Couple:</Label>
                    <Input
                      type="text"
                      name="codedCouple"
                      id="codedCouple"
                      onChange={(event) => this.onCoupleChange(event)}
                      />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={3}>
                  <FormGroup>
                  <legend>Partner:</legend>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="radio1"
                        value="left"
                        onChange={(event) => this.onPartnerChange(event)} />{' '}
                      Left
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="radio1"
                        value="right"
                        onChange={(event) => this.onPartnerChange(event)} />{' '}
                      Right
                    </Label>
                  </FormGroup>
                </FormGroup>
              </Col>
              <Col sm={9}>
                <FormGroup>
                  <Label for="videoUrl">Video Link:</Label>
                    <Input
                      type="url"
                      name="url"
                      id="videoUrl"
                      onChange={(event) => this.onSrcChange(event)}
                    />
                </FormGroup>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.startCoding}>Start Coding</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BeforeCodingModal;
