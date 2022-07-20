import React, { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEfectTutorial = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        ref={inputRef}
        value="PEDRO"
        style={{ width: 400, height: 100 }}
      />
    </div>
  );
};

export default LayoutEfectTutorial;
