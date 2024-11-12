/** @format */
import "../../global.css"
/** @format */
import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
import SearchScreen from "../screens/DiscoverScreen"
import ProfileScreen from "../screens/ProfileScreen"
import SettingsScreen from "../screens/SettingsScreen"
import {Ionicons, FontAwesome} from "@expo/vector-icons"
import {BlurView} from "expo-blur"
import {StyleSheet} from "react-native" // Import StyleSheet
import AiScreen from "../screens/AiScreen"
import ExpensesScreen from "../screens/ExpensesScreen"
import AddItenarary from "../screens/AddItenarary"

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          paddingBottom: 5,
          height: 70,
          borderTopLeftRadius: 40, // Add rounded corners if desired
          borderTopRightRadius: 40
        },
        tabBarLabelStyle: {
          fontSize: 12, // Adjust font size if needed
          marginTop: -10, // Moves label closer to the icon
          fontWeight: 700
        }
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name='home-outline' size={26} color={color} />
          ),
          tabBarLabel: ""
        }}
      />
      <Tab.Screen
        name='Discover'
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name='compass-outline' size={32} color={color} />
          ),
          tabBarLabel: ""
        }}
      />
      <Tab.Screen
        name=' '
        component={AddItenarary}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name='add-circle' size={36} color='black' />
          ),
          tabBarIconStyle: {
            color: "black"
          }
        }}
      />
      <Tab.Screen
        name='AI'
        component={AiScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name='barcode-outline' size={32} color={color} />
          ),
          tabBarLabel: ""
        }}
      />

      <Tab.Screen
        name='Expenses Tracking'
        component={ExpensesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name='card-outline' size={30} color={color} />
          ),
          tabBarLabel: ""
        }}
      />
    </Tab.Navigator>
  )
}
