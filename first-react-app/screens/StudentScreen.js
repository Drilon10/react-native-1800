import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import StudentDetails from '../components/StudentDetails';

const StudentScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails 
                name="Loran Iseni"
                img={require('../assets/loran.jpeg')}
                desc="Professional Football Player from Gorno Sedlarce"
            >
            </StudentDetails>
            <StudentDetails 
                name="Ajan Memeti"
                img={require('../assets/ajan.jpeg')}
                desc="Professional Skier from Pallatica"
            >
            </StudentDetails>
            <StudentDetails 
                name="Memet Aliji"
                img={require('../assets/memet.jpeg')}
                desc="Professional Programmer from Zhelini"
            >
            </StudentDetails>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
})

export default StudentScreen;