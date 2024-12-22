/** @format */

import React, {useEffect} from "react"
import {View, Text, Dimensions} from "react-native"
import {PieChart} from "react-native-chart-kit"
import {Ionicons} from "@expo/vector-icons"
import {ScrollView} from "react-native-gesture-handler"
import AsyncStorage from "@react-native-async-storage/async-storage"

const screenWidth = Dimensions.get("window").width
const halfScreenWidthPadding = screenWidth / 4

export default function VacationDetailScreen({route}: {route: any}) {
  const {title, cost, expenses} = route.params

  const token = AsyncStorage.getItem("token")

  // Check if expenses are available
  const expenseData = expenses && expenses.length > 0 ? expenses : []

  // Prepare data for the PieChart
  const totalExpense = expenseData.reduce(
    (sum: any, expense: any) => sum + expense.amount,
    0
  )
  const remainingCost = cost - totalExpense > 0 ? cost - totalExpense : 0

  const chartData = [
    ...expenseData.map((expense: any) => ({
      name: expense.title,
      population: expense.amount,
      color: getRandomColor() // Generates a random color for each expense
    })),
    {
      name: "Remaining Budget",
      population: remainingCost,
      color: "#d3d3d3" // Gray for remaining budget
    }
  ]

  // Chart configuration
  const chartConfig = {
    backgroundColor: "transparent",
    backgroundGradientFrom: "transparent",
    backgroundGradientTo: "transparent",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }

  return (
    <ScrollView className='flex-1 p-6 pb-52'>
      {/* Circular Chart Section */}
      <View className='flex-1 items-center my-8 justify-center'>
        <PieChart
          data={chartData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor='population'
          backgroundColor='transparent'
          paddingLeft={`${halfScreenWidthPadding}`}
          hasLegend={false}
          absolute
        />

        <Text className='text-gray-500 mt-4 text-lg'>Total budget</Text>
        <Text className='text-4xl font-bold text-black mt-2'>${cost}</Text>
      </View>

      {/* Spending Categories Section */}
      <View className='flex-row flex-wrap justify-between mx-5 mb-8'>
        {expenseData.map((expense: any, index: number) => {
          // Define the repeating icon pattern
          const icons: Array<
            | "bed-outline"
            | "barbell-outline"
            | "diamond-outline"
            | "cash-outline"
          > = [
            "bed-outline",
            "barbell-outline",
            "diamond-outline",
            "cash-outline"
          ]

          // Select the icon based on the index
          const iconName = icons[index % icons.length]

          return (
            <View
              key={expense.id}
              className='w-[48%] bg-white p-5 rounded-2xl items-center mb-4'>
              <Ionicons name={iconName} size={24} color='black' />
              <Text className='text-xl font-bold text-black mt-2'>
                ${expense.amount}
              </Text>
              <Text className='text-gray-500'>{expense.title}</Text>
            </View>
          )
        })}
        {remainingCost > 0 && (
          <View className='w-[48%] bg-white p-5 rounded-2xl items-center mb-4'>
            <Ionicons name='wallet-outline' size={24} color='black' />
            <Text className='text-xl font-bold text-black mt-2'>
              ${remainingCost}
            </Text>
            <Text className='text-gray-500'>Remaining</Text>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

// Helper function to generate distinguishable shades of gray for the pie chart
const getRandomColor = (() => {
  const usedValues = new Set() // Track used gray values
  let hasBlack = false // Ensure black is included
  let hasWhite = false // Ensure white is included
  const lightGrayThreshold = 200 // Avoid values close to light gray (e.g., 200)

  return () => {
    // Ensure black and white are included
    if (!hasBlack) {
      hasBlack = true
      usedValues.add(0) // Mark black as used
      return "#000000"
    }
    if (!hasWhite) {
      hasWhite = true
      usedValues.add(255) // Mark white as used
      return "#FFFFFF"
    }

    // Generate a random distinguishable gray value
    const stepSize = 30 // Adjust step size for distinguishability
    let value

    do {
      value = Math.floor(Math.random() * (256 / stepSize)) * stepSize
    } while (
      usedValues.has(value) || // Avoid duplicates
      (value > lightGrayThreshold - stepSize &&
        value < lightGrayThreshold + stepSize) // Avoid light gray
    )

    // Store the used value to prevent reuse
    usedValues.add(value)

    // Convert the value to a 2-character hexadecimal string
    const grayHex = value.toString(16).padStart(2, "0")

    // Construct the color string by repeating the gray value
    return `#${grayHex}${grayHex}${grayHex}`
  }
})()
