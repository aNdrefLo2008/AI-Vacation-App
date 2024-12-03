/** @format */
import React, {useState, useEffect} from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import AsyncStorage from "@react-native-async-storage/async-storage"
import BottomTabNavigator from "@/components/navigation/BottomTabNavigator"
import LoginScreen from "@/components/screens/LoginScreen"
import RegisterScreen from "@/components/screens/RegisterScreen"
import {NotificationProvider} from "@/components/reusableComponents/NotificationContext"
import {ActivityIndicator, View} from "react-native"

const Stack = createStackNavigator()

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("token")
      setIsAuthenticated(!!token)
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
    <NotificationProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isAuthenticated ? (
          <>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
          </>
        ) : (
          <Stack.Screen name='Home' component={BottomTabNavigator} />
        )}
      </Stack.Navigator>
    </NotificationProvider>
  )
}
