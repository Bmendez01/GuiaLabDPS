import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contact from "../screens/Contact";

const Stack = createBottomTabNavigator();

export default function ContactStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="contact" component={Contact} options={{title: 'Contact'}}></Stack.Screen>
        </Stack.Navigator>
    );
}