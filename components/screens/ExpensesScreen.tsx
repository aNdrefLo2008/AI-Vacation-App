/** @format */

import "../../global.css"

import React from "react"
import {View, Text, ScrollView, Image, Button} from "react-native"
import {Ionicons, FontAwesome} from "@expo/vector-icons"

export default function ExpensesScreen() {
  return (
    <ScrollView className='flex-1 mt-16 mx-4 bg-gray-100 mb-20'>
      <View className='flex-row justify-between'>
        <View className='flex-row gap-3 justify-center items-center'>
          <Image
            className='bg-cover rounded-full w-12 h-12'
            source={require("../../assets/images/Profile Picture.jpg")}
          />
          <Text className='font-bold text-lg'>Andrei Florea</Text>
        </View>
        <View className='flex-row gap-3 justify-center items-center'>
          <View className=' justify-center items-center bg-white p-3 shadow-2xl rounded-full'>
            <Ionicons name='settings-outline' size={20} color={"black"} />
          </View>
          <View className=' justify-center items-center bg-white p-3 shadow-2xl rounded-full'>
            <Ionicons name='notifications-outline' size={20} color={"black"} />
          </View>
        </View>
      </View>
      <View className=' items-start justify-center gap-4 mt-10'>
        <Text className=' text-gray-500 text-sm font-medium'>
          Spent on last vacation
        </Text>
        <Text className='font-bold text-4xl'>$14,268.92</Text>
      </View>

      <View className='flex-row flex-1 overflow-x-visible items-center justify-center gap-1 mt-10'>
        <View className='flex-1 flex-row justify-center items-center gap-3 bg-black rounded-2xl py-4'>
          <Text className='text-white text-xl font-semibold'>L.V.</Text>
          <Ionicons name='cash' size={18} color={"white"} />
        </View>
        <View className='flex-1 flex-row justify-center items-center gap-3 rounded-2xl bg-black py-4'>
          <Text className='text-white text-xl font-semibold'>AI</Text>
          <Ionicons name='hardware-chip' size={18} color={"white"} />
        </View>
      </View>
    </ScrollView>
  )
}
