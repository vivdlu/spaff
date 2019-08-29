import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';

class RatingDials extends Component {

  constructor(props) {
      super(props);
      this.state = {
        codes: this.props.codes
      };
    }

  render() {

    const showButtons = this.props.codes.map((code) => {
      return (
        <Fragment key={code.id}>
          <Button color="primary"  onClick={this.props.ratingChange.bind(null, code.id)}>{code.id}<br /><p className="code-desc">{code.description}</p></Button>
        </Fragment>
      );
    });

    return (
      <div className="row">
        {showButtons}
      </div>
    )
  }
}

export default RatingDials;
