/** @format */

import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import AiScreen from "../screens/AiScreen"
import SettingsScreen from "../screens/SettingsScreen"
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen"

const Stack = createStackNavigator()

export default function AIStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AIHome'
        component={AiScreen}
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
