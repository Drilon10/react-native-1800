import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Product = (props) => {
    return(
        <View style={styles.cardContainer}>
            <Image 
                source={{uri: `${props.img}`}}
                style={styles.img}
            ></Image>
            <View style={styles.cardDesc}>
                <Text>{props.name}</Text>
                <Text>{props.desc}</Text>
                <View style={styles.footer}>
                    <Text>{props.stock}</Text>
                    <Text>{props.price}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10
    },
    img: {
        width: 750,
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Product;