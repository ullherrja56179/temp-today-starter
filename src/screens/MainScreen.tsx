import React from "react";
import { View, StyleSheet } from "react-native";
import {Header} from "../components/Header";
import WeatherDisplay from "../components/WeatherDisplay";
import AdditionalInfo from "../components/AdditionalInfo";
import StyledButton from "../components/StyledButton";
import LocationSelector from "../components/LocationSelector";

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <WeatherDisplay temperature={30} condition={"Sunny"}/>
                <AdditionalInfo windSpeed={20} humidity={30}/>
            </View>
            <LocationSelector />
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
