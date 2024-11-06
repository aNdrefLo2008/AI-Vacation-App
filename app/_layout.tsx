/** @format */

import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import BottomTabNavigator from "../components/navigation/BottomTabNavigator"

const Stack = createStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='home'
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
