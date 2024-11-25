// .Create a React component named Counter that displays a number and two buttons, one for incrementing the number and another for decrementing it. Write tests using React Testing Library to ensure that the component behaves as expected.

import React, { useState } from "react";

const Counter6 = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  return (
    <div>
      {count}
      <br />
      <button data-testid="inc" onClick={handleInc}>
        Increment
      </button>
      <br />
      <button data-testid="dec" onClick={handleDec}>
        Decrement
      </button>
    </div>
  );
};

export default Counter6;
