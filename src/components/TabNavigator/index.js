import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../../pages/Home'
import Services from '../../pages/Services'
import About from '../../pages/About'


const Tab = createBottomTabNavigator()
const imgPath = require('../assets/icon-menu.png')

const icons = {
    Home: {
        name: 'calculator-outline'
    },
    Services: {
        name: 'rocket-outline'

    },
    About: {
        name: 'bookmark-outline'
    }
}

export default function TabNavigator() {
    return (
        //TABNAVIGATOR
        <Tab.Navigator
        
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name]
                    return <Icon name={name} color={color} size={size} />
                }
            })}


            tabBarOptions={{
                style: {
                    backgroundColor: '#00b1ff',

                },
                activeTintColor: '#fff',
                inactiveTintColor: '#3300cc',
                showLabel: true,


            }}
        >
            <Tab.Screen name='Home' component={Home} options={{ title: 'Calculadora' }} />
            <Tab.Screen name='Services' component={Services} />
            <Tab.Screen name='About' component={About} />
        </Tab.Navigator>

    );
}



