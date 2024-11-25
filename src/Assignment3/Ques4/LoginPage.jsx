// Enhance the previous application by adding protected routes that require authentication.
// Create a login page with a form that accepts a username and password.
// Implement authentication logic (e.g., hardcode a username and password for now).
// Secure the About page so that it can only be accessed by authenticated users.
// Redirect unauthenticated users to the login page.
// Display a message on the Home page welcoming the authenticated user.

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const hardcodeUsername = "somil_kaushik";
  const hardcodePassword = "somil123";

  const handleClick = () => {
    if (userName === hardcodeUsername && password === hardcodePassword) {
      navigate("/assignment4/about");
    } else {
      navigate("/assignment4/login");
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleClick}>Login</button>
      </form>
    </>
  );
}

export default LoginPage;
