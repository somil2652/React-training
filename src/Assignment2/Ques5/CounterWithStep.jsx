// Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.

import React from "react";
import { useState } from "react";

function CounterWithStep() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const handleChange = (event) => {
    setStep(event.target.value);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + parseInt(step))}>
        Increment
      </button>
      <button onClick={() => setCount(count - parseFloat(step))}>
        Decrement
      </button>
      <input
        type="number"
        placeholder="Enter Step Value:"
        value={step}
        onChange={handleChange}
      />
    </div>
  );
}

export default CounterWithStep;
