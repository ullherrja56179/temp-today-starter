import {cityCoordinates, CityName} from "../data/cities";
import axios from "axios";
import {WeatherApiResponse} from "../types/WeatherData";

export const fetchWeather = async (city: CityName) => {
    const {latitude, longitude} = cityCoordinates[city]
    const requestConfig = {
        params: {
            latitude: latitude,
            longitude: longitude,
            current: "relative_humidity_2m,wind_speed_10m",
            hourly: "temperature_2m",
            timezone: "Europe/Berlin",
            past_days: 0,
            forecast_days: 1,
        }
    }

    const response = await axios.get<WeatherApiResponse>(
        "https://api.open-meteo.com/v1/forecast",
        requestConfig
    )

    if (response.status === 200) {
        return response.data
    } else {
        return undefined
    }
}
