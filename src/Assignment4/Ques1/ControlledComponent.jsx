// Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.

import React, { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState("");

  return (
    <>
      <p>Welcome {name}</p>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
    </>
  );
};
export default ControlledComponent;
