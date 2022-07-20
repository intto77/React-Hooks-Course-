import React, { useContext } from "react";
import { AppContenxt } from "./ContextTutorial";

const User = () => {
  const { username } = useContext(AppContenxt);

  return (
    <div>
      <h1>User : {username}</h1>
    </div>
  );
};

export default User;
