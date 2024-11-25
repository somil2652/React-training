import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "./Parent";

function Child() {
  const { login, setLogin } = useContext(UserContext);
  const [name, setName] = useState("");

  const handleClick = () => {
    setLogin(`Welcome ${name}`);
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <button onClick={handleClick}>Login</button>
      <p>{login}</p>
    </>
  );
}
export default Child;
