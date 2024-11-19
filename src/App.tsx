import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import "../global.css";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Temp Today!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
