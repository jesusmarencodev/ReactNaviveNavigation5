import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Contact(props) {
    const {navigation} = props;
    return (
        <View>
            <Text>Contact</Text>
            <Button title='ir a home' onPress={()=> navigation.navigate('home')}/>
            <Button title='ir a about' onPress={()=> navigation.navigate('about')}/>
            <Button title='ir a courses' onPress={()=> navigation.navigate('courses')}/>
        </View>
    )
}

const styles = StyleSheet.create({})
