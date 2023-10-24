import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../screens/About";

const Stack = createBottomTabNavigator();

export default function AboutStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="about" component={About} options={{title: 'About'}}></Stack.Screen>
        </Stack.Navigator>
    );
}