import React from "react";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/assignment3");
  };
  return (
    <>
      <h2>Setting</h2>
      <button onClick={handleClick}>Go Back</button>
    </>
  );
};
export default Setting;
