// Build a registration form with two password fields. Implement controlled components for both password inputs. Add a validation rule to ensure that the two passwords match before allowing the form submission.

import React, { useState } from "react";

const Password = () => {
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [isMatched, setIsMatched] = useState(false);

  const handleClick = () => {
    if (pass === rePass) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
  };
  return (
    <>
      <p>LOGIN FORM:</p>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setRePass(e.target.value)}
        value={rePass}
      />
      <br />
      <br />
      <button onClick={handleClick}>Submit</button>
      {isMatched ? <p>Login Successfully!</p> : <p>Enter Password</p>}
    </>
  );
};
export default Password;
