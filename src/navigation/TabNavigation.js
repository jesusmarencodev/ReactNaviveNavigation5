import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
/* import AboutStack from './AboutStack'; */
import ContactStack from './ContactStack';




const Tab = createBottomTabNavigator();

export default function TabNavigation() {

        return (
            <Tab.Navigator>
                <Tab.Screen name='home' component={HomeStack} />
                {/* <Tab.Screen name='about' component={AboutStack} /> */}
                <Tab.Screen name='contact' component={ContactStack} />
            </Tab.Navigator>
        )




/*     return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{title:'Home'}} />
            <Stack.Screen name="about" component={About} options={{title:'About'}} />
            <Stack.Screen name="contact" component={Contact} options={{title:'Contact'}} />
        </Stack.Navigator>
    ) */
}


