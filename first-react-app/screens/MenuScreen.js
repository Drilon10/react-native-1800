import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuScreen = () => {
    return(
        <View>
            <Text style={styles.text}>Welcome to Menu Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVerical: 20
    }
});

export default MenuScreen;