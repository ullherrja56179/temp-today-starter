import { StatusBar } from "expo-status-bar";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Header} from "./Header";

import "../global.css";
import {WeatherDisplay} from "./WeatherDisplay";

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <Header />
        <View style={styles.container}>
            <WeatherDisplay temperature={25} condition={"Sunny"} />
            <StatusBar style="auto" />
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
