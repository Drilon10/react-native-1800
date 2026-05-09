import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';
import Projects from '../components/Projects';


const ProfileScreen = () => {
    return(
        <View style={styles.screen}>
            <ProfileInfo
                fullname="Loran Iseni"
                jobPosition="Fullstack Developer"
                desc="Passionate fullstack developer with over 5 years experience"
                image={require('../assets/loran.jpeg')}
            ></ProfileInfo>

            <View style={styles.heading}>
                <Text style={styles.text}>PROJECTS</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>View All</Text>
                </TouchableOpacity>
            </View>

            <Projects
                firstImg={require('../assets/ajan.jpeg')}
                secondImg={require('../assets/memet.jpeg')}
            ></Projects>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ProfileScreen;