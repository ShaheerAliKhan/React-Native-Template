import React, { Component } from "react";
import {
    Welcome
} from '../Containers'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

const NavigationService =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Welcome" component={Welcome}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationService