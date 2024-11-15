/** @format */

import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import BottomTabNavigator from "../components/navigation/BottomTabNavigator"
import {NavigationContainer} from "@react-navigation/native"

const Stack = createStackNavigator()

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='home'
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeStack
