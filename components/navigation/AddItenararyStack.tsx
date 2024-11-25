/** @format */

import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import SettingsScreen from "../screens/SettingsScreen"
import AddItenarary from "../screens/AddItenarary"

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
    </Stack.Navigator>
  )
}
