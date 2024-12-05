/** @format */

import React, {useState, useEffect} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import {getItineraries, setAuthToken} from "../../apiCalls/iteneraryApi"
import {useNavigation} from "expo-router"
import {useAuth} from "../reusableComponents/authContext"

export default function ProfileScreen() {
  const imagePaths = [
    require("../../assets/images/1 Vacation.jpg"),
    require("../../assets/images/2 Vacation.jpg"),
    require("../../assets/images/3 Vacation.jpg"),
    require("../../assets/images/4 Vacation.jpg")
  ]
  const {isAuthenticated, setIsAuthenticated} = useAuth()
  const [itineraries, setItineraries] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation<any>()

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
        console.error("Error initializing profile screen:", error)
      } finally {
        setLoading(false)
      }
    }

    initialize()
  }, [])

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
    <ScrollView className='flex-1 pt-10 bg-gray-100'>
      {/* Profile Header */}
      <View className='flex-row items-center justify-between mx-6'>
        <Text className='font-semibold text-3xl'>Your Profile</Text>
        <TouchableOpacity className='p-4 rounded-full'>
          <Ionicons
            onPress={() => navigation.navigate("General Settings")}
            name='ellipsis-vertical'
            color='black'
            size={20}
          />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View className='mt-14 flex-row items-center justify-center gap-4 mx-10'>
        <Image
          className='bg-cover rounded-full w-20 h-20'
          source={require("../../assets/images/Profile Picture.jpg")}
        />
        <View className='flex-1 items-start justify-center'>
          <Text className='text-3xl font-bold'>Andrei Florea</Text>
          <Text className='text-gray-500 font-light text-lg max-w-72 mt-1'>
            Love to visit the most amazing places in the world
          </Text>
        </View>
      </View>

      {/* Itineraries Section */}
      <View className='bg-white rounded-t-3xl w-screen h-full mt-10 px-5 pb-10'>
        <Text className='font-light text-3xl mt-10'>My Trips</Text>

        <View className='flex-wrap flex-row flex-1 items-start justify-center gap-8 mt-6 mb-32'>
          {/* Dynamic Itineraries */}
          {itineraries.length > 0 ? (
            itineraries.map((itinerary, index) => (
              <View key={index} className='flex flex-col gap-3 justify-center'>
                <Image
                  className='bg-cover rounded-3xl w-44 h-40'
                  source={imagePaths[index % imagePaths.length]} // Replace with dynamic images if available
                />
                <Text className='text-gray-700 text-start max-w-40'>
                  {itinerary.title}
                </Text>
              </View>
            ))
          ) : (
            <Text className='text-gray-500 text-xl pt-6'>
              No itineraries available yet
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  )
}
