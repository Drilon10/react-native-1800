import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const Projects = (props) => {
    return(
        <View>
            <Image source={props.firstImg}></Image>
            <Image source={props.secondImg}></Image>
        </View>
    )
}

const styles = StyleSheet.create({});

export default Projects;