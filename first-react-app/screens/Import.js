import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

class PostsScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        this.setState({posts: jsonData});
    }

   render() {
    const {posts} = this.state;
    return(
        <View>
        </View>
    )
   } 
}

const styles = StyleSheet.create({

});

export default PostsScreen;