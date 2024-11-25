// Construct a select dropdown menu with multiple options. Control the selected option using state. When an option is selected, display a message showing the selected value.

import React, { useState } from "react";

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState("UP");
  return (
    <>
      <p> SELECT STATE</p>
      <select
        name="Options"
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="UP">UP</option>
        <option value="Haryana">Haryana</option>
        <option value="Assam">Assam</option>
        <option value="Punjab">Punjab</option>
      </select>
      <p>Your State is : {selectedOption}</p>
    </>
  );
};

export default DropDown;
