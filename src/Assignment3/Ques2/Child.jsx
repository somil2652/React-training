import React from "react";
import { useState, useContext } from "react";
import { ThemeContext, UserContext } from "./Parent";

const Child = () => {
  const { login, setLogin } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [name, setName] = useState("");

  const divStyle = {
    backgroundColor: theme === "dark" ? "black" : "white",
  };

  const handleClick = () => {
    setLogin(`Welcome ${name}`);
  };

  return (
    <div style={divStyle}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <button onClick={handleClick}>Login</button>
      <p style={{ color: "red" }}>{login}</p>

      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        Switch Theme
      </button>
    </div>
  );
};
export default Child;
