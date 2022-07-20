import { useState, useEffect, useCallback, useDebugValue } from "react";

export function useLocalStorage(key, defaultvalue) {
  const [value, setValue] = useState(() => {});

  useDebugValue(value, (v) => getValueSlowly(v));

  useEffect(() => {}, [key, value, localStorage]);

  const remove = useCallback(() => {}, []);

  return [value, setValue, remove];
}

function getValueSlowly(value) {
  for (let i = 0; i < 3000000000; i++) {}
  return value;
}
