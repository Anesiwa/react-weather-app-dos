import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);
  let apikey = "71955e43f0f1579de7523a19b31d90b6";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

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
