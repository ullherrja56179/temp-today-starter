import {StyleSheet, Text, View} from "react-native";
import WeatherDisplay from "../components/WeatherDisplay";
import AdditionalInfo from "../components/AdditionalInfo";
import LocationSelector from "../components/LocationSelector";
import useWeatherData from "../hooks/useWeatherData";
import weatherStore from "../stores/WeatherStore";
import {observer} from "mobx-react";
import React from "react";

const MainScreen: React.FC = () => {
    const {averageTemperature} = useWeatherData();
    const {humidity, windSpeed, setLocation } = weatherStore;

    console.log("TEMP: " + averageTemperature + " HUM: " + humidity + " SPE: " + windSpeed);

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

export default observer(MainScreen);
