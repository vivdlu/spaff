import React, { Component } from 'react';

class RatingConsole extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentCode: "Pooooop"
    };
  }

  onChangeCode() {
    this.props.changeCode(this.state.currentCode);
    console.log(this.state.currentCode);
  }

  // handleClick(event) {
  //   this.setState (
  //     {currentCode: event.target.value}
  //   );
  // }

  render() {

    if (this.props.codes != null) {

      const button = this.props.codes.map((code) => {
        return (
          <button
          key={code.id}
          value={code.id}
          className="ratingBtn"
          onClick={
            this.onChangeCode.bind(this)
          }>
            <h1>{code.id}</h1>
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
