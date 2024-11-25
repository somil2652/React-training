// Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. Implement controlled components for both inputs. When the user enters a value in one input, the other input should update with the converted temperature.

import React, { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    setCelsius(celsiusValue);
    setFahrenheit(fahrenheitValue);
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
    setCelsius(celsiusValue);
    setFahrenheit(fahrenheitValue);
  };

  return (
    <>
      <input
        type="number"
        placeholder="In Celsius"
        onChange={handleCelsiusChange}
        value={celsius}
      />
      <input
        type="number"
        placeholder="In Fahrenheit"
        onChange={handleFahrenheitChange}
        value={fahrenheit}
      />
    </>
  );
};
export default TemperatureConverter;
