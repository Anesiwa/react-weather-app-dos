import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="dateDetails">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li id="weatherDescription">{props.data.description}</li>
      </ul>

      <div className="row allDescriptions mt-1 mb-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                size={80}
                className="PrimaryIcon"
              />
            </div>

            <div className="float-left">
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="weatherParameters">
            <ul>
              <li>
                Humidity:{" "}
                <span id="humidity">{Math.round(props.data.humidity)}</span>%
              </li>
              <li>
                Wind: <span id="wind">{Math.round(props.data.wind)}</span> mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
