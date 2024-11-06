/** @format */
import "../../global.css"
/** @format */
import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import SettingsScreen from "../screens/SettingsScreen"
import {Ionicons, FontAwesome} from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray"
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name='home-outline' size={size} color={color} />
          ),
          tabBarLabel: "Home"
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='user' size={size} color={color} />
          ),
          tabBarLabel: "Profile"
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name='settings-outline' size={size} color={color} />
          ),
          tabBarLabel: "Settings"
        }}
      />
    </Tab.Navigator>
  )
}
