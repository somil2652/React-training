// Extend the previous application to demonstrate the use of nested contexts.
// Create a new context to manage user preferences (e.g., theme preference).
// Modify the parent component to provide both the authentication and preferences contexts.
// Create a child component that consumes both contexts.
// Allow the user to change their theme preference (light/dark) using a button in the child component.
// Display the theme preference in the UI and adjust the component's styling accordingly.

import React, { createContext, useState } from "react";
import Child from "./Child";

export const ThemeContext = createContext();
export const UserContext = createContext();

export const Parent = ({ Children }) => {
  const [login, setLogin] = useState("Please Log In");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <UserContext.Provider value={{ login, setLogin }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Child />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};
