import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {

    return(
        <View style={styles.viewStyle}>
            {/* <Text style={styles.textStyle}>Box Screen</Text> */}
            <View style={styles.redBox}></View>
            <View style={styles.orangeBox}></View>
            <View style={styles.greenBox}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'darkred',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 20,
        padding: 20,
        textAlign: 'center'
    },
    redBox: {
        backgroundColor: '#e0423e',
        width: 50,
        height: 50
    },
    orangeBox: {
        backgroundColor: '#efa93a',
        width: 50,
        height: 50
    },
    greenBox: {
        backgroundColor: '#5fbb7a',
        width: 50,
        height: 50
    }
});

export default BoxScreen;