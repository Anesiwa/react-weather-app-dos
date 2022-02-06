import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="DailyForecast-day">Sat</div>
          <WeatherIcon code="01d" size={36} />
          <div className="DailyForecast-temps">
            <span className="DailyForecast-temp-max">19</span>
            <span className="DailyForecast-temp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
