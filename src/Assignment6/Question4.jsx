// You are given a simple form component (LoginForm) that contains input fields for username and password, as well as a submit button. Create test cases to verify that the form fields can be filled, and the submit button works correctly.

import React, { useState } from "react";

const LoginQ4 = () => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleName = (e) => {
    setUname(e.target.value);
  };
  const handlePassword = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = () => {
    setIsButtonClicked(true);
  };
  return (
    <div>
      <input
        type="text"
        data-testid="name"
        placeholder="username"
        onChange={handleName}
      />
      <input
        type="password"
        data-testid="pass"
        placeholder="password"
        onChange={handlePassword}
      />
      <button data-testid="subBtn" onClick={handleSubmit}>
        Submit
      </button>
      {isButtonClicked && <p>Welcome {uname}</p>}
    </div>
  );
};

export default LoginQ4;
