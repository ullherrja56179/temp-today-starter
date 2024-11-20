import {StatusBar} from "expo-status-bar";
import {SafeAreaView, StyleSheet, View} from "react-native";
import {Header} from "./components/Header";

import "../global.css";
import AdditionalInfo from "./components/AdditionalInfo";
import StyledButton from "./components/StyledButton";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
    return (<SafeAreaView style={{flex: 1}}>
            <StatusBar style="auto"/>
            <Header/>
            <View style={styles.container}>
                <WeatherDisplay temperature={30} condition={"Sunny"}/>
                <AdditionalInfo windSpeed={20} humidity={30}/>
                <StyledButton title={"Refresh"} onPress={() => console.log("Button Pressed")}/>
            </View>
        </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "flex-start",
    },
});

export default App
