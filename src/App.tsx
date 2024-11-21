import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native";

import "../global.css";
import MainScreen from "./screens/MainScreen";
import {Header} from "./components/Header";
import React from "react";

const App = () => {
    return (<SafeAreaView style={{flex: 1}}>
        <StatusBar style="auto"/>
        <Header/>
        <MainScreen/>
    </SafeAreaView>);
}

export default App
