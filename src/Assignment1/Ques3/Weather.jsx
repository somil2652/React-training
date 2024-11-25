import React from "react";

function Weather({ temp }) {
  return (
    <div>
      {temp.map((value) => {
        let displayMsg = "";
        if (parseFloat(value) > 25) {
          displayMsg = "It's sunny today!";
        } else if (parseFloat(value) < 10) {
          displayMsg = "It's cold today!";
        } else {
          displayMsg = "Normal";
        }
        return <p key={value}>{displayMsg}</p>; //
      })}
    </div>
  );
}

export default Weather;
