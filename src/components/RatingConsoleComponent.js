import React from 'react';

function RatingConsole({codes, changeCode}) {

  function handleChange(event) {
    changeCode(event.target.value);
  }

  if (codes != null) {

    const button = codes.map((code) => {
      return (
        <button
        key={code.id}
        value={code.id}
        className="ratingBtn"
        onClick={
          (event) => handleChange(event)
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

export default RatingConsole;
