/** @format */

import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import SettingsScreen from "../screens/SettingsScreen"
import ProfileScreen from "../screens/ProfileScreen"
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen"

const Stack = createStackNavigator()

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ExpensesHome'
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='General Settings'
        component={SettingsScreen}
        options={{title: "Settings"}}
      />
      <Stack.Screen
        name='Specific Profile Settings'
        component={ProfileSettingsScreen}
        options={{title: "Profile Settings"}}
      />
    </Stack.Navigator>
  )
}
