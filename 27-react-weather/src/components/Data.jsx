import { api_key, base_url } from "../utils/constants";
import { useState } from 'react'
import React from 'react';
import Form from './Form'
import Weather from './Weather'


const Data = () => {
const [weatherInfo, setWeatherInfo] = useState({});
const [message, setMessage] = useState('Enter city name');

const getWeather = async city => {
    try{
    const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
    const data = await response.json();
         setWeatherInfo({
            city:data.name,
            country:data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset
        });
        setMessage('');
    }catch(e) {
        setMessage('Enter correct city name');
    }
}

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather message={message} weather={weatherInfo}/>
        </div>
    )
}

export default Data