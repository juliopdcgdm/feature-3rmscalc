import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Services from '../pages/Services'
import About from '../pages/About'
import PageWebView from '../pages/WebView'
import TabNavigator from '../components/TabNavigator'




export default function Routes() {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
           
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    component={TabNavigator}
                    options={{
                        headerShown: false,
                        headerStyle:{
                        }
                    }}

                />

                <Stack.Screen
                    name='Services'
                    component={Services}
                    options={{
                        headerShown: true
                    }}
                />

                <Stack.Screen
                    name='About'
                    component={About}
                    options={{
                        headerShown: true
                    }}
                />

                <Stack.Screen
                    name='PageWebView'
                    component={PageWebView}
                    options={{
                        headerShown: true,
                        headerStyle:{
                            backgroundColor:'#00b1ff',
                            borderBottomColor: '#666',
                            borderBottomWidth: 1,
                            elevation: 3,
                        },
                        headerTintColor:'#fff',
                        headerTitleAlign:"left",
                        headerTitle:'Voltar'
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}