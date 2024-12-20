/** @format */

import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import SettingsScreen from "../screens/SettingsScreen"
import AddItenarary from "../screens/AddItenarary"
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen"
import DiscoverScreen from "../screens/DiscoverScreen"

const Stack = createStackNavigator()

export default function DiscoverLocationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Discover'
        component={DiscoverScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Location'
        component={DiscoverScreen}
        options={{title: "Location Details"}}
      />
    </Stack.Navigator>
  )
}
