export interface WeatherInfo {
    message: string;
    weatherInfo: {
        country?: string;
        city?: string;
        temp?: number;
        sunset?: number;
        pressure?: number;
    };
}
export type RootState = {
    weather: WeatherState; 
}

export interface WeatherState {
    weatherInfo: WeatherInfo;
    message: string;
}