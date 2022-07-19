import React, { useState } from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);

  const incremet = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {counter}
      <button onClick={incremet}>incremet</button>
    </div>
  );
};

export default StateTutorial;
