import React, { Component } from 'react';


export default function RatingConsole(props) {
  const button = props.codes.map(({ id }) => {
    return (
      <button
        key={id}
        value={id}
        className="ratingBtn"
        onClick={() =>
          props.changeCode(id)
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

}
