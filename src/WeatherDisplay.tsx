import {StyleSheet, Text, View} from "react-native";

type WeatherDisplayProps = {
    temperature: number,
    condition: string
}

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({temperature, condition}) => {
    return <View style={styles.weatherDisplay}>
        <Text style={styles.temperature}>{temperature} °C</Text>
        <Text style={styles.condition}>{condition}</Text>
    </View>
}

const styles = StyleSheet.create(
    {
        weatherDisplay: {
            paddingTop: 50,
            alignItems: "center",
            justifyContent: "center"
        },
        temperature: {
            fontWeight: "bold",
            fontSize: 35
        },
        condition: {
            paddingTop: 10,
            fontSize: 20,
            color: "grey"
        }
    }
)
