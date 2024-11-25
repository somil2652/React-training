// Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.

import React, { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState("false");
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = () => {
    if (checked === "false") {
      setChecked("true");
    } else {
      setChecked("false");
    }
  };
  const handleRadio = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleClick = () => {
    console.log({ name });
    console.log({ checked });
    console.log({ selectedOption });
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <br />
      <label>
        <input type="checkbox" onChange={handleChange} value={checked} />
        Save Info
      </label>
      <br />
      <br />
      <label>
        <input
          type="radio"
          value="HTML"
          name="language"
          onChange={handleRadio}
        />
        HTML
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="CSS"
          name="language"
          onChange={handleRadio}
        />
        CSS
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Javascript"
          name="language"
          onChange={handleRadio}
        />
        Javascript
      </label>
      <br />
      <br />
      <button onClick={handleClick}>Submit</button>
    </>
  );
};
export default ControlledForm;
