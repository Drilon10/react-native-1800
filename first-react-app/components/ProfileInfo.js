import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const ProfileInfo = (props) => {
    return(
        <View>
            <Image source={props.image}></Image>
            
            <View>
                <Text>{props.fullname}</Text>
                <Text>{props.jobPosition}</Text>
                <Text>{props.desc}</Text>
                <TouchableOpacity>
                    <Text>Hire Me</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ProfileInfo;