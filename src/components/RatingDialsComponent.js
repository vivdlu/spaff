import React, { Component } from 'react';
import { Button } from 'reactstrap';

class RatingDials extends Component {

  render() {
    return (
      <div className="row">
        <Button color="primary"  onClick={this.props.ratingChange.bind(null, 1)}>1<br /><p className="code-desc">Contempt, Belligerence, Stone walling</p></Button>
        <Button color="primary"  onClick={this.props.ratingChange.bind(null, 2)}>2<br /><p className="code-desc">Anger, L/H Dom, Criticism, Defensiveness</p></Button>
        <Button color="primary"  onClick={this.props.ratingChange.bind(null, 3)}>3<br /><p className="code-desc">Sadness, Disappointment, Despair, Hurt</p></Button>
        <Button color="primary"  onClick={this.props.ratingChange.bind(null, 4)}>4<br /><p className="code-desc">Victim Defensiveness, Whining</p></Button>
        <Button color="primary"  onClick={this.props.ratingChange.bind(null, 5)}>5<br /><p className="code-desc">Fear, Tension, Worry, Stress</p></Button>
        <Button color="primary"  onClick={this.props.ratingChange.bind(null, 6)}>6<br /><p className="code-desc">NEUTRAL</p></Button>
        <Button color="primary"  onClick={this.props.ratingChange.bind(null, 7)}>7<br /><p className="code-desc">Info Exchange and Responses</p></Button>
        <Button color="primary"  onClick={this.props.ratingChange.bind(null, 8)}>8<br /><p className="code-desc">Active Interest, Curiosity, Low Val</p></Button>
        <Button color="primary"  onClick={this.props.ratingChange.bind(null, 9)}>9<br /><p className="code-desc">Affection, Support, Empathy, High Val</p></Button>
        <Button color="primary"  onClick={this.props.ratingChange.bind(null, 10)}>10<br /><p className="code-desc">Shared Humor, Excitement, Happiness</p></Button>
      </div>
    );
  }
}

export default RatingDials;
