import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props) {
    const {navigation} = props;



    return (
        <View style={styles.boton}>
            <Text>Home</Text>
            <Button title="Ir about" onPress={()=> navigation.navigate('about') } />
            <Button title="Ir contac" onPress={()=> navigation.navigate('contact') } />
            <Button title="Ir courses" onPress={()=> navigation.navigate('courses', {screen : 'courses'}) } />
        </View>
    )
}

const styles = StyleSheet.create({
    boton : {
        backgroundColor : 'red',
        flex : 1,
        padding : 10
    }
})
