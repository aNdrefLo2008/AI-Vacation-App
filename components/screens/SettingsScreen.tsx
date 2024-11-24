/** @format */

import {Ionicons} from "@expo/vector-icons"
import "../../global.css"

import React, {useState, useRef} from "react"
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  TouchableWithoutFeedback
} from "react-native"

const CustomSwitch = ({
  value,
  onValueChange
}: {
  value: any
  onValueChange: any
}) => {
  const animation = useRef(new Animated.Value(value ? 1 : 0)).current

  const toggleSwitch = () => {
    Animated.timing(animation, {
      toValue: value ? 0 : 1,
      duration: 350,
      useNativeDriver: false
    }).start(() => onValueChange(!value))
  }

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22] // Adjust padding/movement
  })

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#d3d3d3", "#000000"] // Gray shades for background
  })

  return (
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <Animated.View
        style={{
          width: 50,
          height: 26, // Slightly increased height for more padding
          borderRadius: 13, // Half of the new height for proper rounding
          backgroundColor: backgroundColor,
          justifyContent: "center",
          paddingVertical: 6, // Increased vertical padding
          paddingHorizontal: 4 // Retaining horizontal padding
        }}>
        <Animated.View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: "#ffffff", // White ball
            transform: [{translateX}]
          }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default function SettingsScreen({navigation}: {navigation: any}) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false)

  return (
    <ScrollView className='flex-1 bg-gray-100'>
      <View className='flex-1 items-center'>
        <Image
          className='bg-cover rounded-full w-24 h-24 mt-16'
          source={require("../../assets/images/Profile Picture.jpg")}
        />
        <Text className='text-3xl font-bold mt-5'>Andrei Florea</Text>
        <Text className='text-base mt-2 text-gray-500'>
          andreiflorea@gmail.com
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Specific Profile Settings", {})}
          className='bg-gray-950 p-4 mt-6 rounded-full'>
          <Text className='font-light text-lg text-white'>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View className='flex-1 items-start justify-start pb-28 mt-12 bg-white rounded-3xl p-6'>
        <Text className='text-gray-400 text-xl'>Content</Text>
        <TouchableOpacity className='flex-row items-start mt-8 justify-between w-full'>
          <View className='flex-row justify-start gap-6 items-center'>
            <Ionicons
              name='bookmarks-outline'
              color={"black"}
              size={20}
              className='bg-gray-100 p-4 rounded-full'
            />
            <Text className='text-xl font-bold'>Favorites</Text>
          </View>
          <Ionicons
            name='chevron-forward-outline'
            color={"gray"}
            className='mt-3'
            size={22}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row items-start mt-10 justify-between w-full'>
          <View className='flex-row justify-start gap-6 items-center'>
            <Ionicons
              name='cloud-download-outline'
              color={"black"}
              size={20}
              className='bg-gray-100 p-4 rounded-full'
            />
            <Text className='text-xl font-bold'>Downloads</Text>
          </View>
          <Ionicons
            name='chevron-forward-outline'
            color={"gray"}
            className='mt-3'
            size={22}></Ionicons>
        </TouchableOpacity>
        <Text className='text-gray-400 text-xl mt-12'>Preferences</Text>
        <TouchableOpacity className='flex-row items-start mt-8 justify-between w-full'>
          <View className='flex-row justify-start gap-6 items-center'>
            <Ionicons
              name='language-outline'
              color={"black"}
              size={20}
              className='bg-gray-100 p-4 rounded-full'
            />
            <Text className='text-xl font-bold'>Language</Text>
          </View>
          <Ionicons
            name='chevron-forward-outline'
            color={"gray"}
            className='mt-3'
            size={22}></Ionicons>
        </TouchableOpacity>
        {/* Notifications */}
        <View className='flex-row items-center mt-10 justify-between w-full'>
          <View className='flex-row justify-start gap-6 items-center'>
            <Ionicons
              name='notifications-outline'
              color={"black"}
              size={20}
              className='bg-gray-100 p-4 rounded-full'
            />
            <Text className='text-xl font-bold'>Notifications</Text>
          </View>
          <CustomSwitch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>
        {/* Theme */}
        <View className='flex-row items-center mt-10 justify-between w-full'>
          <View className='flex-row justify-start gap-6 items-center'>
            <Ionicons
              name='contrast-outline'
              color={"black"}
              size={20}
              className='bg-gray-100 p-4 rounded-full'
            />
            <Text className='text-xl font-bold'>Dark mode</Text>
          </View>
          <CustomSwitch
            value={darkThemeEnabled}
            onValueChange={setDarkThemeEnabled}
          />
        </View>
        <TouchableOpacity className='flex-row items-start mt-10 justify-between w-full'>
          <View className='flex-row justify-start gap-6 items-center'>
            <Ionicons
              name='key-outline'
              color={"black"}
              size={20}
              className='bg-gray-100 p-4 rounded-full'
            />
            <Text className='text-xl font-bold'>Change Accounts</Text>
          </View>
          <Ionicons
            name='chevron-forward-outline'
            color={"gray"}
            className='mt-3'
            size={22}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row items-start mt-10 justify-between w-full'>
          <View className='flex-row justify-start gap-6 items-center'>
            <Ionicons
              name='log-out-outline'
              color={"white"}
              size={20}
              className='bg-red-600 pl-5 p-4 rounded-full'
            />
            <Text className='text-xl font-bold'>Logout</Text>
          </View>
          <Ionicons
            name='chevron-forward-outline'
            color={"gray"}
            size={22}
            className='mt-3'></Ionicons>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
