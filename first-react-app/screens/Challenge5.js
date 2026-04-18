import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';

const firstName = "Drilon";
const lastName = "Mahmudi";

let fullName = firstName + " " + lastName;
const birthday = "01.01.1990";

const hobbies = [
    {key: "1", name: "Football"},
    {key: "2", name: "Skiing"},
    {key: "3", name: "Coding"},
    {key: "4", name: "Swimming"},
    {key: "5", name: "Travelling"}
];
const Challenge5 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.infoSection}>
                <Text style={styles.heading}>Personal Info</Text>
                <Text style={styles.label}>Full Name: </Text>
                <Text style={styles.value}>{fullName}</Text>

                <Text style={styles.label}>Birthday: </Text>
                <Text style={styles.value}>{birthday}</Text>
            </View>

            <View style={styles.hobbiesSection}>
                <Text style={styles.heading}>My Hobbies</Text>
                <FlatList
                    data={hobbies}
                    keyExtractor={(item) => item.key}
                    renderItem={({item}) => {
                        return(
                            <Text style={styles.hobbyItem}>{item.name}</Text>
                        )
                    }}
                ></FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    infoSection: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    heading: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
        textAlign: "center",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#555",
        marginTop: 8,
    },
    value: {
        fontSize: 18,
        color: "#222",
        marginBottom: 5,
    },
    hobbiesSection: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        flex: 1,
    },
    hobbyItem: {
        fontSize: 18,
        color: "#2c6e49",
        padding: 10,
        marginVertical: 4,
        backgroundColor: "#e8f5e9",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#a5d6a7",
    },
});

export default Challenge5;
