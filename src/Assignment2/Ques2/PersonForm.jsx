// Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

import React from "react";
import { useState } from "react";

function PersonForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" onChange={handleFirstName} />
          <p>{firstName}</p>
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" onChange={handleLastName} />
          <p>{lastName}</p>
        </label>

        <label>
          Age:
          <input type="text" name="age" onChange={handleAge} />
          <p>{age}</p>
        </label>
      </form>
    </div>
  );
}

export default PersonForm;
