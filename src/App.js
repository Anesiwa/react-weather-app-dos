import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Weather defaultCity="London" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
