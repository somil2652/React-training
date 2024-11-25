// create two components: a parent component that acts as a provider and a child component that consumes the context.
// Create a context to manage a user's authentication status (logged in or out).
// Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
// Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in."

import React, { Children, createContext, useState } from "react";
import Child from "./Child";

export const UserContext = createContext();

export const Parent = ({ Children }) => {
  const [login, setLogin] = useState("Please Log In");

  return (
    <>
      <UserContext.Provider value={{ login, setLogin }}>
        <Child />
      </UserContext.Provider>
    </>
  );
};
