import { useDebugValue, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const LocalStorageTutorial = () => {
  const [firstName, setFirstName] = useLocalStorage("firstName", "kyle");
  const [lastName, setLastName] = useState("Cook");

  useDebugValue(firstName);

  return (
    <div>
      First :{" "}
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <br />
      Last :{" "}
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
  );
};

export default LocalStorageTutorial;
