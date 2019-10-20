import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import { CODES } from "../shared/codes";

class RatingDials extends Component {
  render() {
    const showButtons = CODES.map(code => {
      return (
        <Fragment key={code.id}>
          <Button
            color="primary"
            onClick={this.props.ratingChange.bind(null, code.id)}
          >
            {code.id}
            <br />
            <p className="code-desc">{code.description}</p>
          </Button>
        </Fragment>
      );
    });
    return <div className="row">{showButtons}</div>;
  }
}

export default RatingDials;
