import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContenxt = createContext(null);

const ContextTutorial = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContenxt.Provider value={(username, setUsername)}>
      <Login /> <User />
    </AppContenxt.Provider>
  );
};

export default ContextTutorial;
