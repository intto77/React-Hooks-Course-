import { useState } from "react";
import Login from "./Login";
import User from "./User";

const ContextTutorial = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <Login setUsername={setUsername} /> <User username={username} />
    </div>
  );
};

export default ContextTutorial;
