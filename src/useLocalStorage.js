import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  const saveValue = JSON.parse(localStorage.getItem(key));

  if (saveValue instanceof Function) return initialValue();
  return initialValue;
}

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key.JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
