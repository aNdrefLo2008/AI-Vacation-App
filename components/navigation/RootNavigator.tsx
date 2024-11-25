/** @format */

import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import BottomTabNavigator from "./BottomTabNavigator"
import SettingsScreen from "../screens/SettingsScreen"

const Stack = createStackNavigator()

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* Main Tabs */}
      <Stack.Screen name='MainTabs' component={BottomTabNavigator} />
      {/* Settings Screen */}
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  )
}
