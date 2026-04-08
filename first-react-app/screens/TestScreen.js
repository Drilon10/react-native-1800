import React from "react";
import { Text, StyleSheet, View } from "react-native";

const TestScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>This is Test Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff0000",
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 30,
        color: 'white'
    }
});

export default TestScreen;