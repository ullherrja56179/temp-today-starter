import {CityName} from "../data/cities";
import {useEffect, useState} from "react";
import {WeatherApiResponse} from "../types/WeatherData";
import {fetchWeather} from "../utils/fetchWeather";

const useWeatherData = () => {

    const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null)
    const [location, setLocation] = useState<CityName>("Berlin")

    useEffect(() => {

        const fetchWeatherCall = async () => {
            const data = await fetchWeather(location)
            data ? setWeatherData(data) : console.log("Request failed for unknown reason")
        }

        fetchWeatherCall();
    }, [location]);

    const temperatures = weatherData?.hourly?.temperature_2m;
    const averageTemperature = temperatures ? temperatures.reduce((accum, curr) => accum + curr, 0) / temperatures.length : undefined;
    const windSpeed = weatherData?.current.wind_speed_10m
    const humidity = weatherData?.current.relative_humidity_2m;

    return {
        averageTemperature: averageTemperature,
        windSpeed: windSpeed,
        humidity: humidity,
        setLocation: setLocation,
    }
}

export default useWeatherData;
