import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import WeatherDisplay from "../components/WeatherDisplay";
import AdditionalInfo from "../components/AdditionalInfo";
import LocationSelector from "../components/LocationSelector";
import {WeatherApiResponse} from "../types/WeatherData";
import {cityCoordinates, CityName} from "../data/cities";
import axios from "axios/index";

const MainScreen = () => {

    const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null)
    const [location, setLocation] = useState<CityName>("Berlin")

    useEffect(() => {
        const fetchWeather = async () => {
            const coordinates = cityCoordinates[location]
            const requestConfig = {
                params: {
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
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
                setWeatherData(response.data)
            } else {
                console.log("Request failed for unknown reason.")
            }
        };

        fetchWeather();
    }, [location])

    const temperatures = weatherData?.hourly?.temperature_2m;
    const averageTemperature = temperatures ? temperatures.reduce((accum, curr) => accum + curr, 0) / temperatures.length : undefined;
    const windSpeed = weatherData?.current.wind_speed_10m
    const humidity = weatherData?.current.relative_humidity_2m;

    return (
        <View style={styles.container}>
            <View>
                {
                    (averageTemperature && windSpeed && humidity) ? (
                        <View>
                            <WeatherDisplay
                                temperature={averageTemperature}
                                condition={"Sunny"}/>
                            <AdditionalInfo windSpeed={windSpeed}
                                            humidity={humidity}/>
                        </View>
                    ) : (
                        <Text>Could not retrieve weather data.</Text>
                    )
                }
            </View>
            <LocationSelector setLocation={setLocation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignSelf: 'stretch',
        paddingHorizontal: 10,
    }
});

export default MainScreen;
