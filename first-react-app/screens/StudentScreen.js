import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import StudentDetails from '../components/StudentDetails';

const StudentScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails name="Ellie"></StudentDetails>
            <StudentDetails name="Naron"></StudentDetails>
            <StudentDetails name="Baron"></StudentDetails>
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