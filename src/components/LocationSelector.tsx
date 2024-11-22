import {cityCoordinates, CityName} from "../data/cities";
import React, {useState} from "react";
import {Picker} from "@react-native-picker/picker";
import {View} from "react-native";
import StyledButton from "./StyledButton";

type LocationSelectorProps = {
    setLocation: (city: CityName) => void
}

const LocationSelector: React.FC<LocationSelectorProps> = ({setLocation}) => {

    const cities = Object.keys(cityCoordinates)
    const [selectedCity, setSelectedCity] = useState<CityName>("Berlin");

    const handleCityChange = (city: CityName) => {
        setSelectedCity(city)
    }

    const handlePress = () => {
        const chosen = cityCoordinates[selectedCity]
        if (chosen !== undefined && chosen !== null) {
            setLocation(selectedCity)
        }
    }

    console.log(selectedCity.toUpperCase() + " -> Longitude: " + cityCoordinates[selectedCity].longitude + "Latitude: " + cityCoordinates[selectedCity].latitude)

    return <View className={"m-5"}>
        <Picker onValueChange={handleCityChange} selectedValue={selectedCity}>
            {cities.map((city) => (
                <Picker.Item key={city} label={city} value={city}/>
            ))}
        </Picker>
        <StyledButton onPress={handlePress}>Set Location</StyledButton>
    </View>

}


export default LocationSelector;
