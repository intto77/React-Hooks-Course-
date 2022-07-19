import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  return (
    <div>
      <input placeholder="enter something" />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
