import {Text, View, StyleSheet} from "react-native";

export const Header = () => {
    return <View style={styles.header}>
        <Text style={styles.text}>Temp Today</Text>
    </View>
}

const styles = StyleSheet.create(
    {
        header: {
            paddingVertical: 10,
            backgroundColor: "#2a78f6",
            alignItems: "center",
            justifyContent: "center",
        },
        text: {
            fontSize: 25,
            color: "white",
            fontWeight: "bold"
        }
    }
)

