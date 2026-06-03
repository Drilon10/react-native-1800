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
            <Text>Posts Screen</Text>
            <FlatList
                keyExtractor={posts => posts.id}
                data={posts}
                renderItem={({item}) => (
                    <View style={styles.box}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>{item.body}</Text>
                        
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

export default PostsScreen;