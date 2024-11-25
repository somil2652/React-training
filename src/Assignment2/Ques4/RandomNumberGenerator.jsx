// Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.

import React from "react";
import { useState } from "react";

function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const handleClick = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div>
      <h4>Random Number is: {randomNumber}</h4>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default RandomNumberGenerator;
