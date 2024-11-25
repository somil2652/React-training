// Create a component with controlled input field and a button. When the user enters a specific value into the input (e.g., "show"), a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed.

import React, { createContext, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("");
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(true);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button onClick={handleClick}>Show</button>

      {isShow && <Child message={message} />}
    </>
  );
};
export default Parent;
