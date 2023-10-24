import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

const Stack = createBottomTabNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{title: 'Home'}}></Stack.Screen>
        </Stack.Navigator>
    );
}