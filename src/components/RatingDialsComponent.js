import React, { Component } from 'react';

class RatingDials extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.ratingChange.bind(null, 1)}>1</button>
        <button onClick={this.props.ratingChange.bind(null, 2)}>2</button>
        <button onClick={this.props.ratingChange.bind(null, 3)}>3</button>
        <button onClick={this.props.ratingChange.bind(null, 4)}>4</button>
        <button onClick={this.props.ratingChange.bind(null, 5)}>5</button>
        <button onClick={this.props.ratingChange.bind(null, 6)}>6</button>
        <button onClick={this.props.ratingChange.bind(null, 7)}>7</button>
        <button onClick={this.props.ratingChange.bind(null, 8)}>8</button>
        <button onClick={this.props.ratingChange.bind(null, 9)}>9</button>
        <button onClick={this.props.ratingChange.bind(null, 10)}>10</button>
      </div>
    );
  }
}

export default RatingDials;
