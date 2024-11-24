/** @format */

import "../../global.css"

import {ScrollView, Text, View, Image, TouchableOpacity} from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function ProfileScreen({navigation}: {navigation: any}) {
  return (
    <ScrollView className='flex-1 pt-10 bg-gray-100'>
      <View className='flex-row items-center justify-between mx-6'>
        <Text className='font-semibold text-3xl'>Your Profile</Text>
        <TouchableOpacity className='p-4 rounded-full'>
          <Ionicons
            onPress={() => navigation.navigate("General Settings", {})}
            name='ellipsis-vertical'
            color={"black"}
            size={20}></Ionicons>
        </TouchableOpacity>
      </View>
      <View className='mt-14 flex-row items-center justify-center gap-4 mx-10'>
        <Image
          className='bg-cover rounded-full w-20 h-20'
          source={require("../../assets/images/Profile Picture.jpg")}
        />

        <View className='flex-1 items-start justify-center'>
          <Text className='text-3xl font-bold'>Andrei Florea</Text>
          <Text className='text-gray-500 font-light text-lg max-w-72'>
            Love to visit the most amazing places in the world
          </Text>
        </View>
      </View>
      <View className='bg-white rounded-t-3xl w-screen h-full mt-10 px-5 pb-10'>
        <Text className='font-light text-3xl mt-10'>My Trips</Text>
        <View className='flex-wrap flex-row flex-1 items-start justify-center gap-8 mt-6 mb-32'>
          {/* First item */}
          <View className='flex flex-col gap-3 justify-center'>
            <Image
              className='bg-cover rounded-3xl w-44 h-40'
              source={require("../../assets/images/3 Vacation.jpg")}
            />
            <Text className='text-gray-700 text-start max-w-40'>
              Resort on Hurawalhi Island, Maldives
            </Text>
          </View>
          {/* Second item */}
          <View className='flex flex-col gap-3 justify-center'>
            <Image
              className='bg-cover rounded-3xl w-44 h-52'
              source={require("../../assets/images/2 Vacation.jpg")}
            />
            <Text className='text-gray-700 text-start max-w-40'>
              Walking by Miraflores in Santorini, Greece
            </Text>
          </View>
          {/* Subsequent items */}
          <View className='flex flex-col gap-3 justify-center'>
            <Image
              className='bg-cover rounded-3xl w-44 h-52'
              source={require("../../assets/images/1 Vacation.jpg")}
            />
            <Text className='text-gray-700 text-start max-w-40'>
              Hiking in the Swiss Alps
            </Text>
          </View>
          <View className='flex flex-col gap-3 justify-center'>
            <Image
              className='bg-cover rounded-3xl w-44 h-44'
              source={require("../../assets/images/4 Vacation.jpg")}
            />
            <Text className='text-gray-700 text-start max-w-40'>
              Exploring the Sahara Desert
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
