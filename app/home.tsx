/** @format */

import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import RootNavigator from "@/components/navigation/RootNavigator"
import BottomTabNavigator from "@/components/navigation/BottomTabNavigator"
import {createStackNavigator} from "@react-navigation/stack"
import {NotificationProvider} from "@/components/reusableComponents/NotificationContext"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <NotificationProvider>
          <Stack.Screen
            name='home'
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
        </NotificationProvider>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
