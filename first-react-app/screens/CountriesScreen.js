import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import data from "../data/countries.json";

class CountriesScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            countries: []
        }
    }

    async componentDidMount() {
        this.setState({
            countries: data
        })
    }

   render() {
    return(
        <View>
            <Text>Countries Screen</Text>
            <FlatList
                keyExtractor={countries => countries.id}
                data={this.state.countries}
                renderItem={({item}) => (
                    <View style={styles.box}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text>{item.country}</Text>
                        <Text>{item.desc}</Text>
                        
                    </View>
                )}
            ></FlatList>
        </View>
    )
   } 
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        borderRadius: 6,
        margin: 5,
        padding: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default CountriesScreen;