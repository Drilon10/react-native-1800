import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';

const students = [
    {name: "Ademola", lastname: "Lookman", age: "30"},
    {name: "Diego", lastname: "Simeone", age: "67" },
    {name: "We will win", lastname: "Next Year", age: "2080" }
];
const ListScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>List of Students</Text>
            <FlatList
                data={students}
                renderItem={({item}) => {
                    return <Text style={styles.studentWrapper}>
                        {item.name} {item.lastname} - {item.age}
                    </Text>
                }}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        color: "darkred",
        margin: 10
    },
    studentWrapper: {
        fontSize: 20,
        color: 'green',
        padding: 10,
        borderWidth: 2,
        borderColor: 'darkgreen',
        margin: 5
    }
});

export default ListScreen;