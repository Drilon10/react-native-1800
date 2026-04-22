import react from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

let counter = 0;
let counter2 = 0;

const ButtonScreen = () => {
    return(
        <View>
            <Text style={styles.textStyle}>Button Screen</Text>
            <Button 
                title="Click Me"
                color="purple"
                onPress={
                    () => console.log('Button Clicked', counter++)
                }
            ></Button>

            <TouchableOpacity
                style={styles.touchableBtn}
                onPress={() => alert("Touchable Element Clicked", counter2++)}
            >
                <Text style={styles.btnTxt}>Touchable Element</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 35,
        marginBottom: 10
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

export default ButtonScreen;