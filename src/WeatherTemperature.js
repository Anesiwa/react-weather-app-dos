import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return (props.fahrenheit - 32) * (5 / 9);
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          ºF |{" "}
          <a href="/" onClick={showCelsius} className="disabledLink">
            ºC
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="units">
          <a href="/" onClick={showFahrenheit} className="disabledLink">
            ºF
          </a>{" "}
          | ºC
        </span>
      </div>
    );
  }
}
