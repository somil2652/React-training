// Extend the application to include nested routes for a more complex user interface.
// Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
// Implement nested routing within this section using nested routes.
// Add navigation links to switch between the sub-pages within the Dashboard section.
// Customize the content displayed on each sub-page.

import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/assignment3");
  };
  return (
    <>
      <p>Home</p>
      <button onClick={handleClick}>Go Back</button>
    </>
  );
};
export default DashboardHome;
