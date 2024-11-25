// // Create a theme switcher application using the useContext hook.
// // Create a context to manage the current theme (e.g., light or dark).
// // Provide a button to toggle between the two themes.
// // Use the useContext hook to access the theme value and update it.
// // Apply different styles and colors to components based on the selected theme.

import React from "react";
import ThemeProvider from "./ThemeContext";
import SwitchButton from "./SwitchButton";

function ThemeSwitcher() {
  return (
    <ThemeProvider>
      <div className="App">
        <SwitchButton />
      </div>
    </ThemeProvider>
  );
}

export default ThemeSwitcher;
