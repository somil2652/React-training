// Create a functional component called Counter.
// Inside the component, use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// When the user clicks on the buttons, update the count state accordingly.

import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count} </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
