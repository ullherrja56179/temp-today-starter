import {StatusBar} from "expo-status-bar";
import {SafeAreaView, StyleSheet, View} from "react-native";
import {Header} from "./Header";

import "../global.css";
import {WeatherDisplay} from "./WeatherDisplay";

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar style="auto"/>
            <Header/>
            <View style={styles.container}>
                <WeatherDisplay temperature={30} condition={"Sunny"}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});

export default App
