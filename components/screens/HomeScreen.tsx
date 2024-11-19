/** @format */

import "../../global.css"

import {ScrollView, Text, View, Image, TouchableOpacity} from "react-native"
import {BlurView} from "expo-blur"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function Index() {
  return (
    <ScrollView className='flex-1 mt-10 bg-gray-100'>
      <View className='flex-row items-center justify-between mx-6'>
        <Text className='font-semibold text-3xl'>Your Profile</Text>
        <TouchableOpacity className='p-4 bg-white shadow-lg rounded-full'>
          <Ionicons
            name='ellipsis-vertical'
            color={"black"}
            size={20}></Ionicons>
        </TouchableOpacity>
      </View>
      <View className='mt-14 flex-row items-center justify-center gap-4 mx-10'>
        <Image
          className='bg-cover rounded-full w-24 h-24'
          source={require("../../assets/images/Profile Picture.jpg")}
        />

        <View className='flex-1 items-start justify-center'>
          <Text className='text-3xl font-bold'>Andrei Florea</Text>
          <Text className='text-gray-500 font-light text-lg max-w-72'>
            Love to visit the most amazing places in the world
          </Text>
        </View>
      </View>
      <View className='bg-white rounded-t-3xl w-screen h-full mt-10'>
        <Text className='font-light text-4xl m-10'>My Trips</Text>
      </View>
    </ScrollView>
  )
}
