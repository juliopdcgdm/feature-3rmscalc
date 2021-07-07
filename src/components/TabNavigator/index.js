import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../../pages/Home'
import Services from '../../pages/Services'
import About from '../../pages/About'


const Tab = createBottomTabNavigator()

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
                    return <Icon name={name} color={color} size={30} />
                }
            })}


            tabBarOptions={{
                style: {
                    backgroundColor: '#00b1ff',

                },
                activeTintColor: '#fff',
                inactiveTintColor: '#CCCCFF',
                showLabel: true,
                transiction:'fade'
            }}
        >
            <Tab.Screen name='Home' component={Home} options={{ title: 'Calculadora' }} />
            <Tab.Screen name='Services' component={Services} options={{title:'Serviços'}} />
            <Tab.Screen name='About' component={About} options={{title:'Sobre', }} />
        </Tab.Navigator>

    );
}



