import React, { Fragment } from "react";
import { Button } from "reactstrap";
import { CODES } from "../shared/codes";

const RatingDials = props => {
  const showButtons = CODES.map(code => {
    return (
      <Fragment key={code.id}>
        <Button
          color="primary"
          onClick={props.ratingChange.bind(null, code.id)}
        >
          {code.id}
          <br />
          <p className="code-desc">{code.description}</p>
        </Button>
      </Fragment>
    );
  });
  return <div className="row">{showButtons}</div>;
};

export default RatingDials;
