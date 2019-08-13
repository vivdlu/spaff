import React, { Component } from 'react';

class RatingConsole extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentCode: this.props.currentCode
    };
  }

  changeState(event) {
    this.setState (
      {currentCode: parseInt(event.target.value)}
    );
    console.log(this.state.currentCode);
  }

  updateState(event) {
    this.props.codeChange(this.state.currentCode);
    console.log(this.state.currentCode);
  }

  render() {

    if (this.props.codes != null) {

      const button = this.props.codes.map((code) => {
        return (
          <button
          key={code.id}
          value={code.id}
          className="ratingBtn"
          onClick={(event) => {
            this.changeState(event);
            this.updateState(event);
          }}>
            <h1>{code.id}</h1>{code.description}
          </button>
        );
      });

      return (
        <div>
          {button}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default RatingConsole;
