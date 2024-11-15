/** @format */

import React from "react"
import {View, Text, Dimensions} from "react-native"
import {PieChart, ProgressChart} from "react-native-chart-kit"
import {Ionicons} from "@expo/vector-icons"
import {ScrollView} from "react-native-gesture-handler"

const screenWidth = Dimensions.get("window").width
const halfScreenWidthPadding = screenWidth / 4

export default function VacationDetailScreen({route}: {route: any}) {
  const data = [
    {
      name: "Category A",
      population: 250,
      color: "#ffffff"
    },
    {
      name: "Category B",
      population: 150,
      color: "#adadad"
    },
    {
      name: "Category C",
      population: 100,
      color: "#808080"
    },
    {
      name: "Category D",
      population: 450,
      color: "#000000"
    }
  ]
  const {destination, nights, cost} = route.params

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
        <Text className='text-4xl font-bold text-black mt-2'>${cost}</Text>
      </View>

      {/* Spending Categories Section */}
      <View className='flex-row flex-wrap justify-between mx-5 mb-8'>
        {/* Category Boxes */}
        <View className='w-[48%] bg-white p-5 rounded-2xl items-center mb-4'>
          <Ionicons name='flash' size={24} color='#FFA500' />
          <Text className='text-xl font-bold text-black mt-2'>$450</Text>
          <Text className='text-gray-500'>Utilities</Text>
        </View>
        <View className='w-[48%] bg-white p-5 rounded-2xl items-center mb-4'>
          <Ionicons name='cart' size={24} color='#32CD32' />
          <Text className='text-xl font-bold text-black mt-2'>$150</Text>
          <Text className='text-gray-500'>Expenses</Text>
        </View>
        <View className='w-[48%] bg-white p-5 rounded-2xl items-center mb-4'>
          <Ionicons name='card' size={24} color='#4682B4' />
          <Text className='text-xl font-bold text-black mt-2'>$250</Text>
          <Text className='text-gray-500'>Payments</Text>
        </View>
        <View className='w-[48%] bg-white p-5 rounded-2xl items-center mb-4'>
          <Ionicons name='musical-notes' size={24} color='#FF4500' />
          <Text className='text-xl font-bold text-black mt-2'>$100</Text>
          <Text className='text-gray-500'>Subscriptions</Text>
        </View>
      </View>
    </ScrollView>
  )
}
