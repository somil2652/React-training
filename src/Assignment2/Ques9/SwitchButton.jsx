import React from "react";
import { useTheme } from "./ThemeContext";

function SwitchButton() {
  const { theme, toggleTheme } = useTheme();

  const divStyle = {
    backgroundColor: theme === "dark" ? "black" : "white",
  };

  return (
    <div style={divStyle}>
      <p style={{ color: "red" }}>Hello Everyone</p>

      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default SwitchButton;
