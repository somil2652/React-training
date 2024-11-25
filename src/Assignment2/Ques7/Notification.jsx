// Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.

import React from "react";
import { useState, useEffect } from "react";

function Notification() {
  const [message, setMessage] = useState("");
  // const [count, setCount] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  const handleChange = (event) => {
    setMessage(event.target.value);
    // setTimeout(() => {
    //   setCount((prev) => prev - 1);
    // }, 1000);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your message:"
        value={message}
        onChange={handleChange}
      />
      <p>{message}</p>
    </div>
  );
}

export default Notification;
