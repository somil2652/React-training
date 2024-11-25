import React from "react";

function Child({ incrementCount, count, resetCount }) {
  return (
    <div>
      <h2>Count in Child: {count}</h2>
      <button onClick={resetCount}>Reset Count</button>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}
export default Child;


