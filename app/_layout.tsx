/** @format */

// _layout.tsx

import React, {useState, useEffect} from "react"
import {ActivityIndicator, View} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {NotificationProvider} from "@/components/reusableComponents/NotificationContext"
import {navigationRef} from "@/components/navigation/navigate" // Navigation ref
import {NavigationContainer} from "@react-navigation/native" // Only one NavigationContainer
import {createStackNavigator} from "@react-navigation/stack" // Stack navigator
import BottomTabNavigator from "@/components/navigation/BottomTabNavigator" // Your main bottom tabs
import LoginScreen from "@/components/screens/LoginScreen" // Login screen
import RegisterScreen from "@/components/screens/RegisterScreen" // Register screen

const Stack = createStackNavigator()

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("token")
      setIsAuthenticated(!!token) // Check if token exists
      setLoading(false)
    }

    checkAuth()
  }, [])

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name='Login'>
            {(props: any) => (
              <LoginScreen {...props} setAuthenticated={setIsAuthenticated} />
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
