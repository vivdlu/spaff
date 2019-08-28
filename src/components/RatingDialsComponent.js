import React, { Component } from 'react';
import { Button } from 'reactstrap';

class RatingDials extends Component {

  render() {
    return (
      <div className="row">
        <Button color="primary" className="ratingBtn" onClick={this.props.ratingChange.bind(null, 1)}>1</Button>
        <Button color="primary" className="ratingBtn" onClick={this.props.ratingChange.bind(null, 2)}>2</Button>
        <Button color="primary" className="ratingBtn" onClick={this.props.ratingChange.bind(null, 3)}>3</Button>
        <Button color="primary" className="ratingBtn" onClick={this.props.ratingChange.bind(null, 4)}>4</Button>
        <Button color="primary" className="ratingBtn" onClick={this.props.ratingChange.bind(null, 5)}>5</Button>
        <Button color="primary" className="ratingBtn" onClick={this.props.ratingChange.bind(null, 6)}>6</Button>
        <Button color="primary" className="ratingBtn" onClick={this.props.ratingChange.bind(null, 7)}>7</Button>
        <Button color="primary" className="ratingBtn" onClick={this.props.ratingChange.bind(null, 8)}>8</Button>
        <Button color="primary" className="ratingBtn" onClick={this.props.ratingChange.bind(null, 9)}>9</Button>
        <Button color="primary" className="ratingBtn" onClick={this.props.ratingChange.bind(null, 10)}>10</Button>
      </div>
    );
  }
}

export default RatingDials;
