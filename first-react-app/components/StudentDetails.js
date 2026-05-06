import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

const StudentDetails = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
                <View style={styles.imgWrapper}>
                    <Image source={props.img} style={styles.img}></Image>
                </View>

                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.desc}>{props.desc}</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 15,
        alignItems: 'center'
    },
    img: {
        width: 150,
        height: 150,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },

    infoWrapper: {
        marginLeft: 20
    },

    name: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'darkblue'
    },
    desc: {
        color: "gray"
    }
})

export default StudentDetails;