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

export default function AddItenarary() {
  return (
    <View className='flex-1 bg-gray-100 relative'>
      {/* Scrollable Content */}
      <ScrollView className='mt-10 mx-6 flex-1'>
        {/* Header Section */}
        <View className='flex-row justify-between'>
          <TouchableOpacity className='flex-row gap-4 items-center'>
            <Image
              className='bg-cover rounded-full w-14 h-14'
              source={require("../../assets/images/Profile Picture.jpg")}
            />
          </TouchableOpacity>
          <View className='flex-row gap-3 items-center'>
            <TouchableOpacity className='bg-white p-3 shadow-2xl rounded-full items-center justify-center'>
              <Ionicons name='settings-outline' size={20} color='black' />
            </TouchableOpacity>
            <TouchableOpacity className='bg-white p-3 shadow-2xl rounded-full items-center justify-center'>
              <Ionicons name='notifications-outline' size={20} color='black' />
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Section */}
        <View className='flex-1 mt-10 gap-4'>
          {/* Large TextInput */}
          <View>
            <Text className='text-lg font-light text-left mb-2'>
              Describe your ideal vacation
            </Text>
            <TextInput
              className='text-xl text-black bg-white rounded-2xl p-6 h-36 shadow-lg'
              placeholder='Describe here...'
              placeholderTextColor='#A8A8A8'
              selectionColor='black'
              multiline
            />
          </View>

          {/* Smaller TextInputs */}
          <View className='mt-4'>
            <Text className='text-lg font-light text-left mb-2'>
              Destination
            </Text>
            <TextInput
              className='text-base text-black bg-white rounded-lg p-4 shadow-lg'
              placeholder='Enter destination...'
              placeholderTextColor='#A8A8A8'
              selectionColor='black'
            />
          </View>

          <View className='mt-4'>
            <Text className='text-lg font-light text-left mb-2'>Dates</Text>
            <TextInput
              className='text-base text-black bg-white rounded-lg p-4 shadow-lg'
              placeholder='Enter dates...'
              placeholderTextColor='#A8A8A8'
              selectionColor='black'
            />
          </View>

          <View className='mt-4'>
            <Text className='text-lg font-light text-left mb-2'>Budget</Text>
            <TextInput
              className='text-base text-black bg-white rounded-lg p-4 shadow-lg'
              placeholder='Enter budget...'
              placeholderTextColor='#A8A8A8'
              selectionColor='black'
            />
          </View>
        </View>
      </ScrollView>

      {/* Button Section */}
      <TouchableOpacity
        className='absolute gap-2 left-0 right-0 bg-gray-800 p-6 justify-center shadow-2xl flex-row items-center rounded-3xl mx-4'
        style={{bottom: 85}} // Adjust to sit above the tab bar
      >
        <Text className='font-bold text-white text-3xl'>Prepare Now</Text>
      </TouchableOpacity>
    </View>
  )
}
