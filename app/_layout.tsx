/** @format */

import React from "react"
import {ActivityIndicator, View} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import AsyncStorage from "@react-native-async-storage/async-storage"

import BottomTabNavigator from "@/components/navigation/BottomTabNavigator"
import LoginScreen from "@/components/screens/LoginScreen"
import RegisterScreen from "@/components/screens/RegisterScreen"
import {
  AuthProvider,
  useAuth
} from "@/components/reusableComponents/authContext"

const Stack = createStackNavigator()

const Base = () => {
  const {isAuthenticated, checkAuth} = useAuth()

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name='Login'>
            {(props: any) => (
              <LoginScreen {...props} setAuthenticated={checkAuth} />
            )}
          </Stack.Screen>
          <Stack.Screen name='Register' component={RegisterScreen} />
        </>
      ) : (
        <Stack.Screen name='Home' component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  )
}

export default function Layout() {
  return (
    <AuthProvider>
      <Base />
    </AuthProvider>
  )
}
