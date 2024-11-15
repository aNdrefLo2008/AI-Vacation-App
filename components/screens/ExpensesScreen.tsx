/** @format */

import "../../global.css"

import React from "react"
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity
} from "react-native"
import {Ionicons, FontAwesome} from "@expo/vector-icons"

export default function ExpensesScreen({navigation}: {navigation: any}) {
  return (
    <ScrollView className='flex-1 mt-10 bg-gray-100 mb-20'>
      <View className='flex-row mx-4 justify-between'>
        <View className='flex-row gap-4 justify-center items-center'>
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
      <View className='mx-4 items-start justify-center gap-4 mt-10'>
        <Text className=' text-gray-500 text-sm font-medium'>
          Spent on last vacation
        </Text>
        <Text className='font-bold text-4xl'>$14,268.92</Text>
      </View>

      <View className='mx-4 flex-row flex-1 overflow-x-visible items-center justify-center gap-1 mt-10'>
        <View className='flex-1 flex-row justify-center items-center gap-3 bg-black rounded-2xl py-4'>
          <Text className='text-white text-xl font-semibold'>Pay</Text>
          <Ionicons name='cash' size={18} color={"white"} />
        </View>
        <View className='flex-1 flex-row justify-center items-center gap-3 rounded-2xl bg-black py-4'>
          <Text className='text-white text-xl font-semibold'>AI</Text>
          <Ionicons name='hardware-chip' size={18} color={"white"} />
        </View>
      </View>

      <View className='bg-white pb-6 rounded-3xl shadow-2xl flex-1 mt-10 px-6'>
        <View className='flex-row justify-between items-center pt-8'>
          <Text className='text-lg font-semibold'>Vacations</Text>
          <Text className='text-lg font-semibold text-indigo-600'>
            View All
          </Text>
        </View>
        <Text className='font-extralight mt-4'>Last 6 Month</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("VacationDetail", {
              destination: "Maldives",
              nights: 2,
              cost: 500
            })
          }
          className='mt-3 border border-gray-200 rounded-3xl p-4 flex-row justify-between items-center'>
          <View className='flex-row gap-3 items-center justify-center'>
            <Image
              className='bg-cover rounded-full w-16 h-16 shadow-2xl'
              source={require("../../assets/images/2 Vacation.jpg")}
            />
            <View>
              <Text className='font-semibold text-lg'>Maldives</Text>
              <Text className='font-light'>2 Nights</Text>
            </View>
          </View>
          <View>
            <Text className='font-bold text-lg'>$500</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("VacationDetail", {
              destination: "Portofino",
              nights: 14,
              cost: 3000
            })
          }
          className=' mt-3 border border-gray-200 rounded-3xl p-3 flex-row justify-between items-center'>
          <View className='flex-row gap-3 items-center justify-center'>
            <Image
              className='bg-cover rounded-full w-16 h-16 shadow-2xl'
              source={require("../../assets/images/1 Vacation.jpg")}
            />
            <View className='flex-col justify-center items-center'>
              <Text className='font-semibold text-lg'>Portofino</Text>
              <Text className='font-light'>14 Nights</Text>
            </View>
          </View>
          <View>
            <Text className='font-bold text-lg'>$3000</Text>
          </View>
        </TouchableOpacity>
        <Text className='font-extralight mt-4'>Last Year</Text>
        <View className=' mt-3 border border-gray-200 rounded-3xl p-3 flex-row justify-between items-center'>
          <View className='flex-row gap-3 items-center justify-center'>
            <Image
              className='bg-cover rounded-full w-16 h-16 shadow-2xl'
              source={require("../../assets/images/3 Vacation.jpg")}
            />
            <View className='flex-col justify-center items-center'>
              <Text className='font-semibold text-lg'>France</Text>
              <Text className='font-light'>12 Nights</Text>
            </View>
          </View>
          <View>
            <Text className='font-bold text-lg'>$2200</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
