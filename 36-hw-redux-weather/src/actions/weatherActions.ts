import { WeatherInfo } from "../utils/type";

export const SET_WEATHER = 'SET_WEATHER';
export const SET_MESSAGE = 'SET_MESSAGE';

export const setWeather = (weatherInfo: WeatherInfo) => ({
  type: SET_WEATHER,
  payload: weatherInfo
});

export const setMessage = (message: string) => ({
  type: SET_MESSAGE,
  payload: message
});