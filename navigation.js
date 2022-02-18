import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screen/Home";
import FoodDetalhe from "./screen/FoodDetalhe";
import Feito from "./screen/Feito";
import Profile from "./screen/Profile";
import History from './screen/History';

export default function RootNavigation(){
    const Stack = createNativeStackNavigator();

    const screenOptions={
        headerShown:false,
    };

    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Stack.Screen name='home' component={Home}/>
                <Stack.Screen name='FoodDetalhe' component={FoodDetalhe}/>
                <Stack.Screen name="Feito" component={Feito}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="History" component={History}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}