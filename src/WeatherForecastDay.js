import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.temp.max);
    return `${temperature}º`;
  }
  function minTemp() {
    let temperature = Math.round(props.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date()(props.date.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="DailyForecast-day">{day()}</div>
      <WeatherIcon code={props.data[0].weather[0].icon} size={36} />
      <div className="DailyForecast-temps">
        <span className="DailyForecast-temp-max">{maxTemp()}º</span>
        <span className="DailyForecast-temp-min">{minTemp()}º</span>
      </div>
    </div>
  );
}
