import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';


const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="home" component={HomeStack} options={{title:'home'}} />
            <Drawer.Screen name="contact" component={ContactStack} options={{title:'contact'}} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})
