/** @format */
/** @format */

import {Ionicons} from "@expo/vector-icons"
import "../../global.css"

import React from "react"
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native"

export default function AiScreen({route}: {route: any}) {
  return (
    <View className='flex-1 bg-gray-100 relative'>
      {/* Scrollable Content */}
      <ScrollView className='mt-10 mx-6 flex-1'>
        <View className='flex-row justify-between'>
          <View className='flex-row gap-4 items-center'>
            <Image
              className='bg-cover rounded-full w-14 h-14'
              source={require("../../assets/images/Profile Picture.jpg")}
            />
          </View>
          <View className='flex-row gap-3 items-center'>
            <View className='bg-white p-3 shadow-2xl rounded-full items-center justify-center'>
              <Ionicons name='settings-outline' size={20} color='black' />
            </View>
            <View className='bg-white p-3 shadow-2xl rounded-full items-center justify-center'>
              <Ionicons name='notifications-outline' size={20} color='black' />
            </View>
          </View>
        </View>
        <Text className='font-light text-5xl text-black mb-4 mt-12'>
          Hi Andrei,
        </Text>
        <Text className='text-gray-500 font-normal'>
          Give any command naturally, from minimizing expenses on your next trip
          to preparing an itinerary.
        </Text>

        {/* Action Containers */}
        <View className='mt-8'>
          <View className='flex-row justify-between mb-4 gap-2'>
            {/* Create a Vacation */}
            <TouchableOpacity className='bg-white px-4 py-8 rounded-2xl shadow-lg flex-1 ml-2 items-start justify-between'>
              <View className='p-4 rounded-full bg-black'>
                <Ionicons name='airplane-outline' size={22} color='white' />
              </View>

              <Text className='mt-2 text-black font-medium'>
                Create a Vacation
              </Text>
            </TouchableOpacity>
            {/* Manage My Expenses */}
            <TouchableOpacity className='bg-white px-4 py-8 rounded-2xl shadow-lg flex-1 ml-2 items-start justify-between'>
              <View className='p-4 rounded-full bg-black'>
                <Ionicons name='wallet-outline' size={22} color='white' />
              </View>

              <Text className='mt-2 text-black font-medium'>
                Manage Expenses
              </Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row justify-between gap-2'>
            {/* Plan My Itinerary */}
            <TouchableOpacity className='bg-white px-4 py-8 rounded-2xl shadow-lg flex-1 ml-2 items-start justify-between'>
              <View className='p-4 rounded-full bg-black'>
                <Ionicons name='map-outline' size={22} color='white' />
              </View>

              <Text className='mt-2 text-black font-medium'>
                Plan my Itinerary
              </Text>
            </TouchableOpacity>
            {/* Explore Destinations */}
            <TouchableOpacity className='bg-white px-4 py-8 rounded-2xl shadow-lg flex-1 ml-2 items-start justify-between'>
              <View className='p-4 rounded-full bg-black'>
                <Ionicons name='compass-outline' size={24} color='white' />
              </View>

              <Text className='mt-2 text-black font-medium'>
                Explore Destinations
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Add bottom space to avoid overlap */}
        <View className='h-32' />
      </ScrollView>

      {/* Fixed Input Bar */}
      <View
        className='absolute left-0 right-0 bg-white px-6 py-3 shadow-2xl flex-row items-center rounded-full mx-4'
        style={{bottom: 85}} // Adjust to sit above the tab bar
      >
        <View className='flex-1 bg-gray-100 rounded-full px-4 py-2 flex-row items-center'>
          <TextInput
            className='text-lg text-black flex-1'
            placeholder='Start preparing your trip'
            placeholderTextColor='#A8A8A8'
            selectionColor='black'
          />
        </View>
        <TouchableOpacity className='bg-black p-4 rounded-full ml-4'>
          <Ionicons name='send' className='ml-1' size={20} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  )
}
