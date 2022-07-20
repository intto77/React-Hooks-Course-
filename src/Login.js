import React, { useContext } from "react";
import { AppContenxt } from "./ContextTutorial";

const Login = () => {
  const { setUsername } = useContext(AppContenxt);

  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
    </div>
  );
};

export default Login;
