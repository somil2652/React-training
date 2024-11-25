import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/assignment3");
  };
  return (
    <>
      <h2>Profile</h2>
      <button onClick={handleClick}>Go Back</button>
    </>
  );
};
export default Profile;
