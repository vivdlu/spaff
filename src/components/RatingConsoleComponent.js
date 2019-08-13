import React, { Component } from 'react';

class RatingConsole extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentCode: "Pooooop"
    };
    this.onChangeCode = this.onChangeCode.bind(this);
  }

  onChangeCode(event) {
    this.props.changeCode(event.target.value);
    console.log(event.target.value);
  }

  // handleClick(event) {
  //   this.setState (
  //     {currentCode: event.target.value}
  //   );
  // }

  render() {

    if (this.props.codes != null) {

      const button = this.props.codes.map(({ id }) => {
        return (
          <button
            key={id}
            value={id}
            className="ratingBtn"
            onClick={
              this.onChangeCode
            }>
            {id}
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
