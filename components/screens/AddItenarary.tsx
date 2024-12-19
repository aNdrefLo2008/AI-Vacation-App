/** @format */

import React, {useState} from "react"
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Image
} from "react-native"
import axios from "axios"
import {Ionicons} from "@expo/vector-icons"
import {NotificationToggle} from "../reusableComponents/NotificationToggle"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {useAuth} from "../reusableComponents/authContext"

export default function AddItinerary({navigation}: {navigation: any}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [cost, setCost] = useState("")
  const [expenses, setExpenses] = useState<{title: string; amount: string}[]>([
    {title: "", amount: ""}
  ])
  const {isAuthenticated, setIsAuthenticated} = useAuth()

  const API_URL = "http://192.168.2.39:3000/api"

  const handleCreateItinerary = async () => {
    if (!title || !description || !startDate || !endDate || !cost) {
      Alert.alert("Error", "Please fill in all the fields.")
      return
    }

    try {
      const token = await AsyncStorage.getItem("token")
      if (!token) setIsAuthenticated(false)

      const formattedStartDate = new Date(startDate).toISOString()
      const formattedEndDate = new Date(endDate).toISOString()

      const parsedCost = parseInt(cost)
      const parsedExpenses = expenses
        .filter((expense) => expense.title && expense.amount)
        .map((expense) => ({
          title: expense.title,
          amount: parseFloat(expense.amount)
        }))

      const response = await axios.post(
        `${API_URL}/itineraries`,
        {
          title,
          description,
          startDate: formattedStartDate,
          endDate: formattedEndDate,
          cost: parsedCost,
          expenses: parsedExpenses
        },
        {
          headers: {Authorization: `Bearer ${token}`}
        }
      )

      Alert.alert("Success", "Itinerary created!")
      navigation.navigate("Profile", {})
    } catch (error: any) {
      console.error(
        "Failed to create itinerary:",
        error.response?.data || error.message
      )
      Alert.alert("Error", "Failed to create itinerary.")
    }
  }

  const handleAddExpense = () => {
    setExpenses([...expenses, {title: "", amount: ""}])
  }

  const handleExpenseChange = (index: number, field: string, value: string) => {
    const updatedExpenses: any = [...expenses]
    updatedExpenses[index][field] = value
    setExpenses(updatedExpenses)
  }

  return (
    <View className='flex-1 bg-gray-100 relative'>
      <ScrollView className='mt-10 mx-6 flex-1'>
        {/* Header Section */}
        <View className='flex-row justify-between'>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile", {})}
            className='flex-row gap-4 items-center'>
            <Image
              className='bg-cover rounded-full w-14 h-14'
              source={require("../../assets/images/Profile Picture.jpg")}
            />
          </TouchableOpacity>
          <View className='flex-row gap-3 items-center'>
            <TouchableOpacity
              onPress={() => navigation.navigate("Settings")}
              className='bg-white p-3 shadow-2xl rounded-full items-center justify-center'>
              <Ionicons name='settings-outline' size={20} color='black' />
            </TouchableOpacity>
            <NotificationToggle />
          </View>
        </View>
        <Text className='font-bold text-4xl mt-10'>Add a new Itinerary</Text>
        <View className='flex-1 mt-10 gap-4'>
          {/* Title Input */}
          <View>
            <Text className='text-lg font-light text-left mb-2'>
              Itinerary Title
            </Text>
            <TextInput
              className='text-base text-black bg-white rounded-lg p-4 shadow-lg'
              placeholder='Enter title...'
              placeholderTextColor='#A8A8A8'
              selectionColor='black'
              value={title}
              onChangeText={setTitle}
            />
          </View>

          {/* Description Input */}
          <View className='mt-4'>
            <Text className='text-lg font-light text-left mb-2'>
              Description
            </Text>
            <TextInput
              className='text-xl text-black bg-white rounded-2xl p-6 h-36 shadow-lg'
              placeholder='Describe your vacation...'
              placeholderTextColor='#A8A8A8'
              selectionColor='black'
              multiline
              value={description}
              onChangeText={setDescription}
            />
          </View>

          {/* Start Date Input */}
          <View className='mt-4'>
            <Text className='text-lg font-light text-left mb-2'>
              Start Date
            </Text>
            <TextInput
              className='text-base text-black bg-white rounded-lg p-4 shadow-lg'
              placeholder='YYYY-MM-DD'
              placeholderTextColor='#A8A8A8'
              selectionColor='black'
              value={startDate}
              onChangeText={setStartDate}
            />
          </View>

          {/* End Date Input */}
          <View className='mt-4'>
            <Text className='text-lg font-light text-left mb-2'>End Date</Text>
            <TextInput
              className='text-base text-black bg-white rounded-lg p-4 shadow-lg'
              placeholder='YYYY-MM-DD'
              placeholderTextColor='#A8A8A8'
              selectionColor='black'
              value={endDate}
              onChangeText={setEndDate}
            />
          </View>

          {/* Cost Input */}
          <View className='mt-4'>
            <Text className='text-lg font-light text-left mb-2'>
              Total Cost
            </Text>
            <TextInput
              className='text-base text-black bg-white rounded-lg p-4 shadow-lg'
              placeholder='Enter total cost...'
              placeholderTextColor='#A8A8A8'
              selectionColor='black'
              value={cost}
              onChangeText={setCost}
              keyboardType='numeric'
            />
          </View>

          {/* Expenses Section */}
          <View className='mt-6'>
            <Text className='text-lg font-bold mb-4'>Expenses</Text>
            {expenses.map((expense, index) => (
              <View key={index} className='flex-row gap-2 items-center mb-4'>
                <TextInput
                  className='flex-1 text-base text-black bg-white rounded-lg p-4 shadow-lg'
                  placeholder='Expense title...'
                  placeholderTextColor='#A8A8A8'
                  value={expense.title}
                  onChangeText={(value) =>
                    handleExpenseChange(index, "title", value)
                  }
                />
                <TextInput
                  className='flex-1 text-base text-black bg-white rounded-lg p-4 shadow-lg'
                  placeholder='Amount'
                  placeholderTextColor='#A8A8A8'
                  value={expense.amount}
                  onChangeText={(value) =>
                    handleExpenseChange(index, "amount", value)
                  }
                  keyboardType='numeric'
                />
              </View>
            ))}
            <TouchableOpacity onPress={handleAddExpense}>
              <Text className='text-indigo-600 text-lg'>+ Add Expense</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          className='mt-40 bg-gray-800 p-6 justify-center shadow-2xl flex-row items-center rounded-3xl mx-4'
          style={{bottom: 85}}
          onPress={handleCreateItinerary}>
          <Text className='font-bold text-white text-3xl'>Prepare Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
