/** @format */

import "../../global.css"

import React from "react"
import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native"
import {Ionicons, FontAwesome} from "@expo/vector-icons"
import {NotificationToggle} from "../reusableComponents/NotificationToggle"

export default function ExpensesScreen({navigation}: {navigation: any}) {
  const vacation = [
    {
      destination: "Maldives",
      nights: 2,
      cost: {
        total: 500,
        housing: 250,
        food: 75,
        partying: 75,
        activities: 100
      }
    },
    {
      destination: "Portofino",
      nights: 14,
      cost: {
        total: 3000,
        housing: 500,
        food: 1000,
        partying: 700,
        activities: 800
      }
    },
    {
      destination: "Monaco",
      nights: 12,
      cost: {
        total: 2200,
        housing: 500,
        food: 200,
        partying: 300,
        activities: 1200
      }
    }
  ]

  return (
    <ScrollView className='flex-1 mt-10 bg-gray-100 mb-20'>
      <View className='flex-row mx-4 justify-between'>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile", {})}
          className='flex-row gap-4 justify-center items-center'>
          <Image
            className='bg-cover rounded-full w-12 h-12'
            source={require("../../assets/images/Profile Picture.jpg")}
          />
          <Text className='font-bold text-lg'>Andrei Florea</Text>
        </TouchableOpacity>
        <View className='flex-row gap-3 justify-center items-center'>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            className=' justify-center items-center bg-white p-3 shadow-2xl rounded-full'>
            <Ionicons name='settings-outline' size={20} color={"black"} />
          </TouchableOpacity>
          <NotificationToggle />
        </View>
      </View>
      <View className='mx-4 items-start justify-center gap-4 mt-10'>
        <Text className=' text-gray-500 text-sm font-medium'>
          Spent on last vacation
        </Text>
        <Text className='font-bold text-4xl'>$14,268.92</Text>
      </View>

      <View className='mx-4 flex-row flex-1 overflow-x-visible items-center justify-center gap-1 mt-10'>
        <TouchableOpacity
          onPress={() => navigation.navigate("AI", vacation[0])}
          className='flex-1 flex-row justify-center items-center gap-3 rounded-2xl bg-black py-4'>
          <Text className='text-white text-xl font-bold'>
            How to save on vacation
          </Text>
          <Ionicons name='hardware-chip' size={18} color={"white"} />
        </TouchableOpacity>
      </View>

      <View className='bg-white pb-6 rounded-3xl shadow-2xl flex-1 mt-10 px-6'>
        <View className='flex-row justify-between items-center pt-8'>
          <Text className='text-lg font-bold'>Vacations</Text>
          <Text className='text-lg font-bold text-indigo-600'>View All</Text>
        </View>
        <Text className='font-extralight mt-4'>Last 6 Month</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("VacationDetail", vacation[0])}
          className='mt-3 border border-gray-200 rounded-3xl p-4 flex-row justify-between items-center'>
          <View className='flex-row gap-3 items-center justify-center'>
            <Image
              className='bg-cover rounded-full w-16 h-16 shadow-2xl'
              source={require("../../assets/images/2 Vacation.jpg")}
            />
            <View>
              <Text className='font-bold text-lg'>Maldives</Text>
              <Text className='font-thin'>2 Nights</Text>
            </View>
          </View>
          <View>
            <Text className='font-bold text-lg'>$500</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("VacationDetail", vacation[1])}
          className=' mt-3 border border-gray-200 rounded-3xl p-3 flex-row justify-between items-center'>
          <View className='flex-row gap-3 items-center justify-center'>
            <Image
              className='bg-cover rounded-full w-16 h-16 shadow-2xl'
              source={require("../../assets/images/1 Vacation.jpg")}
            />
            <View className='flex-col justify-center items-center'>
              <Text className='font-bold text-lg'>Portofino</Text>
              <Text className='font-light'>14 Nights</Text>
            </View>
          </View>
          <View>
            <Text className='font-bold text-lg'>$3000</Text>
          </View>
        </TouchableOpacity>
        <Text className='font-extralight mt-4'>Last Year</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("VacationDetail", vacation[2])}
          className=' mt-3 border border-gray-200 rounded-3xl p-3 flex-row justify-between items-center'>
          <View className='flex-row gap-3 items-center justify-center'>
            <Image
              className='bg-cover rounded-full w-16 h-16 shadow-2xl'
              source={require("../../assets/images/3 Vacation.jpg")}
            />
            <View className='flex-col justify-center items-center'>
              <Text className='font-bold text-lg'>Monaco</Text>
              <Text className='font-light'>12 Nights</Text>
            </View>
          </View>
          <View>
            <Text className='font-bold text-lg'>$2200</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
