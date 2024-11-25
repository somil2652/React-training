import React from "react";
import Button from "./Question12.1";

const Sample = () => {
  const handleClickPrimary = () => {
    alert("Primary Button");
  };
  const handleClickSecondary = () => {
    alert("Secondary Button");
  };
  const handleClickDanger = () => {
    alert("Danger Button");
  };
  return (
    <>
      <p>Sample Buttons:</p>
      <Button styles="primary" onClick={handleClickPrimary}>
        Primary
      </Button>
      <br />
      <br />
      <Button styles="secondary" onClick={handleClickSecondary}>
        Secondary
      </Button>
      <br />
      <br />
      <Button styles="danger" onClick={handleClickDanger}>
        Danger
      </Button>
    </>
  );
};

export default Sample;
