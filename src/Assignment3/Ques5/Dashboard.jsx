import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <p>Dashboard</p>
      <nav>
        <ul>
          <li>
            <Link to="/assignment5/profile">Profile</Link>
          </li>
          <li>
            <Link to="/assignment5/setting">Setting</Link>
          </li>
          <li>
            <Link to="/assignment5/dhome">Dashboard Home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Dashboard;
