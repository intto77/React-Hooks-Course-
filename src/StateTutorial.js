import React from "react";

const StateTutorial = () => {
  let counter = 0;
  const incremet = () => {
    counter = counter + 1;
    console.log(counter);
  };

  return (
    <div>
      {counter}
      <button onClick={incremet}>incremet</button>
    </div>
  );
};

export default StateTutorial;
