import React from "react";
import { WeatherInfo } from "../utils/type";

interface Props {
  message: string;
  weather: WeatherInfo;
}

const Weather = ({ weather, message }: Props) => {
  return (
    <div className='infoWeath'>
      {!message && (
        <>
          <p>Location: {weather.weatherInfo.country}, {weather.weatherInfo.city}</p>
          <p>Temp: {weather.weatherInfo.temp}</p>
          <p>Pressure: {weather.weatherInfo.pressure}</p>
          <p>Sunset: {new Date(weather.weatherInfo.sunset! * 1000).toLocaleTimeString()}</p>
        </>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Weather;