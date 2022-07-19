import React, { useState } from "react";

const ReducerTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setShowText(!showText);
        }}
      >
        Click Here
      </button>

      {showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
