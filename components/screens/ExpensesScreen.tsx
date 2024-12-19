/** @format */

import "../../global.css"

import React, {useState, useEffect} from "react"
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native"
import {Ionicons} from "@expo/vector-icons"
import {NotificationToggle} from "../reusableComponents/NotificationToggle"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {getItineraries, setAuthToken} from "../../apiCalls/iteneraryApi"
import {useAuth} from "../reusableComponents/authContext"

export default function ExpensesScreen({navigation}: {navigation: any}) {
  const imagePaths = [
    require("../../assets/images/1 Vacation.jpg"),
    require("../../assets/images/2 Vacation.jpg"),
    require("../../assets/images/3 Vacation.jpg"),
    require("../../assets/images/4 Vacation.jpg")
  ]
  const {isAuthenticated, setIsAuthenticated} = useAuth()
  const [itineraries, setItineraries] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initialize = async () => {
      try {
        const token = await AsyncStorage.getItem("token")
        if (token) {
          setAuthToken(token)
          const data = await fetchItineraries()
          setItineraries(data || [])
        } else {
          setIsAuthenticated(false)
        }
      } catch (error) {
        console.error("Error initializing expenses screen:", error)
      } finally {
        setLoading(false)
      }
    }

    initialize()
  }, [isAuthenticated]) // Re-fetch if isAuthenticated state changes

  const fetchItineraries = async () => {
    try {
      const data = await getItineraries({isAuthenticated, setIsAuthenticated})
      return data
    } catch (error) {
      console.error("Error fetching itineraries:", error)
      return []
    }
  }

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }

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
          onPress={() => navigation.navigate("AI", itineraries[0])}
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
        <Text className='font-extralight mt-4'>Last Year</Text>

        {/* Render itineraries dynamically */}
        {itineraries.map((itinerary, index) => {
          // Calculate the number of nights based on the date difference
          const startDate = new Date(itinerary.startDate)
          const endDate = new Date(itinerary.endDate)
          const nights = Math.max(
            Math.ceil(
              (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
            ),
            0 // Ensure non-negative nights
          )

          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("VacationDetail", itinerary)}
              className='mt-3 border border-gray-200 rounded-3xl p-4 flex-row justify-between items-center'>
              <View className='flex-row gap-3 items-center justify-center'>
                <Image
                  className='bg-cover rounded-full w-16 h-16 shadow-2xl'
                  source={imagePaths[index % imagePaths.length]}
                />
                <View>
                  <Text className='font-bold text-lg'>{itinerary.title}</Text>
                  <Text className='font-thin'>{nights} Nights</Text>
                </View>
              </View>
              <View>
                <Text className='font-bold text-lg'>${itinerary.cost}</Text>
              </View>
            </TouchableOpacity>
          )
        })}

        {itineraries.length === 0 && (
          <Text className='text-gray-500 text-center mt-4'>
            No itineraries available.
          </Text>
        )}
      </View>
    </ScrollView>
  )
}
