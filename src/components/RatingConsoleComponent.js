import React, { Component } from 'react';

class RatingConsole extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentCode: this.props.currentCode
    };
  }

    handleCodeChange(event) {
      this.setState (
        {currentCode: parseInt(event.target.value)},
        () => {
          this.props.codeChange(this.state.currentCode);
        }
      )
    }

  render() {

    if (this.props.codes != null) {

      const button = this.props.codes.map((code) => {
        return (
          <button
          key={code.id}
          value={code.id}
          className="ratingBtn"
          onClick={(event) => this.handleCodeChange(event)}>{code.id}</button>
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
