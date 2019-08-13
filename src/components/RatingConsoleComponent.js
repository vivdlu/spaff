import React, { Component } from 'react';

class RatingConsole extends Component {

  handleChange(event) {
    this.props.changeCode(event.target.value);
  }

  render() {

    if (this.props.codes != null) {

      const button = this.props.codes.map((code) => {
        return (
          <button
          key={code.id}
          value={code.id}
          className="ratingBtn"
          onClick={
            (event) => this.handleChange(event)
          }>
            {code.id} {code.description}
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
