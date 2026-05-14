import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const MenuScreen = (props) => {
    console.log(props);
    return(
        <View>
            <Text style={styles.text}>Welcome to Menu Screen</Text>
            <Button title="Go to List Screen" 
            onPress={() => props.navigation.navigate('List')}>
            </Button>
            <TouchableOpacity
                style={styles.touchableBtn}
                onPress={() => props.navigation.navigate('Students')}
                >
                <Text style={styles.btnTxt}>Go to Students Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.touchableBtn}
                onPress={() => props.navigation.navigate('Profile')}
                >
                <Text style={styles.btnTxt}>Go to Profile Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.touchableBtn}
                onPress={() => props.navigation.navigate('Box')}
                >
                <Text style={styles.btnTxt}>Go to Box Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVerical: 20
    },
    touchableBtn: {
       backgroundColor: "darkred",
       marginVertical: 15,
       paddingVertical: 20,
       borderRadius: 6,
       marginHorizontal: 20 
    },

    btnTxt: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    }
});

export default MenuScreen;