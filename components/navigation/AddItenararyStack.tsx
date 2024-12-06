/** @format */

import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import SettingsScreen from "../screens/SettingsScreen"
import AddItenarary from "../screens/AddItenarary"
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen"

const Stack = createStackNavigator()

export default function AddItenararyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AddItenarary'
        component={AddItenarary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Settings'
        component={SettingsScreen}
        options={{title: "Vacation Details"}}
      />
      <Stack.Screen
        name='Specific Profile Settings'
        component={ProfileSettingsScreen}
        options={{title: "Profile Settings"}}
      />
    </Stack.Navigator>
  )
}
