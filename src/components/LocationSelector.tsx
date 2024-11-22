import {cityCoordinates, CityName} from "../data/cities";
import {useState} from "react";
import {Picker} from "@react-native-picker/picker";
import {Alert, Platform, View} from "react-native";
import StyledButton from "./StyledButton";

const LocationSelector = () => {

    const cities = Object.keys(cityCoordinates)
    const [selectedCity, setSelectedCity] = useState<CityName>("Berlin");

    const handleCityChange = (city: CityName) => {
        setSelectedCity(city)
    }

    const handlePress = () => {
        const chosen = cityCoordinates[selectedCity]
        let title = "Error"
        let message = "Unknown City!"
        if (chosen !== undefined && chosen !== null) {
            title = "Location Set"
            message = "City: " + selectedCity.toUpperCase() + "\nLongitude: " + chosen.longitude + "\nLatitude: " + chosen.latitude
        }

        if (Platform.OS === "web") {
            window.alert(message)
        } else {
            Alert.alert(title, message)
        }
    }

    console.log("Selected City: " + selectedCity);

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
