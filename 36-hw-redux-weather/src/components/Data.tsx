import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Weather from './Weather';
import { setWeather, setMessage } from '../actions/weatherActions';
import { api_key, base_url } from '../utils/constants';
import { RootState } from '../utils/type';

const Data = () => {
    const weatherInfo = useSelector((state: RootState) => state.weather.weatherInfo);
    const message = useSelector((state: RootState) => state.weather.message);
    const dispatch = useDispatch();

    const getWeather = async (city: string) => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await response.json();
            dispatch(setWeather({
                message: 'Some message',
                weatherInfo: {
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                }
            }));
            dispatch(setMessage(''));
        } catch (e) {
            dispatch(setMessage('Enter correct city name'));
        }
    }

    return (
        <div>
            <Form getWeather={getWeather} />
            <Weather message={message} weather={weatherInfo} />
        </div>
    )
}

export default Data;