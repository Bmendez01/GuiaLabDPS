import React from "react";
import Perros from "../screens/Perros";
import Gatos from "../screens/Gatos";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { color } from "react-native-elements/dist/helpers";

const Tab = createBottomTabNavigator();

export default function Navigation(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="perros" component={Perros} options={{tabBarLabel: 'Perros', tabBarIcon: ({color, size}) => (<FontAwesome5 name="dog"/>)}} /> 
      <Tab.Screen name="gatos" component={Gatos} options={{title: 'Gatos', tabBarIcon: ({color, size}) => (<FontAwesome5 name="cat"/>)}}/>
    </Tab.Navigator>
  );
}