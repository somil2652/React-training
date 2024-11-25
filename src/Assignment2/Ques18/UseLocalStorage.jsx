// Design a custom hook named useLocalStorage to interact with local storage.
// Create a useLocalStorage hook that allows storing and retrieving data from local storage.
// Implement methods for setting, getting, and removing data using the hook.
// Utilize the localStorage API within the hook to manage data.
// Develop a component that uses the useLocalStorage hook to manage user preferences.

import React from "react";
import { useState } from "react";

function useLocalStorage(key, val) {
  const getVal = localStorage.getItem(key);
  const initialVal = getVal ? JSON.parse(getVal) : val;
  console.log(key);
  console.log(val);

  const [value, setValue] = useState(initialVal);

  const setStoredValue = (updateVal) => {
    setValue(updateVal);
    localStorage.setItem(key, JSON.stringify(updateVal));
  };

  const deleteValue = () => {
    setValue(val);
    localStorage.removeItem(key);
  };

  return [value, setStoredValue, deleteValue];
}
export default useLocalStorage;
