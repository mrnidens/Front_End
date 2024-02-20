const Weather = ({weather}) => {
  return (
    <div>
<p>Location: {weather.country}, {weather.city}</p>
<p>Temp: {weather.temp}</p>
<p>Pressure: {weather.pressure}</p>
<p>Sunset: {weather.sunset}</p>
    </div>
  )
}

export default Weather