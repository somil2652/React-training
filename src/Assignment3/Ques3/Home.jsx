// creat pages: Home and About.
// Implement routing using React Router DOM.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.

import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h4> Welcome To Home Page</h4>
      <Link to="/assignment3/about">About</Link>
    </>
  );
};

export default Home;
