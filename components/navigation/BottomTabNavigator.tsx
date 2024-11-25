/** @format */
import "../../global.css"
/** @format */
import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Ionicons} from "@expo/vector-icons"
import {Image, StyleSheet} from "react-native"
import AiScreen from "../screens/AiScreen"
import AddItenarary from "../screens/AddItenarary"
import ExpensesStack from "./ExpensesStack"
import ProfileStack from "./ProfileSettingsStack"
import DiscoverScreen from "../screens/DiscoverScreen"
import SettingsScreen from "../screens/SettingsScreen"
import AIStack from "./AI&SettingsStack"
import AddItenararyStack from "./AddItenararyStack"

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          height: 70,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: "white",
          paddingHorizontal: 10,
          paddingTop: 10,
          justifyContent: "center",
          alignItems: "center"
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600"
        }
      }}>
      <Tab.Screen
        name='AI'
        component={AIStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <Ionicons
              name='barcode-outline'
              size={30}
              color={color}
              style={{}}
            />
          ),
          tabBarLabel: ""
        }}
      />
      <Tab.Screen
        name='Discover'
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <Ionicons
              name='compass-outline'
              size={30}
              color={color}
              style={{}}
            />
          ),
          tabBarLabel: ""
        }}
      />
      <Tab.Screen
        name=' '
        component={AddItenararyStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons
              name='add-circle'
              size={32}
              color={color}
              style={{
                position: "absolute",
                top: -1
              }}
            />
          ),
          tabBarLabel: ""
        }}
      />
      <Tab.Screen
        name='Expenses Tracking'
        component={ExpensesStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <Ionicons name='card-outline' size={28} color={color} style={{}} />
          ),
          tabBarLabel: ""
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/Profile Picture.jpg")}
              style={{
                width: 30,
                height: 30,
                borderRadius: 16,
                resizeMode: "cover"
              }}
            />
          ),
          tabBarLabel: ""
        }}
      />
    </Tab.Navigator>
  )
}
