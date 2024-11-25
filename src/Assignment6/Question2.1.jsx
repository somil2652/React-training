import React, { useEffect } from "react";

const HomeQ2 = () => {
  useEffect(() => {
    throw new Error("Error");
  }, []);
  return (
    <div>
      <p>Home Page</p>
    </div>
  );
};

export default HomeQ2;
