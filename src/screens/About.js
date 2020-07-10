import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function About(props) {
    const {navigation} = props;
    return (
        <View>
            <Text>About</Text>
            <Button title='ir a home' onPress={()=> navigation.navigate('home')}/>
            <Button title='ir a contact' onPress={()=> navigation.navigate('contact')}/>
        </View>
    )
}

const styles = StyleSheet.create({})
