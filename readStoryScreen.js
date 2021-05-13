import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class readStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
             <Text>Read Story</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
container:{
    flex: 2 ,
    alignItems: 'center',
    justifyContent: 'center'
}
})