// Create an HOC named withAuth that restricts access to a specific component to authenticated users only. Implement this HOC on a sample component and demonstrate how it protects routes.

import React, { useState } from "react";

const withAuth = (WrappedComponent) => {
  return () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const correctUsername = "somil";
    const correctPassword = "12345";

    const handleAuthentication = () => {
      if (name !== correctUsername || password !== correctPassword) return;

      console.log("User authenticated!");
      setAuthenticated(true);
    };

    return isAuthenticated ? (
      <WrappedComponent />
    ) : (
      <div>
        <p>Login Form</p>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleAuthentication}>Authenticate</button>
      </div>
    );
  };
};

export default withAuth;
