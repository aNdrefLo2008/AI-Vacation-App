/** @format */

import {AntDesign, Feather, Ionicons} from "@expo/vector-icons"
import React from "react"
import {ImageBackground, Text, TouchableOpacity, View} from "react-native"
import {ScrollView} from "react-native-gesture-handler"
import truncateAddress from "../reusableComponents/truncateAdress"

function LocationDetails({route, navigation}: {route: any; navigation: any}) {
  const {location} = route.params
  const {address, category, name, image} = location

  return (
    <View className='flex-1 relative'>
      <ImageBackground
        source={{uri: image}}
        style={{flex: 1}}
        resizeMode='cover'
        className='fixed'>
        <View className='flex flex-row justify-between pt-10 mx-10'>
          <TouchableOpacity
            onPress={() => navigation.navigate("Discover", {})}
            className='bg-white shadow-lg p-4 rounded-full'>
            <Ionicons name='chevron-back-outline' size={18} />
          </TouchableOpacity>
          <TouchableOpacity className='bg-white shadow-lg p-4 rounded-full'>
            <Ionicons name='heart-outline' size={18} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View className='bg-gray-50 rounded-t-3xl -mt-6 '>
        <View className='flex flex-row items-center justify-center mx-4 gap-20 pt-10'>
          <View className='flex-col gap-2'>
            <Text className='font-bold text-4xl '>{name}</Text>
            <View className='flex-row gap-2 items-center'>
              <Feather name='map-pin' size={16} color='gray' />
              <Text className='font-medium text-lg text-center text-gray-400'>
                {truncateAddress(address)}
              </Text>
            </View>
          </View>
          <View className='flex-col gap-1'>
            <View className='flex-row gap-1 items-center'>
              <AntDesign name='staro' size={14} color='gray' />
              <Text className='font-medium text-lg text-center text-gray-700'>
                4.9
              </Text>
            </View>
            <Text className='text-lg text-green-600'>Map Direction</Text>
          </View>
        </View>
        <View className='flex flex-row items-center justify-start mx-10 mt-10 gap-1'>
          <Text className='text-xl '>Best Season To Visit: </Text>
          <Text className='text-xl font-bold'>{category}</Text>
        </View>
        <View className='h-[1px] bg-gray-800 mx-8 mt-8' />
        <View className='flex mx-10 mt-8'>
          <Text className='text-2xl'>Tips For Visitors:</Text>
        </View>
        <Text className='flex mx-10 mt-4 text-gray-700'>
          Example Tips from AI {address}
        </Text>
        <TouchableOpacity className='mt-10 mb-24 mx-10 rounded-full px-12 py-8 flex justify-center items-center bg-gray-800'>
          <Text className='text-white text-2xl font-bold text-center'>
            Create Itinerary
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LocationDetails
