import React from "react";
import { Text, StyleSheet, View, FlatList, ScrollView } from "react-native";
import data from '../data/products.json';
import Products from "../components/Products";

class ProductsScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.setState({products: data});
    }

   render() {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Best Selling</Text>
                <FlatList
                    data={this.state.products}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>(
                        <View>
                            <Products
                                name={item.name}
                                category={item.category}
                                price={item.price}
                                stock={item.stock}
                                img={item.image}
                                desc={item.description}
                            ></Products>
                        </View>
                    )}
                ></FlatList>
            </View>
        </ScrollView>
    )
   } 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        borderRadius: 6,
        margin: 5,
        padding: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default ProductsScreen;
