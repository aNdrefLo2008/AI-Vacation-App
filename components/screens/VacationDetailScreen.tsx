/** @format */

import React from "react"
import {View, Text, Dimensions} from "react-native"
import {PieChart, ProgressChart} from "react-native-chart-kit"
import {Ionicons} from "@expo/vector-icons"
import {ScrollView} from "react-native-gesture-handler"

const screenWidth = Dimensions.get("window").width
const halfScreenWidthPadding = screenWidth / 4

export default function VacationDetailScreen({route}: {route: any}) {
  const {destination, nights, cost} = route.params

  const data = [
    {
      name: "Housing",
      population: cost.housing,
      color: "#ffffff"
    },
    {
      name: "Food",
      population: cost.food,
      color: "#adadad"
    },
    {
      name: "Partying",
      population: cost.partying,
      color: "#808080"
    },
    {
      name: "Fun",
      population: cost.activities,
      color: "#000000"
    }
  ]

  const chartConfig = {
    backgroundColor: "transparent", // Transparent background for the chart itself
    backgroundGradientFrom: "transparent",
    backgroundGradientTo: "transparent",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Set the color of the chart
    style: {
      borderRadius: 16 // Optional: Rounded corners for the chart
    }
  }

  return (
    <ScrollView className='flex-1 p-6 pb-52'>
      {/* Circular Chart Section */}
      <View className='flex-1 items-center my-8 justify-center'>
        <PieChart
          data={data}
          width={screenWidth} // Adjust the width based on screen size
          height={220} // Adjust height as needed
          chartConfig={chartConfig}
          accessor='population'
          backgroundColor='transparent'
          paddingLeft={`${halfScreenWidthPadding}`}
          hasLegend={false}
          absolute // Display percentages
        />

        <Text className='text-gray-500 mt-4 text-lg'>
          Spent on trip to {destination}:
        </Text>
        <Text className='text-4xl font-bold text-black mt-2'>
          ${cost.total}
        </Text>
      </View>

      {/* Spending Categories Section */}
      <View className='flex-row flex-wrap justify-between mx-5 mb-8'>
        {/* Category Boxes */}
        <View className='w-[48%] bg-white p-5 rounded-2xl items-center mb-4'>
          <Ionicons name='bed-outline' size={24} color='black' />
          <Text className='text-xl font-bold text-black mt-2'>
            ${cost.housing}
          </Text>
          <Text className='text-gray-500'>Housing</Text>
        </View>
        <View className='w-[48%] bg-white p-5 rounded-2xl items-center mb-4'>
          <Ionicons name='fast-food-outline' size={24} color='black' />
          <Text className='text-xl font-bold text-black mt-2'>
            ${cost.food}
          </Text>
          <Text className='text-gray-500'>Food</Text>
        </View>
        <View className='w-[48%] bg-white p-5 rounded-2xl items-center mb-4'>
          <Ionicons name='musical-notes-outline' size={24} color='black' />
          <Text className='text-xl font-bold text-black mt-2'>
            ${cost.partying}
          </Text>
          <Text className='text-gray-500'>Partying</Text>
        </View>
        <View className='w-[48%] bg-white p-5 rounded-2xl items-center mb-4'>
          <Ionicons name='barbell-outline' size={24} color='black' />
          <Text className='text-xl font-bold text-black mt-2'>
            ${cost.activities}
          </Text>
          <Text className='text-gray-500'>Activities</Text>
        </View>
      </View>
    </ScrollView>
  )
}
